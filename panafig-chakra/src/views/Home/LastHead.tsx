"use client";

import { GrayButton, RedButton } from "@/components/Buttons";
import { Box, Flex, VStack, Text, Heading, Stack, Image } from "@chakra-ui/react";


export default function LastHead( ) {
  return (
    <Flex direction={"column"} px={{ sm: "36" }} py="10">
      <Box
        bgColor="#232222"
        rounded={"2xl"}
        borderWidth={{ base: "4px", md: "7px" }}
        borderColor="red.700"
        width={{ base: "262px", md: "700px" }}
        height={{ base: "250px", md: "348px" }}
        m="1"
        textColor={'white'}
      >
        <Stack pt='6' alignItems={{ base: "center" }} justifyItems={"space-between"} direction={{base:'column', sm:'row'}}>
          <Box width={{base:'100%', sm:'60%' }}>
            <VStack>
              <Heading fontSize={{base:'2xl', sm:'4xl'}}>Certified Web 3.0 & <br/>Metaverse Developer</Heading>
              <Text
                px={{ base: "2", sm: "8" }}
                pt={{ base: "1", sm: "1" }}
                fontSize={{ base: "xs", sm: "lg" }}
              >
                {textdetails}
              </Text>
            </VStack>
          </Box>
          <Box width={{base:'100%', sm:'40%' }} display={{base:'none', sm:'flex'}}>
          <Image src='/media/Join.png' alt='Join Us' width='52' height='52'/>
          </Box>
        </Stack>

        <Flex
          direction={"row"}
          ml="10"
          px="10"
          display={{ base: "none", md: "flex" }}
          pt='4'
        >
          <GrayButton>Get Ready For The Future! ! </GrayButton>
          <Flex direction={"row"} ml="-8">
            <GrayButton> Start Learning Today</GrayButton>
          </Flex>
        </Flex>
        <Flex
          direction={"row"}
          justifyContent="center"
          display={{ base: "flex", md: "none" }}
        >
          <RedButton>Apply Now!</RedButton>
        </Flex>
      </Box>
    </Flex>
  );
}

let textdetails: string='Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies '