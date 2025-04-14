import './App.css';
import Header from './Components/Header/Header.jsx'
import Next from './Components/Next/Next.jsx'
import Head from './Components/Head/Head.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/Next" element={<Next />} />
      <Route path="/Head" element={<Head />} />
    </Routes>
  </Router>
  );
}
export default App;
