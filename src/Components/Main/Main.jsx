import React from "react";
import huevo from "../../sunnyside-agency-landing-page-main/images/desktop/image-transform.jpg";
import cerezas from "../../sunnyside-agency-landing-page-main/images/desktop/image-graphic-design.jpg";
import naranja from "../../sunnyside-agency-landing-page-main/images/desktop/image-photography.jpg";
import copa from "../../sunnyside-agency-landing-page-main/images/desktop/image-stand-out.jpg";
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";

let data = [
	{
		img: huevo,
		title: "Transform your brand",
		paragraph:
			"We are a full-service creative agency specializing in herlping brands grow fast. Engage your clients through compelling visuals that do most od the marketing for you.",
	},
	{
		img: copa,
		title: "Stand out to the right audience",
		paragraph:
			"Using a collaborative formula of disigners, researchers, photographers, videographers, an copywriters, we'll build and extend your brand in digital places.",
	},
];

let data_2 = [
	{
		img: cerezas,
		title: "Graphic Design",
		paragraph:
			"Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention.",
	},
	{
		img: naranja,
		title: "Photography",
		paragraph:
			"Increase your credibility by getting the most stunning, high-quality photos that improve your business image",
	},
];

function Main() {
	return (
		<Box mt="750px">
			{data.map((elem, i) => {
				return (
					<Flex key={i} flexDirection={i % 2 !== 0 && "row-reverse"}>
						<Stack w={"50%"} p="100px" align={"flex-start"} justify="center">
							<Text
								fontFamily={"'Fraunces', serif"}
								fontWeight={"extrabold"}
								fontSize="40px"
								textAlign="left"
							>
								{elem.title}
							</Text>
							<Text color="#868688" fontWeight={"hairline"} textAlign="left">
								{elem.paragraph}
							</Text>
							<Box>
								<Text
									fontFamily={"'Fraunces', serif"}
									fontWeight={"extrabold"}
									textAlign="left"
									mb="-10px"
								>
									LEARN MORE
								</Text>
								<Box
									bg={i % 2 === 0 ? "#FDD100" : "#FF7366"}
									ml="-5px"
									h="10px"
									w="130px"
									borderRadius={"2xl"}
								/>
							</Box>
						</Stack>
						<Box w={"50%"}>
							<Image src={elem.img} alt="Foto" />
						</Box>
					</Flex>
				);
			})}
			<Flex>
				{data_2.map((elem, i) => {
					return (
						<Box key={i} w="50%">
							<Image src={elem.img} alt="Foto" />
							<Stack
								position={"relative"}
								top="-300px"
								p="100px"
								align={"center"}
								justify="center"
							>
								<Text
									fontFamily={"'Fraunces', serif"}
									fontWeight={"extrabold"}
									fontSize="40px"
									textAlign="center"
									color={i === 0 ? "#005846" : "#005369"}
									mb="20px"
								>
									{elem.title}
								</Text>
								<Text
									color={i === 0 ? "#005846" : "#005369"}
									fontWeight={"hairline"}
									textAlign="center"
								>
									{elem.paragraph}
								</Text>
							</Stack>
						</Box>
					);
				})}
			</Flex>
		</Box>
	);
}

export default Main;
