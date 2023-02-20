'use client'

import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { BsFillCaretRightFill } from "react-icons/bs";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, Flex } from '@chakra-ui/react'

interface Props {
    title: string,
    details: string
}

export default function Special6TrackDetails( {title, details}: Props ) {
    return (
        <Accordion allowMultiple>
            <Flex direction={'column'}>
            <AccordionItem>
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton 
                                    width={{ base: 'xs', sm: 'md', md: 'lg' }} 
                                    _hover={{ bg: '#232222' }}
                                    _expanded={{ bg: "#232222", border:'1px', borderColor:'red.700', borderLeft: "12px solid", borderLeftColor:'red.700'}}
                                    >
                                {isExpanded ? (
                                    <TriangleDownIcon fontSize='12px' />
                                ) : (
                                    <BsFillCaretRightFill fontSize='12px' />
                                )}
                                <Box px='4' as="span" flex='1' textAlign='left'>
                                    {title}
                                </Box>
                            </AccordionButton >
                        </h2>
                        <AccordionPanel pb={4}>
                            {details}
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>
            </Flex>
        </Accordion>
    )
}
