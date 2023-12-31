import { Container, Grid } from '@mui/material';
import React from 'react';
import './Loader.css'

const Loader = () => {
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Grid container alignItems={'center'} direction={'column'}>
          <div class='loader'>
            <div></div>
            <div></div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Loader;
