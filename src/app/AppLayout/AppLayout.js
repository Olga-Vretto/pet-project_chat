import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import AppRoutes from '../AppRoutes/AppRoutes';
const AppLayout = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
};

export default AppLayout;
