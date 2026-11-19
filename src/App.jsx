import './App.css'; // <-- AÑADE ESTA LÍNEA
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AtractiusList from './pages/AtractiusList';
import AtractiuDetall from './pages/AtractiuDetall';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atractius" element={<AtractiusList />} />
        <Route path="/atractius/:id" element={<AtractiuDetall />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;