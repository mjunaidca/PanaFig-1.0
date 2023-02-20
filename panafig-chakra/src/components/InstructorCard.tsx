'use client'

import { Box, Flex, Avatar, Text } from "@chakra-ui/react";

interface Props {
    text: string
    url: string
}

const InstructorCard = ( { text, url }: Props ) => {
    return (
        <Flex>
            <Box
                bgColor='#232222'
                rounded={'2xl'}
                borderWidth={{ base: '1px', md: '2px' }}
                borderColor='red.700'
                py={{ base: '1', sm: '2' }}
                px={{ base: '2', md: '2' }}
                width={{base:'20', sm:'36'}}
                height={{base:'20', sm:'36'}}
            >
                <Flex direction={'column'} alignItems={{ base: 'center' }} justifyItems={'space-between'}>
                        <Avatar size={{ base: 'md', sm: 'xl' }} name={text} src={url} />{' '}
                    <Text px={{base:'1' ,sm:'5'}} pt={{base:'1' ,sm:'2'}} fontSize={{base:'xs', sm:'lg'}}>{text}</Text>
                </Flex>
            </Box>
        </Flex>
    )
}

export default InstructorCard;