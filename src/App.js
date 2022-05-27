import { Box } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Main from "./Components/Main/Main";
import Testimonials from "./Components/Testimonials/Testimonials";
import Imgs from "./Components/Imgs/Imgs";
import Footer from "./Components/Footer/Footer";

function App() {
	return (
		<Box className="App" /* maxW={'1440px'} */>
			<Box bg="#3EC0FF">
				<Box maxW={"1440px"} m="auto">
					<Navbar />
				</Box>
				<Box maxW={"1440px"} m="auto">
					<Banner />
				</Box>
			</Box>
			<Box maxW={"1440px"} m="auto">
				<Main />
			</Box>
			<Box maxW={"1440px"} m="auto">
				<Testimonials />
			</Box>
			<Imgs />
			<Footer />
		</Box>
	);
}

export default App;
