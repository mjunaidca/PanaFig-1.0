'use client'

import { Button, Text } from '@chakra-ui/react'

interface Props {
    children: string
}

export function GrayButton( {children}:Props ) {
    return (
            <Button 
                bgColor='#232222' 
                rounded={{base:'2xl', sm:'2xl', md:'3xl'}} 
                px={{base:'6', sm:'12', md: '6'}} 
                py={{base:'4', md:'5'}} 
                borderWidth={{base:'2px', md:'2px'}} 
                borderColor='red.800'
                size='sm' 
                _hover={{ bg:'#232222' }}
                >
                <Text fontSize={{base:'md', sm:'md', md:'lg'}} color='white' >{children}</Text>
            </Button>
    )
}

export const RedButton =( {children}:Props )=>{
    return (
            <Button 
                bgColor='red.800' 
                rounded={{base:'2xl', sm:'2xl', md:'3xl'}} 
                size='xs' 
                px={{base:'6', sm:'12', md: '6'}} 
                py={{base:'4', md:'5'}} 
                borderWidth={{base:'2px', md:'2px'}} 
                borderColor='red.800' 
                _hover={{ bg: "red.700", borderColor:'red.900' }}>
                <Text fontSize={{base:'md', sm:'md', md:'lg'}} color='white' >{children}</Text>
            </Button>
    )
}
