import './App.css';
import Home from './components/Home';
import UserForm from './components/UserForm';
import UserFormWithHooks from './components/UserFormWithHooks';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import { Container } from '@mui/material';

import Counter from './components/UserFormWithHooks';

function App() {

  return (
    <div className="App">
      <NavigationBar />

      <Container fixed maxWidth='1000'>
        <UserFormWithHooks />
      </Container>

      <Footer />
    </div>
  );
}

export default App;
