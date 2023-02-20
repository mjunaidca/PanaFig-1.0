'use client'

import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import Image from "next/image"
import laptopguy from '../../../public/media/laptopguy.png'

export default function Home() {
  return (
    <Box bg='black'>
      <Flex direction={{base:'column-reverse', sm: 'row'}} py={{base:'8', md: '22'}} px={{base:'10',md: '28'}}>
        <Box width={{base: '100%' , sm: '60%'}}>
          <Flex direction={{base:'column', sm: 'column'}} py={{base:'8', md: '22'}}>
          <Heading>
            Become Certified 
            <br />
            <Text color='red.500'> Web 3.0 & Metaverse </Text> 
            <br />
            Developer
          </Heading>
          <Text>
            A One and Quarter Years Earn as you Learn Program
          </Text>

          </Flex>
          </Box>
        <Box width={{base: '100%' , sm: '40%'}}>
          <Image src={laptopguy} alt='Laptop Guy'></Image>
          </Box>

      </Flex>

    </Box>
  )
}
