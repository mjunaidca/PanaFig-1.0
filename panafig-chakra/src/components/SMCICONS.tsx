'use client'

import { Link } from "@chakra-ui/react"
import NextLink from "next/link"

interface SmcIcon {
    href: string
    children: React.ReactNode
}  

const SMCICONS = ({ children, href}:SmcIcon) =>{
    return (
        <Link as={NextLink} href={href}>
            {children}
            </Link>
    )
}

export default SMCICONS;