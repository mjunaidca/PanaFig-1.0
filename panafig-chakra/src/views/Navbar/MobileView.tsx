'use client'

import NextLink from "next/link";
import { NAV_ITEMS } from "@/utils/NAVITEMS";
import { VStack, Box, Link, Divider } from "@chakra-ui/react";

const MobileView=()=> {
  return (
    <VStack direction={'column'} spacing='2'>
        {NAV_ITEMS.map((nav)=>(
            <Box key={nav.label} >
        <Link 
            as={NextLink}
            fontSize={{base:"sm", md:'md'}}
            color={'white'}
            href={nav.href ?? '#'}
            >
            {nav.label}
            <Divider height='10px' />
          </Link>
          </Box>
      ))}
      </VStack>
  )
}

export default MobileView;

