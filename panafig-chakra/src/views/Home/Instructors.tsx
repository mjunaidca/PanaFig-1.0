'use client'

import ALIGNMENT from "@/components/HomeAlignment";
import InstructorCard from "@/components/InstructorCard";
import { Flex, Heading, Box } from "@chakra-ui/react";

const Instructors = () => {
    return (
        <ALIGNMENT>

            <Flex width={"full"} direction={'column'} py={{ base: '14', sm: '16' }}>
                <Flex justifyContent={'center'}>
                    <Heading> Learn From The Best</Heading>
                </Flex>
                <Flex flexWrap="wrap" pt={{base:'4' , sm:'6' }} px={{base:'8' , sm:'14' }} justifyContent={'space-around'} w='full'>
                    <InstructorCard url='https://pbs.twimg.com/profile_images/1478630664190795778/xuBHOC65_400x400.jpg' text='Zia Khan' />
                    <InstructorCard url='https://pbs.twimg.com/profile_images/1478630664190795778/xuBHOC65_400x400.jpg' text='Zia Khan' />
                    <Flex pt={{base:'3' , sm:'0' }}><InstructorCard url='https://pbs.twimg.com/profile_images/1478630664190795778/xuBHOC65_400x400.jpg' text='Zia Khan' /></Flex>
                    <Flex pt={{base:'3' , sm:'0' }}><InstructorCard url='https://pbs.twimg.com/profile_images/1478630664190795778/xuBHOC65_400x400.jpg' text='Zia Khan' /></Flex>
                </Flex>
            </Flex>
        </ALIGNMENT>

    )
}

export default Instructors;