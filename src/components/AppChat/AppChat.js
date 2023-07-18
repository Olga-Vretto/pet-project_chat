import { collection, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useContext, useState } from 'react';
import { Context } from '../..';
import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import Loader from '../Loader/Loader';


const AppChat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState('');

  const messagesRef = collection(firestore, 'messages');
  const messagesQuery = query(messagesRef, orderBy('createdAt'));

  const [messages, loading] = useCollectionData(messagesQuery, { idField: 'id' });

  const sendMessage = async () => {
    await addDoc(messagesRef, {
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: serverTimestamp(),
    });
    setValue('');
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Grid
        container
        justifyContent={'center'}
        style={{ height: window.innerHeight - 50, marginTop: 20 }}
      >
        <div style={{ width: '80%', height: '60vh', border: '1px solid blue', overflowY: 'auto' }}>
          {messages && messages.map((message) => <div key={message.uid}>{message.text}
          <Grid container>
            <Avatar src={message.photoURL}/>
            <div></div>
            </Grid></div>)}
        </div>
        <Grid container direction={'column'} alignItems={'flex-end'} style={{ width: '80%' }}>
          <TextField
            fullWidth
            maxRows={2}
            variant={'outlined'}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button onClick={sendMessage} variant={'outlined'}>
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppChat;