import React from "react";
import naranja from "../../sunnyside-agency-landing-page-main/images/desktop/image-header.jpg";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import flecha from "../../sunnyside-agency-landing-page-main/images/icon-arrow-down.svg";

function Banner() {
	return (
		<Box mt={"-50px"}>
			<Text
				fontFamily={"'Fraunces', serif"}
				fontWeight={"extrabold"}
				letterSpacing={"widest"}
				fontSize={["20px", "40px", "50px"]}
				color={"#FFFCFF"}
				position={"relative"}
				top={["40px", "40px", "100px"]}
				my={["40px", "0", "0"]}
				zIndex={2}
			>
				WE ARE CREATIVES
			</Text>

			<Box
				position={"absolute"}
				zIndex={10}
				left={"48%"}
				top={["3.7%", "5%","8%"]}
			>
				<Image src={flecha} alt={"svg"} w={["20px", "30px","50px"]} />
			</Box>

			<Flex position={"relative"} zIndex={1} mt={"-50px"} justify="center">
				<Image src={naranja} alt="Banner" w={['100%','100%','100%']} h='100%'/>
			</Flex>
		</Box>
	);
}

export default Banner;
