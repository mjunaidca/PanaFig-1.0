"use client";

import { Box, Flex, Text, Stack } from "@chakra-ui/react";

interface Props {
  text: string;
}

const ConfidenceCard = ({ text }: Props) => {
  return (
    <Flex
      bgColor="#232222"
      rounded={{ base: "xl", md: "2xl" }}
      borderWidth={{ base: "2px" }}
      borderColor="red.800"
      justifyContent={"center"}
      width={{ base: "24", sm: "36", md: "40", xl: "52" }}
      height={{ base: "14", sm: "16", md: "20" }}
      m="1"
      mx="-0.5"
      alignItems={"center"}
    >
      <Text fontSize={{ base: "md", sm: "lg", lg: "xl" }} 
            textAlign="center"
            >
        {text}
      </Text>
    </Flex>
  );
};

export default ConfidenceCard;
