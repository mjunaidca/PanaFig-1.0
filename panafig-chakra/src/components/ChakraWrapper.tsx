'use client'

import { ChakraProvider } from '@chakra-ui/react'

type Props = {
    children: React.ReactNode;
}

function ChakraWrapper({ children }: Props) {
  return (
    <ChakraProvider>
         { children }
    </ChakraProvider>
  )
}

export default ChakraWrapper;