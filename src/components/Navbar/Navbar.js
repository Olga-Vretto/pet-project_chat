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
    <AppBar
      position='static'
      style={{ background: 'rgb(77, 109, 225)', height: 60, justifyContent: 'center' }}
    >
      <Toolbar variant={'dense'}>
        <Box sx={{ flexGrow: 1 }} />
        {user ? (
          <Button onClick={() => auth.signOut()} variant='outlined' style={{ color: 'white', border: '1px solid white'}} >
            Back
          </Button>
        ) : (
          <NavLink to={LOGIN_ROUTE}>
            <Button variant='outlined' style={{ color: 'white', border: '1px solid white'}}>Login</Button>
          </NavLink>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
