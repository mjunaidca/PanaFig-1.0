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
      
      <Box bg='black' >
        <Flex maxHeight={'28'} justifyContent={'space-between'} alignItems={'center'} px={{ base: '8', md: '16', lg: '20' }} py={{ base: '6', md: '10', lg: '10' }}>

          <Link as={NextLink} href='/'>
            <Image src={PanaverseLogo} alt='panaverse logo' height={160} width={140} />
          </Link>

          <Flex display={{ base: 'none', sm: 'flex' }}>
            <DesktopView />
          </Flex>

          <Flex display={{ base: 'none', sm: 'flex' }}>
            <GrayButton>Apply Now</GrayButton>
          </Flex>

          <Flex
            flex={{ base: 1, sm: "auto" }}
            ml={{ base: -2 }}
            display={{ base: 'flex', sm: 'none' }}
            justify="end"
          >
            <IconButton
              onClick={onToggle}
              bg="transparent"
              icon={
                isOpen ? (<Stack direction={'column'} justifyContent='space-between' mt='48' py={'10'} px={'6'} width='100%' bg='red.700' rounded={'md'}>
                  <Flex direction={'row-reverse'}>
                    <CloseIcon w={3} h={3} mt='-6' mr='-1.5' />
                    <Box>
                      <MobileView />
                    </Box>
                  </Flex>
                </Stack>
                ) : (
                  <HamburgerIcon w={5} h={5} />
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
