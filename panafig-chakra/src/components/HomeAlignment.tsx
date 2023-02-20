'use client'

import { Box, Flex } from "@chakra-ui/react"

interface Props {
    children: React.ReactNode
}

const ALIGNMENT = ( { children } : Props ) => {
    return (
        <Box bg='black'>
            <Flex
                py={{ base: '8', md: '22' }}
                px={{ base: '10', md: '20' }}
                direction={{base:'column', sm:'row'}}
                justifyContent='space-between'
                alignItems={'center'}
                color='white'
            >
                   { children }
            </Flex>
        </Box>


    )
}

export default ALIGNMENT;