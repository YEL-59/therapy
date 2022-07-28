import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Signin from './pages/Authentication/Signin';
import Signup from './pages/Authentication/Signup';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';

import Rfp from './pages/rfp/Rfp';

import About from './pages/company/About';
import Testimonials from './pages/company/Testimonials';
import Career from "./pages/company/Career";
import Quote from './pages/company/Quote';

function App() {
	return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rfp" element={<Rfp />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonial" element={<Testimonials />} />
        <Route path="/career" element={<Career />} />
        <Route path="/quote" element={<Quote />} />
    
      </Routes>
      <Footer />
    </>
  );
}

export default App;
