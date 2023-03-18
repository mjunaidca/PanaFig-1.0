import React from 'react'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex px-4 md:px-10 h-screen xl:px-16'>
            {children}
        </div>
    )
}

export default Wrapper;