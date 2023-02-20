'use client'

import { Box, Flex, Text, Stack } from "@chakra-ui/react";

interface Props {
    text: string
}

const ConfidenceCard = ( { text }: Props ) => {
    return (
        <Flex>
            <Box
                bgColor='#232222'
                rounded={{base:'xl', sm:'2xl'}}
                borderWidth={{ base: '1px', md: '2px' }}
                borderColor='red.700'
                py={{ base: '1', sm: '1' }}
                px={{ base: '1', md: '4' }}
                width={{ base: '20', md: '36' }}
                height={{ base: '12', md: '16' }}
                
            >
                <Stack width='full' direction={'column'} >
                <Flex justifyContent={'center'}>
                    <Text fontSize={{base:'xs', sm:'lg'}}>{text}</Text>
                </Flex>
                </Stack>
            </Box>
        </Flex>
    )
}

export default ConfidenceCard;