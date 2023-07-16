import React, { useContext, useState } from 'react';
import { Context } from '../..';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Button, Container, Grid, TextField } from '@mui/material';

const AppChat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState('');

  return (
    <Container>
      <Grid
        container
        justifyContent={'center'}
        style={{ height: window.innerHeight - 50, marginTop: 20 }}
      >
        <div
          style={{ width: '80%', height: '60vh', border: '1px solid blue', overflowY: 'auto' }}
        ></div>
        <Grid container direction={'column'} alignItems={'flex-end'} style={{ width: '80%' }}>
          <TextField
            fullWidth
            maxRows={2}
            variant={'outlined'}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button variant={'outlined'}>Send</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppChat;
