import Image from 'next/image'
import PanaLogo from '../../assets/visuals/Logo.png'
import Link from 'next/link'
const Navbar = () => {
    return (
        <header className='flex justify-between px-4 md:px-10 xl:px-16 py-4 items-center bg-[#FFF7EA]'>
            <div className=' w-32 md:w-40'>
                <Image src={PanaLogo} alt="Panaverse DAO" />
            </div>
            <div className='flex gap-4 md:gap-12 text-lg md:text-xl xl:text-2xl items-center'>
                <div>Syllabus</div>
                <button className='ring-2 ring-red-600 rounded-3xl p-1 px-2 '>
                    <Link href='https://portal.piaic.org/'> Apply Now </Link>
                </button>
            </div>
        </header>
    )
}

export default Navbar


