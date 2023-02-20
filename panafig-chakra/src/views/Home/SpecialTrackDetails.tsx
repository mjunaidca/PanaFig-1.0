'use client'

import { RedButton } from "@/components/Buttons"
import ALIGNMENT from "@/components/HomeAlignment"
import Special6TrackDetails from "@/components/SpecialTrackDetails"
import { SPECIALTRACKDETAILS } from "@/utils/SPECIALTRACKDETAILS"
import { Box, Flex, Stack } from "@chakra-ui/react"
import Image from "next/image"
import Rings7 from '../../../public/media/Rings7.png'

export default function SpecialTrackDetails() {
    return (
        <ALIGNMENT>

            <Stack width={'100%'} direction='column' >
                <Flex direction='row'>

                    <Flex width={{ base: '100%', sm: '50%' }} display={{ base: 'none', sm: "flex" }}>
                        <Image src={Rings7} alt='Metaverse Rings' width={320} />
                    </Flex>

                    <Box width={{ base: '100%', sm: '50%' }}>
                        {SPECIALTRACKDETAILS.map((data) => (
                            <Box key={data.title} flexDirection='column'>
                                <Special6TrackDetails title={data.title} details={data.details} />
                            </Box>
                        ))}
                    </Box>
                </Flex>
                <Flex justifyContent={'center'} mx='70%' py={{base:'16' ,sm:'24'}}>
                <RedButton>Explore Full Curriculum</RedButton></Flex>

            </Stack>

        </ALIGNMENT>
    )
}


