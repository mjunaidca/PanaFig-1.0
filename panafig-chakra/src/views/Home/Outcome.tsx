'use client'

import { Box, Flex, Text } from "@chakra-ui/react"
import DesktopArrow from '../../../public/media/DesktopArrow.png'
import MobileArrow from '../../../public/media/MobileArrow.png'
import Image from "next/image"
import OUTCOMEMESSAGE from "@/utils/OUTCOMEMESSAGE"
import ALIGNMENT from "@/components/HomeAlignment"

const Outcome = () => {
    return (

        <ALIGNMENT>
            <Box minW='44' justifyContent={'flex-start'}>
                <Text fontSize={'2xl'} fontWeight={'normal'}>OUTCOME FOR </Text>
                <Text fontSize={'2xl'} fontWeight={'hairline'}>PARTICIPANTS </Text>
            </Box>

            <Flex display={{ base: 'none', sm: 'flex' }}>
                <Image src={DesktopArrow} alt='arrow' />
            </Flex>

            <Flex display={{ base: 'flex', sm: 'none' }}>
                <Image src={MobileArrow} alt='arrow' width={38} height={37} />
            </Flex>

            <Text fontSize={{ base: 'sm', sm: 'md' }} textAlign={{ base: 'justify', sm: 'left' }}> {OUTCOMEMESSAGE}
            </Text>

        </ALIGNMENT>


    )
}

export default Outcome;