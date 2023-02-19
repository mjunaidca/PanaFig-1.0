'use client'

import { Text, Stack, Box, Link, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import PanaverseLogo from '../../../public/logo.png'
import Image from "next/image";
import NextLink from "next/link";
import DesktopView from "./DesktopView";
import GrayButton from "@/components/GrayButton";
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

          <Flex display={{ base: 'none', md: 'flex' }}>
            <DesktopView />
          </Flex>

          <Flex display={{ base: 'none', md: 'flex' }}>
            <GrayButton>Apply Now</GrayButton>
          </Flex>

          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
            justify="end"
          >
            <IconButton
              onClick={onToggle}
              bg="transparent"
              icon={
                isOpen ? (<Stack direction={'column'} justifyContent='space-between' mt='28' py={'8'} px={'4'} width='100%' bg='red.600'>
                  <Flex direction={'row-reverse'}>
                    <CloseIcon w={3} h={3} mt='-4' />
                    <Box bg='red.600'>
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
