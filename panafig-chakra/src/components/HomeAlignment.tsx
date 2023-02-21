'use client'

import { Box, Flex } from "@chakra-ui/react"

interface Props {
    children: React.ReactNode
}

const ALIGNMENT = ( { children } : Props ) => {
    return (
        <Box bg='black' width={'100%'}>
            <Flex
                py={{ base: '8', md: '22' }}
                px={{ base: '10', sm:'6', md: '20', lg:'24', xl:'52' }}
                direction={{base:'column', sm:'row', md:'row'}}
                color='white'
            >
                   { children }
            </Flex>
        </Box>


    )
}

export default ALIGNMENT;