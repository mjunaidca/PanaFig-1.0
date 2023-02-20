'use client'

import ConfidenceCard from "@/components/ConfidenceCard";
import ALIGNMENT from "@/components/HomeAlignment";
import { Flex, Heading, Box } from "@chakra-ui/react";

export default function ConfidenceFuture() {
    return (
        <ALIGNMENT>
            <Flex width={"full"} direction={'column'}>
                <Flex justifyContent={'center'}>
                    <Heading fontSize={{ base: '2xl', sm: '3xl' }}>Face The Future With Confidence</Heading>
                </Flex>
                <Flex flexWrap="wrap" pt={{ base: '4', sm: '6' }} px={{ base: '8', sm: '14' }} justifyContent={'space-around'} w='full'>
                    <ConfidenceCard text='3500+ Members' />
                    <ConfidenceCard text='5 Quarters & 15 Months' />
                    <Flex pt={{ base: '3', sm: '0' }}><ConfidenceCard text='6 Special Tracks' /></Flex>
                    <Flex pt={{ base: '3', sm: '0' }}><ConfidenceCard text='Hybird Program' /></Flex>
                </Flex>
            </Flex>
        </ALIGNMENT>
    )
}
