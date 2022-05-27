import React from "react";
import naranja from "../../sunnyside-agency-landing-page-main/images/desktop/image-header.jpg";
import { Box, Text } from "@chakra-ui/react";
import flecha from "../../sunnyside-agency-landing-page-main/images/icon-arrow-down.svg";

function Banner() {
	return (
		<Box mt={"-50px"}>
			<Text
				fontFamily={"'Fraunces', serif"}
				fontWeight={"extrabold"}
				letterSpacing={"widest"}
				fontSize="50px"
				color={"#FFFCFF"}
				bg="#3ABFFF"
				position={"relative"}
				top="150px"
				zIndex={2}
			>
				WE ARE CREATIVES
			</Text>

			<Box position={"absolute"} zIndex={10} left={"48%"} top={"10%"}>
				<img src={flecha} alt={"svg"} width="50px" />
			</Box>

			<Box position={"absolute"} zIndex={1} mt={"-50px"}>
				<img src={naranja} alt="Banner" />
			</Box>
		</Box>
	);
}

export default Banner;
