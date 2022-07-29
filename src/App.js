import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';



import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';



function App() {
	return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/home" element={<Home />} />
    
   
  
       
    
      </Routes>
      <Footer />
    </>
  );
}

export default App;
