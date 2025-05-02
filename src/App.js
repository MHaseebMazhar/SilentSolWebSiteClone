import './App.css';
import Header from './Components/Header/Header.jsx'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import Services from './Components/Services/Services.jsx';
import ContactUs from './Components/ContactUs/ContactUs.jsx';
import Portfolio from './Components/Portfolio/Portfolio.jsx';
import Career from './Components/Career/Career.jsx';
import OurStory from './Components/OurStory/OurStory.jsx';
function App() {
  return (
  
    <Router>
     <Header/>
      <Routes>
      
      <Route path="/Home" element={<Home />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Career" element={<Career />} />
      <Route path="/OurStory" element={<OurStory />} />
      </Routes>
      
      
    </Router>
  
  );
}
export default App;
