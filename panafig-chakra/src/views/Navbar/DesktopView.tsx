'use client'

import NextLink from "next/link";
import { NAV_ITEMS } from "@/utils/NAVITEMS";
import { Stack, Box, Link } from "@chakra-ui/react";

const DesktopView=()=> {
  return (
    <Stack direction={'row'} spacing={{sm:'3', md:'6', lg:'10', xl:'14' }}>
        {NAV_ITEMS.map((nav)=>(
            <Box key={nav.label} >
        <Link 
            as={NextLink}
            p={2}
            fontSize={{ sm:'md', md:'md', lg:'lg', xl:'xl'}}
            color={'white'}
            href={nav.href ?? '#'}
            _hover={{ color:"red" }}
            >
            {nav.label}
          </Link>
          </Box>
      ))}
      </Stack>
  )
}

export default DesktopView;