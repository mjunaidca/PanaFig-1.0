"use client";

import { Box, Flex, Avatar, Text } from "@chakra-ui/react";

interface Props {
  name: string;
  url: string;
}

const InstructorCard = ({ name, url }: Props) => {
  return (
    <Box>
      <Flex
        bgColor="#232222"
        rounded={{ base: "xl", md: "2xl" }}
        borderWidth={{ base: "2px" }}
        borderColor="red.800"
        width={{ base: "24", sm: "36", md: "40", xl: "52" }}
        height={{ base: "20", sm: "36", md: "40"  }}
        m="2"
        mx="-0.5"
        alignItems={{ base: "center" }}
        justifyItems={"space-between"}
        direction='column'
        py={{base:'1', sm:'2', md:'4'}}
      >
          <Avatar size={{ base: "md", sm: "xl" }} name={name} src={url} />{" "}
          <Text
            pt={{ base: "0.5", sm: "2" }}
            fontSize={{ base: "xs", sm: "lg" }}
          >
            {name}
          </Text>
        </Flex>
      </Box>
  );
};

export default InstructorCard;
