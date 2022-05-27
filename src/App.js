import { Box } from '@chakra-ui/react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Main from './Components/Main/Main';


function App() {
  return (
    <Box className="App">
      <Navbar/>
      <Banner/>
      <Main/>
    </Box>
  );
}

export default App;
