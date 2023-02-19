'use client'

import { Button, Text } from '@chakra-ui/react'

interface Props {
    children: string
}

export default function GrayButton( {children}:Props ) {
    return (
        <div>
            <Button bgColor='#232222' rounded={'3xl'} size='xs' px={{base:'4', md:'6'}} py={{base:'4', md:'4'}} borderWidth={{base:'1px', md:'2px'}} borderColor='red.700'>
                <Text fontSize={{base:'sm', md:'md'}} color='white' >{children}</Text>
            </Button>
        </div>
    )
}
