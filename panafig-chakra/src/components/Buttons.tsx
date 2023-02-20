'use client'

import { Button, Text } from '@chakra-ui/react'

interface Props {
    children: string
}

export function GrayButton( {children}:Props ) {
    return (
            <Button bgColor='#232222' rounded={'3xl'} size='xs' px={{base:'3', sm:'6'}} py={{base:'3.5', md:'5'}} borderWidth={{base:'1px', md:'2px'}} borderColor='red.700'>
                <Text fontSize={{base:'sm', md:'md'}} color='white' >{children}</Text>
            </Button>
    )
}

export const RedButton =( {children}:Props )=>{
    return (
            <Button bgColor='red.700' rounded={'3xl'} size='xs' px={{base:'3', sm:'6'}} py={{base:'3.5', md:'5'}} borderWidth={{base:'1px', md:'2px'}} borderColor='red.700' _hover={{ bg: "red.800" }}>
                <Text fontSize={{base:'sm', md:'md'}} color='white' >{children}</Text>
            </Button>
    )
}
