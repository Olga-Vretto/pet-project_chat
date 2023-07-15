import { Box, Button, Container, Grid } from '@mui/material';
import React from 'react';

const Login = () => {
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
            <Button variant={'outlined'}>Enter with Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
