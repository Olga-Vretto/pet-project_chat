import { Box, Button, Container, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { Context } from '../..';
import { GoogleAuthProvider, getAuth, signInWithRedirect } from 'firebase/auth';
import styles from './Login.module.scss';

const Login = () => {
  const { firebaseApp } = useContext(Context);
  const auth = getAuth(firebaseApp);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithRedirect(auth, provider);
    } catch (error) {
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
        <Grid className={styles['login']} container alignItems={'center'} direction={'column'}>
          <Box p={5}>
            <Button onClick={login} variant={'outlined'}>
              Enter with Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
