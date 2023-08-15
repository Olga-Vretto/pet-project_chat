import { collection, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useContext, useRef, useState } from 'react';
import { Context } from '../..';
import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Loader from '../Loader/Loader';
import './AppChat.css';

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
      <Grid className='chat' container justifyContent={'center'}>
        <div ref={messagesContainerRef} className='chat-box'>
          {messages &&
            messages.map((message, index) => (
              <div
                key={index}
                className={`chat-messages ${
                  user.uid === message.uid ? 'chat-messages-blue' : 'chat-messages-grey'
                }`}
              >
                {user.uid === message.uid ? (
                  <>
                    <div className='message-content'>{message.text}</div>
                    <Avatar src={message.photoURL} />
                  </>
                ) : (
                  <>
                    <Avatar src={message.photoURL} />
                    <div className='message-content'>{message.text}</div>
                  </>
                )}
              </div>
            ))}
        </div>
        <Grid className='text-box'>
          <TextField 
            fullWidth
            maxRows={2}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{color: 'rgb(77, 109, 225)'}}
          className='text-field'
          />
          <Button onClick={sendMessage} variant='contained' endIcon={<SendIcon />} style={{background: 'rgb(77, 109, 225)'}}>
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppChat;
