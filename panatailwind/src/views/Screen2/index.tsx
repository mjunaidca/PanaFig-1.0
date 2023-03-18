import Header2 from '@/Components/Header2'
import Wrapper from '@/Components/Wrapper'
import { CAREER } from '@/utlis/data';
import { OUTCOME } from '@/utlis/data';
import { BsArrowDownCircleFill } from "react-icons/bs";


const Screen2 = () => {
    return (
        <div>
            <Wrapper>
                <div className='flex flex-col justify-around items-center flex-grow py-10'>

                    <div className='flex flex-col justify-center items-center gap-10'>
                        <Header2 text={OUTCOME.label} />
                        <BsArrowDownCircleFill />

                        <div className='bg-[#343434] flex flex-grow max-h-fit py-8'>
                            <div className=' text-2xl lg:text-3xl px-8 md:px-14 lg:px-28 font-sans text-[#FFF6EA]'>
                                {OUTCOME.text}
                            </div>
                        </div>
                    </div>

                    <div className='text-center'>
                        <Header2 text={CAREER} />
                    </div>

                </div>

            </Wrapper>
        </div>
    )
}

export default Screen2