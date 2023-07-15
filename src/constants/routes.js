import AppChat from "../components/AppChat/AppChat";
import Login from "../components/Login/Login";
import { CHAT_ROUTE, LOGIN_ROUTE } from "./consts";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    element: <Login />,
  }
]

export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    element: <AppChat />,
  }
]

export const ROUTES = {
  undefined: '*'
}


