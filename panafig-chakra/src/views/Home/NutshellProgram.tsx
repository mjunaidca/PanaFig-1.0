'use client'

import { GrayButton } from "@/components/Buttons"
import ALIGNMENT from "@/components/HomeAlignment"
import { Flex, Box, Image, Text, Heading } from "@chakra-ui/react"


export default function NutshellProgram() {
  return (
    <ALIGNMENT>
    <Box bg='black' width={'100%'}>
      <Flex
        py={{ md: '10', xl: '14' }}
        px={{ sm:'10', md: '10', xl: '14' }}
        direction={{ base: 'column-reverse', md: 'row' }}
        // alignItems={'center'}
        color='white'
        
      >
        <Box width={{ base: '100%', md: '60%' }} >
          <Flex direction='column' textAlign={{ base: 'justify', md: 'left' }} justifyContent={{sm:'center', md:'flex-start'}} alignItems={{sm:'center', md:'flex-start'}} >
            <Heading fontSize={{ base: "2xl", md: "3xl" }} >
              Program in Nutshell <br />Earn While You Learn.
            </Heading>
            <Text
              py='4'
              pr='2'
              fontSize={{ base: 'sm', md: 'md' }}
            >
              This brand-new curriculum will teach students how to make money and boost exports in the classroom and will begin doing so within six months of the programs beginning. It resembles a cross between a corporate venture and an educational project.
            </Text>
            <Flex px='4' justifyContent={{ base: 'center', md: 'flex-start' }} ><GrayButton>Apply Now</GrayButton></Flex>
          </Flex>
        </Box>

        <Box width={{ base: '100%', md: '40%' }}  >
          <Flex  justifyContent={{base:'center', md:'flex-end'}} px='8' py='6' direction={{base:'column', md:'row'}} alignItems={{sm:'center', md:'flex-start'}} >
            <Image src={'/media/rocket.png'} alt='rocket' width={"48"} height='48' borderRadius='full' />
            </Flex>
       
        </Box>

      </Flex>
    </Box>
    </ALIGNMENT>
  )
}
