"use client";

import { Box, Heading, Flex, Text, Stack } from "@chakra-ui/react";
import QArrow from "../../public/media/QArrow.png";
import Image from "next/image";

interface Props {
  quarter: string;
  details: string
}

export default function Q1Q3Circle({ quarter, details }: Props) {
  return (
    <Flex direction={"column"} >

      <Flex justify={{base:'center', sm: 'stretch' }}my="6">
        <Box
          w={{base:'120px' ,sm:"170px"}}
          h={{base:'120px' ,sm:"170px"}}
          bg="#232222"
          borderRadius="50%"
          position="relative"
        >
          <Box
            w={{base:'100px' ,sm:"140px"}}
            h={{base:'100px' ,sm:"140px"}}
            bg="red.700"
            borderRadius="50%"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <Flex justifyContent={"center"} alignItems="center" py="30%">
              <Heading fontWeight={"bold"} fontSize={{base:"3xl", sm:"5xl"}}>
                {" "}
                {quarter}{" "}
              </Heading>
            </Flex>
          </Box>
        </Box>
      </Flex>


        <Stack direction={"row"} px={{base:'0', sm:'0'}}>
          <Flex width='10' >
          <Image src={QArrow} alt="arrow" width="46" height={"36"} />
          </Flex>
          <Text fontSize={{base: 'md' ,md:'md'}} px='4'>{details}</Text>
        </Stack>
    </Flex>
  );
}
