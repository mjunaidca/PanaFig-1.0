'use client'

import { GrayButton, RedButton } from "@/components/Buttons"
import ALIGNMENT from "@/components/HomeAlignment"
import { Box, Flex, Heading, Text, Stack, HStack } from "@chakra-ui/react"
import Image from "next/image"
import laptopguy from '../../../public/media/laptopguy.png'

export default function Head1() {
  return (
    <ALIGNMENT>
       
        <Box width={{ base: '100%', sm: '70%' }} textColor='white'>
          <Header1 />
          <Flex justifyContent={{ base:'center', sm:'flex-start'}}>
          <Text fontSize={{ base: 'sm', sm: 'lg' }} textAlign='center'>
            A One and Quarter Years Earn as you Learn Program
          </Text>
          </Flex>

          <Stack py={{base:'8', sm:'10'}} direction={{base:'column', sm:'row'}} justifyContent={{base:'center', sm:'flex-start'}} mx={{base:'16', md:'0'}} spacing='4'>
            <RedButton>Start Learning Now</RedButton>
            <GrayButton>Explore Curriculum</GrayButton>
          </Stack>

        </Box>
        <Box width={{ base: '100%', sm: '30%' }}>

          {/* Desktop */}
          <Stack display={{ base: 'none', sm: 'flex' }} pl='5' alignItems={{base:'center', sm:'flex-start'}}>
            <Image src={laptopguy} alt='Laptop Guy' width={480} height={480} />
          </Stack>

          {/* Mobile */}
          <Stack display={{ base: 'flex', sm: 'none' }} pl='5' alignItems={{base:'center', sm:'flex-start'}}>
            <Image src={laptopguy} alt='Laptop Guy' width={200} height={150} />
          </Stack>

        </Box>

      </ALIGNMENT>
  )
}

const Header1 = () => {
  return (
    <Flex direction={{ base: 'column', sm: 'column' }} py={{ base: '8', md: '22' }} display={{ base: 'flex', sm: 'flex' }} alignItems={{base:'center', sm:'flex-start'}}>
      <Heading fontWeight={{ base: '600', sm: 'bold' }} fontSize={{ base: '3xl', sm: '4xl', md: '4xl', lg: '5xl' }} textAlign={{base:'center', sm:'left'}}>
        Become Certified
        <br />
        <Text color='red.500'> Web 3.0 & Metaverse </Text>
        Developer
      </Heading>
    </Flex>
  )
}

