'use client'

import ALIGNMENT from "@/components/HomeAlignment"
import { Flex, Heading, Text, Box } from "@chakra-ui/react"

export default function SpecialTracks() {
    return (
        <ALIGNMENT>
            <Flex width={"full"} pt={{ base: '14', sm: '28' }} justifyContent={"center"} >
                <Flex direction='column'>
                    <Heading fontSize={{ base: "2xl", sm: "3xl" }} textAlign='center'>
                        Enroll In Special Tracks
                    </Heading>
                    <Text
                        py='4'
                        fontSize={{ base: 'sm', sm: 'md' }}
                        textAlign={"center"}
                    >
                        After first 2 quarters participants will choose <br />
                        1 or more special tracks, each of two courses:
                    </Text>
                </Flex>
            </Flex>

        </ALIGNMENT>
    )
}
