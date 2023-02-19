'use client'

import NextLink from "next/link";
import { NAV_ITEMS } from "@/utils/NAVITEMS";
import { VStack, Box, Link } from "@chakra-ui/react";

const MobileView=()=> {
  return (
    <VStack direction={'column'} spacing='4'>
        {NAV_ITEMS.map((nav)=>(
            <Box key={nav.label} >
        <Link 
            as={NextLink}
            fontSize={{base:"sm", md:'md'}}
            color={'white'}
            href={nav.href ?? '#'}
            >
            {nav.label}
          </Link>
          </Box>
      ))}
      </VStack>
  )
}

export default MobileView;