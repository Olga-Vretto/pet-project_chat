import { AppBar, Box, Button, Toolbar } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../constants/consts';

const Navbar = () => {
  const user = false;
  return (
    <AppBar color={'transparent'} position='static'>
      <Toolbar variant={'dense'}>
        <Box sx={{ flexGrow: 1 }} />
        {user ? (
          <Button variant={'outlined'}>Login</Button>
        ) : (
          <NavLink to={LOGIN_ROUTE}>
            <Button variant={'outlined'}>Back</Button>
          </NavLink>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
