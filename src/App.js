import './App.css';
import Navbar from './navbar';
import Slider from './slider';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './about';
import Footer from './footer';
import NotFound from './notFound';

function App() {
  return (
    
      <div className="App">
        
          <Router>
            <Navbar />

            <Routes>
              <Route path="/" element={ <Slider /> } />
              <Route path="/about" element={ <About /> } />
              <Route path="*" element={<NotFound />} />
              
            </Routes>

            <Footer />
      </Router>
      </div>
    
  );
}

export default App;
