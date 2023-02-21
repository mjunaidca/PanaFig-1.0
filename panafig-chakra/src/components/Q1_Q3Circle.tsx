"use client";

import { Box, Heading, Flex, Text, Stack, Circle } from "@chakra-ui/react";
import QArrow from "../../public/media/QArrow.png";
import Image from "next/image";

interface Props {
  quarter: string;
  details: string
}

export default function Q1Q3Circle({ quarter, details }: Props) {
  return (

      <Stack>

      <Flex justifyContent={{base:'center', md: 'space-between' }} my="6">
        <Circle
          size={{base:'120px'  ,md:"170px"}}
          bg="#232222"
        >
          <Circle
          size={{base:'90px' ,md:"140px"}}
            bg="red.700"
          >
            <Flex justifyContent={"center"} alignItems="center" py="30%">
              <Heading fontWeight={"bold"} fontSize={{base:"3xl", md:"5xl"}}>
                {" "}
                {quarter}{" "}
              </Heading>
            </Flex>
          </Circle>
        </Circle>
      </Flex>


        <Flex direction={"row"}>
          <Flex width='10' display={{base:'flex', sm:'none', md:'flex'}} >
          <Image src={QArrow} alt="arrow" />
          </Flex>
          <Text fontSize={{base: 'md' ,md:'md'}} px='4'>{details}</Text>
        </Flex>

        </Stack>
  );
}
