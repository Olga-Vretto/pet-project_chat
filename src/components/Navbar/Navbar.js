import { AppBar, Box, Button, Toolbar } from '@mui/material';
import React from 'react';

const Navbar = () => {
  const user = false;
  return (
    <AppBar color={'transparent'} position='static'>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        {user ? (
          <Button variant={'outlined'}>Login</Button>
        ) : (
          <Button variant={'outlined'}>Back</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
