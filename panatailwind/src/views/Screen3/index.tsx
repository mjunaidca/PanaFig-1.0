import Wrapper from '@/Components/Wrapper'
import React from 'react'
import StatesScreen from './state'
import { SYLLABUSHEAD } from '@/utlis/data'
import Header2 from '@/Components/Header2'

const Screen3 = () => {
    return (
        <div>
            <Wrapper>
                <div className='flex flex-col justify-between items-center md:py-16 w-full'>
                    <div>
                        <Header2 text={SYLLABUSHEAD} />
                    </div>
                    <div >
                        <StatesScreen />
                    </div>
                </div>

            </Wrapper>
        </div>
    )
}

export default Screen3