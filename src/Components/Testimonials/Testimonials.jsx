import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import emily from "../../sunnyside-agency-landing-page-main/images/image-emily.jpg";
import jennie from "../../sunnyside-agency-landing-page-main/images/image-jennie.jpg";
import thomas from "../../sunnyside-agency-landing-page-main/images/image-thomas.jpg";

const testimonials = [
	{
		img: emily,
		text: "We put our trust in Sunnyside and the delivered, making sure our needs were met and deadlines were always hit.",
		name: "Emily R.",
		position: "Marketing Director",
	},
	{
		img: thomas,
		text: "Sunnyside's enthusiasm coupled with ther keen interest in our brand's success made it a satisfying and enjoyable experience.",
		name: "Thomas S.",
		position: "Chief Operating Officer",
	},
	{
		img: jennie,
		text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
		name: "Jennie F.",
		position: "Business Owner",
	},
];

function Testimonials() {
	return (
		<Box mt={["40px", "100px", "120px"]} mb="50px">
			<Text
				color="#A9AAAB"
				fontSize={["18px", "20px", "30px"]}
				letterSpacing={"widest"}
				fontFamily={"'Fraunces', serif"}
				fontWeight={"extrabold"}
			>
				CLIENT TESTIMONIALS
			</Text>
			<Flex
				direction={["column", "column", "row"]}
				justify={"space-around"}
				align="center"
				w={["100%", "100%", "100%", "80%"]}
				m={"auto"}
				my="100px"
			>
				{testimonials.map((elem, i) => {
					return (
						<Box key={i} textAlign="center" w={["80%", "80%", "80%", "30%"]}>
							<Flex className="flex-testimonials" justify={"center"}>
								<Image
									src={elem.img}
									alt="Perfil"
									borderRadius={"50%"}
									// borderRadius={"full"}
									w="100px"
									justifySelf={"center"}
									mt={[i !== 0 && "80px", "80px", "0"]}
								/>
							</Flex>
							<Text mt="30px" color={"#606068"}>
								{elem.text}
							</Text>
							<Text
								fontFamily={"'Fraunces', serif"}
								fontWeight={"extrabold"}
								mt="30px"
							>
								{elem.name}
							</Text>
							<Text color={"#606068"}>{elem.position}</Text>
						</Box>
					);
				})}
			</Flex>
		</Box>
	);
}

export default Testimonials;
