import { Box } from '@chakra-ui/react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Main from './Components/Main/Main';
import Testimonials from './Components/Testimonials/Testimonials';
import Imgs from './Components/Imgs/Imgs';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <Box className="App">
      <Navbar/>
      <Banner/>
      <Main/>
      <Testimonials/>
      <Imgs/>
      <Footer/>
    </Box>
  );
}

export default App;
