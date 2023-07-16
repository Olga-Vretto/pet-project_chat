import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppLayout from './app/AppLayout/AppLayout';
import { useContext } from 'react';
import { Context } from '.';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from './components/Loader/Loader';


function App() {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if(loading) {
    return <Loader />
  }
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
