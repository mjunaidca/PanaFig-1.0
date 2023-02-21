"use client";

import ALIGNMENT from "@/components/HomeAlignment";
import InstructorCard from "@/components/InstructorCard";
import { INSTRUCTORS } from "@/utils/INSTRUCTORS";
import { Flex, Heading, Box } from "@chakra-ui/react";

const Instructors = () => {
  return (
    <ALIGNMENT>
      <Flex width={"full"} direction={"column"} py={{ base: "14", sm: "16" }}>
        <Flex justifyContent={"center"}>
          <Heading fontSize={{ base: "2xl", sm: "3xl" }}>
            {" "}
            Learn From The Best
          </Heading>
        </Flex>
        <Flex
          flexWrap="wrap"
          pt={{ base: "4", sm: "6" }}
          px={{ base: "8", sm: "0" }}
          justifyContent={"space-around"}
          w="full"
        >
          {INSTRUCTORS.map((instructor) => (
            <Box key={instructor.name}>
              <InstructorCard url={instructor.url} name={instructor.name} />
            </Box>
          ))}
        </Flex>
      </Flex>
    </ALIGNMENT>
  );
};

export default Instructors;
