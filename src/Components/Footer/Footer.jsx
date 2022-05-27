import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import logo_verde from "../../sunnyside-agency-landing-page-main//images/logo_verde.svg";
import facebook from "../../sunnyside-agency-landing-page-main/images/icon-facebook.svg";
import instagram from "../../sunnyside-agency-landing-page-main/images/icon-instagram.svg";
import twitter from "../../sunnyside-agency-landing-page-main/images/icon-twitter.svg";
import pinterest from "../../sunnyside-agency-landing-page-main/images/icon-pinterest.svg";

function Footer() {
	return (
		<Box bg={"#7AD6C5"} py="80px">
			<Stack justify={"center"} align="center">
				<Image src={logo_verde} alt="Logo" h={"30px"} />

				<Flex justify={"space-around"} align="center">
					<Text _hover={{ color: "white" }} m={7} color={"#128572"}>
						About
					</Text>
					<Text _hover={{ color: "white" }} m={8} color={"#128572"}>
						Services
					</Text>
					<Text _hover={{ color: "white" }} m={8} color={"#128572"}>
						Projects
					</Text>
				</Flex>
				<Flex>
					<Image cursor={'pointer'} mx={4} src={facebook} alt="facebook" />
					<Image cursor={'pointer'} mx={4} src={instagram} alt="instagram" />
					<Image cursor={'pointer'} mx={4} src={twitter} alt="twitter" />
					<Image cursor={'pointer'} mx={4} src={pinterest} alt="pinterest" />
				</Flex>
			</Stack>
		</Box>
	);
}

export default Footer;
