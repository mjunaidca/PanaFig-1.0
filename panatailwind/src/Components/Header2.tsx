import React from 'react'

const Header2 = ({ text }: { text: string }) => {
    return (
        <div className='text-5xl lg:text-5xl xl:text-7xl font-sans '>{text}</div>
    )
}

export default Header2