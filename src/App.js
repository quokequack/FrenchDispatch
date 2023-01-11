
import './styles/App.css';
import HomeScreen from './components/HomeScreen';
import '../src/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeScreen />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/signin" element={<SignIn />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
