import { collection, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useContext, useRef, useState } from 'react';
import { Context } from '../..';
import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import Loader from '../Loader/Loader';
import styles from './AppChat.module.scss';

const AppChat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState('');

  const messagesRef = collection(firestore, 'messages');
  const messagesQuery = query(messagesRef, orderBy('createdAt'));

  const [messages, loading] = useCollectionData(messagesQuery, { idField: 'id' });
  const messagesContainerRef = useRef(null);

  const sendMessage = async () => {
    await addDoc(messagesRef, {
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: serverTimestamp(),
    });
    setValue('');
    messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Grid className={styles['chat']} container justifyContent={'center'}>
        <div
          ref={messagesContainerRef}
          className={styles['chat']}
          style={{ width: '80%', height: '60vh', border: '1px solid blue', overflowY: 'auto' }}
        >
          {messages &&
            messages.map((message, index) => (
              <div
                key={index}
                style={{
                  margin: 10,
                  border: user.uid === message.uid ? '2px solid green' : '2px solid red',
                  marginLeft: user.uid === message.uid ? 'auto' : '10px',
                  width: 'fit-content',
                  padding: 5,
                }}
              >
                <Grid container>
                  <Avatar src={message.photoURL} />
                  <div>{message.displayName}</div>
                </Grid>
                <div>{message.text}</div>
              </div>
            ))}
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
