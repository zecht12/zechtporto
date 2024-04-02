'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GiSkills } from 'react-icons/gi';
import {HiHome,HiUser,HiChatBubbleBottomCenterText,HiEnvelope,} from 'react-icons/hi2';
import { MdWorkHistory } from 'react-icons/md';
import { TbUserStar } from 'react-icons/tb';

export const navData = [
    { name: 'home', path: '#home', icon: <HiHome /> },
    { name: 'About', path: '#about', icon: <HiUser /> },
    { name: 'Experince', path: '#experience', icon: <TbUserStar /> },
    { name: 'Tech', path: '#tech', icon: <GiSkills /> },
    { name: 'Work', path: '#work', icon: <MdWorkHistory /> },
    {name: 'Feedbacks',path: '#feedback',icon: <HiChatBubbleBottomCenterText />},
    {name: 'contact',path: '#contact',icon: <HiEnvelope />},
];

const Sidebar = () => {
    const pathname = usePathname();

    return(
        <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 w-screen xl:w-16 top-0 xl:max-w-md xl:h-screen'>
            <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] bg-white/10 xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
                {navData.map((link, index)=> {
                return(
                    <Link className={`${link.path === pathname && 'text-accent'} relative flex items-center hover:text-accent group scroll-smooth transition-all duration-200 delay-100`} href={link.path} key={index} >
                        <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                            <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px] '>
                                <div className='text-[12px] leading-none font-semibold capitalize '>
                                    {link.name}
                                </div>
                                <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2 '></div>
                            </div>
                        </div>
                        <div>
                            {link.icon}
                        </div>
                    </Link>
                )
                })}
            </div>
        </nav>
    )
};

export default Sidebar;