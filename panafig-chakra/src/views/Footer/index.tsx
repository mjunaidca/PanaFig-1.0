"use client";

import Image from "next/image";
import { Box, Link, Flex, Container, Stack, Button, Text, Divider, HStack, VStack, Wrap, Avatar } from "@chakra-ui/react";
import NextLink from "next/link";
import PanaverseLogo from '../../../public/logo.png'
import { NAV_ITEMS } from "@/utils/NAVITEMS";
import { RedButton } from "@/components/Buttons";
import { BsFacebook } from "react-icons/bs";
import SMCICONS from "@/components/SMCICONS";
import { SOCIALMEDIA } from "@/utils/SOCIALMEDIA";



const Footer = () => {
    return (
        <Box bg="black" width={"full"}>
            <Container
                maxW="1440px"
                pt={{ base: '8', md: '22' }}
                px={{ base: '10', sm: '6', md: '20', lg: '24', xl: '52' }}
                color='white'
            >


                <Flex direction={'column'} width={'full'}>

                    <Box>
                        <Stack justifyContent={'space-around'} alignItems='center' direction={{ base: 'column', md: 'row' }}>
                            <Box display={{ base: 'none', md: 'block' }} >
                                <Link as={NextLink} href='/'>
                                    <Image src={PanaverseLogo} alt='panaverse logo' height={250} width={180} />
                                </Link>
                                <Text fontSize={{ md: 'xs', lg: 'sm' }} px={{ md: '6' }}>
                                    A One and Quarter Years Panaverse DAO <br />Earn as you Learn Program
                                    <br /><br />Getting Ready for the Next Generation of <br />the Internet
                                </Text>

                            </Box>
                            
                            <Box bg='gray.800' width='0.5' height={'32'} my='3' display={{ base: 'none', md: 'block' }}/>

                            <Box display={{ base: 'flex', md: 'block' }} justifyContent='center' alignItems={'center'} >
                                {NAV_ITEMS.map((nav) => (
                                    <Flex key={nav.label}>
                                        <Link
                                            as={NextLink}
                                            p={2}
                                            fontSize={{ base: 'xs', sm: 'sm', md: 'sm', lg: 'sm' }}
                                            color={'white'}
                                            href={nav.href ?? '#'}
                                            _hover={{ color: "red" }}
                                            fontWeight={{ base: 'medium', sm: 'medium', md: 'bold' }}
                                        >
                                            {nav.label}
                                        </Link>
                                    </Flex>
                                ))}
                            </Box>
                            <Box bg='gray.800' width='0.5' height={'32'} my='3' display={{ base: 'none', md: 'block' }}/>
                            <Box>
                                <VStack>
                                    <Text fontSize={{ base: 'sm', sm: 'md', md: 'md', lg: 'md' }} fontWeight={{ base: 'medium', sm: 'medium', md: 'bold' }} >Socialize with Panaverse DAO</Text>
                                    <HStack
                                        color="white"
                                        alignItems={"center"}
                                        spacing={"6"}
                                        py='2'
                                    >
                                        {SOCIALMEDIA.map((smc) => (
                                            <Box key={smc.name}>
                                                <SMCICONS href={smc.link}>  {smc.icon} </SMCICONS>
                                            </Box>
                                        ))}

                                    </HStack>
                                    <Box display={{ base: 'none', md: 'block' }}><RedButton>Apply Now</RedButton></Box>
                                </VStack>
                            </Box>
                        </Stack>

                    </Box>

                    <Box bg='gray.800' height={'0.5'} width='full' my='3' />

                    <Box justifyContent={'center'} alignItems='center' display={'flex'}>
                        <Text fontSize={{ base:'xs', md: 'xs', lg: 'sm' }}>
                        2023 © PANAVERSE DAO - BY Muhammad Junaid Shaukat
                        </Text>
                    </Box>

                </Flex>

            </Container>
        </Box>
    );
};

export default Footer;