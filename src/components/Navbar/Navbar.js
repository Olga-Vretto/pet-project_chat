import { AppBar, Box, Button, Toolbar } from '@mui/material';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../constants/consts';
import { Context } from '../..';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <AppBar position='static' style={{ background: 'lightblue' }}>
      <Toolbar variant={'dense'}>
        <Box sx={{ flexGrow: 1 }} />
        {user ? (
          <Button onClick={() => auth.signOut()} variant={'outlined'}>
            Back
          </Button>
        ) : (
          <NavLink to={LOGIN_ROUTE}>
            <Button variant={'outlined'}>Login</Button>
          </NavLink>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
