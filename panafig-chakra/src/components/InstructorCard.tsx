'use client'

import { Box, Flex, Avatar, Text } from "@chakra-ui/react";

interface Props {
    name: string
    url: string
}

const InstructorCard = ( { name, url }: Props ) => {
    return (
        <Flex>
            <Box
                bgColor='#232222'
                rounded={'2xl'}
                borderWidth={{ base: '1px', md: '2px' }}
                borderColor='red.700'
                py={{ base: '1', sm: '2' }}
                px={{ base: '1', md: '1' }}
                width={{base:'24', sm:'36'}}
                height={{base:'20', sm:'36'}}
                m='1'
            >
                <Flex direction={'column'} alignItems={{ base: 'center' }} justifyItems={'space-between'}>
                        <Avatar size={{ base: 'md', sm: 'xl' }} name={name} src={url} />{' '}
                    <Text px={{base:'0' ,sm:'1'}} pt={{base:'1' ,sm:'2'}} fontSize={{base:'xs', sm:'lg'}}>{name}</Text>
                </Flex>
            </Box>
        </Flex>
    )
}

export default InstructorCard;