import Wrapper from '@/Components/Wrapper'
import Image from 'next/image';
import Luffy from '@/assets/visuals/Luffy.png'
import { HEAD } from '@/utlis/data';

const Screen1 = () => {

    return (
        <div>
            <Wrapper>
                <div className='flex flex-grow flex-col sm:flex-row justify-around  md:justify-center md:items-center lg:justify-around text-7xl lg:text-8xl xl:text-9xl w-full  text-[#343434]'>

                    <div className=' py-12 sm:py-0 basis-1/3 sm:basis-2/3 w-full sm:-my-7'>
                        <h1>{HEAD[0]}</h1>
                        <h1 className='xl:px-48 lg:px-28 md:px-24 sm:px-16 px-4 text-[#DA0F2D]'> {HEAD[1]}</h1>
                        <h1 className='xl:px-48 lg:px-28 md:px-24 sm:px-16 px-4 '> {HEAD[2]}</h1>
                    </div>

                    <div className='basis-2/3 sm:basis-1/3 w-full py-8 sm:py-0'>
                        <Image src={Luffy} alt="Luffy" />
                    </div>

                </div>
            </Wrapper>
        </div>
    );
};

export default Screen1