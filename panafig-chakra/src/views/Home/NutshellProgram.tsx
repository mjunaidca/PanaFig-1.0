'use client'

import { GrayButton } from "@/components/Buttons"
import { Flex, Box, Image, Text, Heading } from "@chakra-ui/react"


export default function NutshellProgram() {
  return (
    <Box bg='black' width={'100%'}>
      <Flex
        py={{ base: '10', md: '24' }}
        px={{ base: '10', md: '20' }}
        direction={{ base: 'column-reverse', sm: 'row' }}
        alignItems={'center'}
        color='white'
      >
        <Box width={{ base: '100%', sm: '60%' }} >
          <Flex direction='column' textAlign={{ base: 'justify', sm: 'left' }}>
            <Heading fontSize={{ base: "2xl", sm: "3xl" }} >
              Program in Nutshell <br />Earn While You Learn.
            </Heading>
            <Text
              py='4'
              pr='2'
              fontSize={{ base: 'sm', sm: 'md' }}
            >
              In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the programs beginning. It resembles a cross between a corporate venture and an educational project.
            </Text>
            <Flex px='4' justifyContent={{ base: 'center', sm: 'flex-start' }} ><GrayButton>Apply Now</GrayButton></Flex>
          </Flex>
        </Box>

        <Box width={{ base: '100%', sm: '40%' }}  >
          <Flex  justifyContent={{base:'center', sm:'flex-end'}} px='8' py='6' direction={{base:'column', sm:'row'}}>
            <Image src={'/media/rocket.png'} alt='rocket' width={"48"} height='48' borderRadius='full' />
            </Flex>
       
        </Box>

      </Flex>
    </Box>
  )
}
