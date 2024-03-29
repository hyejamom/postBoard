import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Basic } from './components/Basic';
import { About } from './components/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic" element={<Basic />} />
        <Route path="/about/*" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
