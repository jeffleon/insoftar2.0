import logo from './logo.svg';
import './App.css';
import Create_user from './page/Create_User';
import Routes from './routes/routes';
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
