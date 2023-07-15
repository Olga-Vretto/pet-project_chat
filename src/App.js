import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppLayout from './app/AppLayout/AppLayout';


function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
