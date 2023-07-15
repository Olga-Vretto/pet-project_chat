import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES, privateRoutes, publicRoutes } from '../../constants/routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../../constants/consts';

const AppRoutes = () => {
  const user = false;
  return user ? (
    <Routes>
      {privateRoutes.map(({ path, element }) => (
        <Route path={path} element={element} exact={true} />
      ))}
      <Route path={ROUTES.undefined} element={<Navigate to={CHAT_ROUTE} />}  />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, element }) => (
        <Route path={path} element={element} exact={true} />
      ))}
       <Route path={ROUTES.undefined} element={<Navigate to={LOGIN_ROUTE} />}  />
    </Routes>
  );
};

export default AppRoutes;
