'use client'

import { SYLLABUSDETAILS, SYLLABUSHEAD } from '@/utlis/data'
import { useState } from 'react'
import classNames from 'classnames'

const StatesScreen = () => {
    const [activetab, setActiveTab] = useState('specialtracks')

    let tabData = SYLLABUSDETAILS.find((item) => (activetab === item.slug))

    console.log(activetab);

    return (
        <div className='flex flex-col md:flex-row sm:flex-row py-10 lg:py-20 px-4 font-sans'>
            {/* <div className='sm:basis-[20%]'>
                {TABHEADS.map((x) => (
                    <div className='pt-7'
                        onClick={
                            () => {
                                setActiveTab(x.slug)
                            }} key={x.slug}>
                        <h1 className={classNames('text-xl lg:text-2xl  font-semibold hover:text-gray-700 duration-700 ', {
                            [`underline underline-offset-8 translate-x-1 decoration-4 decoration-red-600 duration-500`]: x.slug === activetab,
                        })}>
                            {x.heading}
                        </h1>
                    </div>))}
            </div> */}

            <div className='md:basis-[20%] py-4' >

                <select
                    value={activetab}
                    onChange={e => setActiveTab(e.target.value)}
                    className='block md:hidden rounded-md border-b-4 border-red-700 text-lg font-semibold  '>
                    {SYLLABUSDETAILS.map(x => (
                        <option key={x.slug} value={x.slug}>{x.heading}</option>
                    ))}
                </select>

                <div className='hidden md:block'>
                    {SYLLABUSDETAILS.map((x) => (
                        <div className='pt-7'
                            onClick={
                                () => {
                                    setActiveTab(x.slug)
                                }} key={x.slug}>
                            <h1 className={classNames('text-xl lg:text-2xl  font-semibold hover:text-gray-700 duration-700 ', {
                                [`underline underline-offset-8 translate-x-1 decoration-4 decoration-red-600 duration-500`]: x.slug === activetab,
                            })}>
                                {x.heading}
                            </h1>
                        </div>))}
                </div>
            </div>

            <div className='sm:basis-[80%] w-full flex flex-wrap gap-5'>
                {tabData?.Data.map((item) => (
                    <div key={item.title} className={` border-red-600 border-l-4 py-3 px-2 h-auto max-h-[80%] bg-white hover:shadow-lg rounded-r-2xl md:basis-1/3 lg:basis-1/4 w-full flex flex-col justify-around`}>

                        <div className='text-xl font-semibold flex object-fill items-center justify-around '>

                            {item.title}
                        </div>
                        <div>
                            {item.details}
                        </div>
                        {/* <div className='flex justify-end font-bold'>
                            Learn More
                        </div> */}
                    </div>
                ))}
            </div>
        </div >
    )
}

export default StatesScreen;