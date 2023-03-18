import React from 'react'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex px-4 md:px-10 min-h-full xl:px-16 py-4'>
            {children}
        </div>
    )
}

export default Wrapper;