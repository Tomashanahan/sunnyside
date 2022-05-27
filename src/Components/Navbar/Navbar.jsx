import { useState } from "react";
import { Box, Button, Flex, Link } from "@chakra-ui/react";
import React from "react";
import logo from "../../sunnyside-agency-landing-page-main/images/logo.svg";

function Navbar() {
	const [_width, set_width] = useState(window.frames.innerWidth);
	window.addEventListener("resize", () => {
		set_width(window.frames.innerWidth);
	});
	console.log(_width);
	return (
		<Flex
			bg="#3EC0FF"
			justify={"space-between"}
			align="center"
			p={4}
			position="relative"
			zIndex={5}
		>
			<img src={logo} alt="Logo" />
			{_width <= 650 ? (
				<p>Hola</p>
			) : (
				<Flex justify={"space-around"} align="center">
					<Link mx={4} color={"#FFFCFF"}>
						About
					</Link>
					<Link mx={4} color={"#FFFCFF"}>
						Services
					</Link>
					<Link mx={4} color={"#FFFCFF"}>
						Projects
					</Link>
					<Link mx={4}>
						<Box>
							<Button
								fontFamily={"Fraunces"}
								fontSize={"small"}
								color={"#FFFCFF"}
								bg="#41D1FF"
								borderRadius="3xl"
								_hover={{ bg: "#41D1FF", textTransform: "none" }}
							>
								CONTACT
							</Button>
						</Box>
					</Link>
				</Flex>
			)}
		</Flex>
	);
}

export default Navbar;
