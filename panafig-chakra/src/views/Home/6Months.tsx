'use client'

import { Box, Flex, Text } from "@chakra-ui/react"
import Desktop2Arrow from '../../../public/media/Desktop2Arrow.png'
import MobileArrow from '../../../public/media/DesktopDownArrow.png'
import Image from "next/image"
import ALIGNMENT from "@/components/HomeAlignment"

const Months6 = () => {
    return (

        <ALIGNMENT>
            <Flex pt={{ base: "20", sm: "24" }} direction={{base:'column', sm:'row'}}>
                <Box minW='72' justifyContent={'flex-start'} >
                    <Text fontSize={'2xl'} fontWeight={'normal'}>Launch Your Career In As </Text>
                    <Text fontSize={'2xl'} fontWeight={'hairline'}>Little As 6 Months. </Text>
                </Box>
                <Flex display={{ base: 'none', sm: 'flex' }}>
                    <Image src={Desktop2Arrow} width={72} height={72} alt='arrow' />
                </Flex>
                <Flex display={{ base: 'flex', sm: 'none' }} mx='45%' pt='4'>
                    <Image src={MobileArrow} alt='arrow' width={32} height={36} />
                </Flex>
                <Text fontSize={{ base: 'md', sm: 'lg' }} textAlign={{ base: 'center', sm: 'left' }} pt='4' >Every participant will start by completing following 3 core courses:
                </Text>
            </Flex>
        </ALIGNMENT>


    )
}

export default Months6;