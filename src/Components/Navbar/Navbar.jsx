import React from "react";
import { useState } from "react";
import {
	Box,
	Button,
	Flex,
	Link,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	IconButton,
} from "@chakra-ui/react";
import logo from "../../sunnyside-agency-landing-page-main/images/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";

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
				<Menu autoSelect={false}>
					<MenuButton
						as={IconButton}
						aria-label="Options"
						icon={<AiOutlineMenu />}
						fontSize={"3xl"}
						bg="none"
						color={"#ffff"}
						textAlign="center"
						_focus={{ outline: "none" }}
						_hover={{ bg: "none" }}
					/>
					<MenuList>
						<MenuItem justifySelf={"center"} color="#898691">
							About
						</MenuItem>
						<MenuItem color="#898691">Services</MenuItem>
						<MenuItem color="#898691">Projects</MenuItem>
						<MenuItem>
							<Box>
								<Button
									fontFamily={"Fraunces"}
									fontSize={"small"}
									bg="#FFD400"
									borderRadius="3xl"
									_hover={{ bg: "#FFD400", textTransform: "none" }}
								>
									CONTACT
								</Button>
							</Box>
						</MenuItem>
					</MenuList>
				</Menu>
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
