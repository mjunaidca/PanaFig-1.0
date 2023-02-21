'use client'

import { Stack, Box, Link, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import PanaverseLogo from '../../../public/logo.png'
import Image from "next/image";
import NextLink from "next/link";
import DesktopView from "./DesktopView";
import {GrayButton} from "@/components/Buttons";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import MobileView from "./MobileView";

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div>
      
      <Box bg='black' width={"full"}>
        <Flex maxHeight={'32'} justifyContent={'space-between'} alignItems={'center'} px={{ base: '8', sm:'2' , md: '16', lg: '20', xl:'48' }} py={{ base: '6', md: '10', lg: '10' }}>

    
          <Link as={NextLink} href='/'>
            <Image src={PanaverseLogo} alt='panaverse logo' height={250} width={180}/>
          </Link>

          <Flex display={{ base: 'none', md: 'flex' }}>
            <DesktopView />
          </Flex>

          <Flex display={{ base: 'none', md: 'flex' }}>
            <GrayButton>Apply Now</GrayButton>
          </Flex>

          <Flex
            flex={{ base: 1, sm: "auto" }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
            justify="end"
            mx={{base:'0', sm:'6'}}
          >
            <IconButton
              onClick={onToggle}
              bg="transparent"
              
              icon={
                isOpen ? (
                <Stack  py={{base:'10'}} mt='48'  px={{base:'6', sm:'10'}}width='100%' bg='red.700' rounded={'md'}>
                  <Flex direction={'row-reverse'}>
                    <CloseIcon w={4} h={4} mt='-6' mr={{base:'-1.5', sm:'-5'}} color='white' />
                    <Box>
                      <MobileView />
                    </Box>
                  </Flex>
                </Stack>
                ) : (
                  <HamburgerIcon w={6} h={6} color='white' />
                )
              }
              variant={'ghost'}
              aria-label={"Toggle Navigation"}
            />
          </Flex>

        </Flex>
      </Box>

    </div>
  )
}
