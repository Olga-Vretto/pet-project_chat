import { Box, Button, Container, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { Context } from '../..';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';


const Login = () => {
  const { firebaseApp } = useContext(Context);
  const auth = getAuth(firebaseApp);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
    } catch (error) {
      // Handle any errors during authentication
      console.log(error);
    }
  };

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Grid
          style={{ width: 480, background: 'lightblue' }}
          container
          alignItems={'center'}
          direction={'column'}
        >
          <Box p={5}>
            <Button onClick={login} variant={'outlined'}>Enter with Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
