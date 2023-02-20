"use client";

import ALIGNMENT from "@/components/HomeAlignment";
import { CONDIFENCEDATA } from "@/utils/CONFIDENCEDATA";
import { Flex, Heading, Box } from "@chakra-ui/react";
import ConfidenceCard from "@/components/ConfidenceCard";

export default function ConfidenceFuture() {
  return (
    <ALIGNMENT>
      <Flex width={"full"} direction={"column"}>
        <Flex justifyContent={"center"}>
          <Heading fontSize={{ base: "2xl", sm: "3xl" }}>
            Face The Future With Confidence
          </Heading>
        </Flex>
        <Flex
          flexWrap="wrap"
          pt={{ base: "4", sm: "6" }}
          px={{ base: "8", sm: "14" }}
          justifyContent={"space-between"}
          w="full"
        >
          {CONDIFENCEDATA.map((data) => (
            <Box key={data.key}>
              <ConfidenceCard text={data.text} />
            </Box>
          ))}
        </Flex>
      </Flex>
    </ALIGNMENT>
  );
}
