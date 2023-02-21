"use client";

import { GrayButton, RedButton } from "@/components/Buttons";
import ALIGNMENT from "@/components/HomeAlignment";
import { Box, Flex, Heading, Text, Stack, HStack } from "@chakra-ui/react";
import Image from "next/image";
import laptopguy from "../../../public/media/laptopguy.png";

export default function Head1() {
  return (
    <ALIGNMENT>
      <Flex direction={{base:'column-reverse', sm:'row'}}>
      <Box width={{ base: "100%", sm: "70%" }} textColor="white">
        
        <Header1 />
        <Flex justifyContent={{ base: "center", md: "flex-start" }}>
          <Text fontSize={{ base: "sm", sm:'md', md: "lg" }} textAlign="justify">
            A One and Quarter Years Earn as you Learn Program
          </Text>
        </Flex>

        <Stack
          py={{ base: "8", md: "10" }}
          direction={{ base: "column", md: "row" }}
          mx={{ base: "16", sm:'16', md: "0" }}
          spacing={{base:"3", md:'6', xl:'10'}}
        >
          <RedButton>Start Learning Now</RedButton>
          <GrayButton>Explore Curriculum</GrayButton>
        </Stack>
      </Box>

      <Box width={{ base: "100%", sm: "30%" }}>
        <Flex
          display={{ base: "flex", sm: "flex" }}
          alignItems={{ base: "center", sm: "flex-start" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          px={{base:'14', sm:'0'}}
        >
          <Image src={laptopguy} alt="Laptop Guy"  />
        </Flex>
      </Box>
      </Flex>
    </ALIGNMENT>
  );
}

const Header1 = () => {
  return (
    <Flex
      direction={{ base: "column"}}
      display={{ base: "flex", sm: "flex" }}
      alignItems={{ base: "flex-start" }}
      py={{ base: "8", md: "8" }}
    >
      <Heading
        fontWeight={{ base: "bold", md: "bold" }}
        fontSize={{ base: "3xl", sm: "3xl", md: "4xl", lg:'5xl', xl: "6xl" }}
        textAlign={{ base: "left"}}
      >
        Become Certified
        <br />
        <Text color="red.500"> Web 3.0 & Metaverse </Text>
        Developer
      </Heading>
    </Flex>
  );
};
