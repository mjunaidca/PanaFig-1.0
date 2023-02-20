'use client'

import { Box, Flex, Text } from "@chakra-ui/react"
import Desktop2Arrow from '../../../public/media/Desktop2Arrow.png'
import MobileArrow from '../../../public/media/DesktopDownArrow.png'
import Image from "next/image"
import ALIGNMENT from "@/components/HomeAlignment"

const Months6 = () => {
    return (

        <ALIGNMENT>
            <Box minW='80' justifyContent={'flex-start'}>
                <Text fontSize={'2xl'} fontWeight={'normal'}>Launch Your Career In As </Text>
                <Text fontSize={'2xl'} fontWeight={'hairline'}>Little As 6 Months. </Text>
            </Box>

            <Flex display={{ base: 'none', sm: 'flex' }}>
                <Image src={Desktop2Arrow} alt='arrow' />
            </Flex>

            <Flex display={{ base: 'flex', sm: 'none' }} py='4'>
                <Image src={MobileArrow} alt='arrow' width={32} height={36} />
            </Flex>

            <Text fontSize={{ base: 'sm', sm: 'md' }} textAlign={{ base: 'justify', sm: 'left' }}>Every participant will start by completing following 3 core courses:

            </Text>

        </ALIGNMENT>


    )
}

export default Months6;