import Link from "next/link";
import { RiInstagramLine, RiFacebookLine, RiThreadsLine, RiTwitterLine, RiWhatsappLine } from 'react-icons/ri'

const Socials = () => {
    return(
        <div className="flex items-center gap-x-5 text-lg">
            <Link href="/" className="hover:text-accent transition-all duration-300">
                <RiWhatsappLine />
            </Link>
            <Link href="/" className="hover:text-accent transition-all duration-300">
                <RiFacebookLine />
            </Link>
            <Link href="/" className="hover:text-accent transition-all duration-300">
                <RiTwitterLine />
            </Link>
            <Link href="/" className="hover:text-accent transition-all duration-300">
                <RiThreadsLine />
            </Link>
            <Link href="/" className="hover:text-accent transition-all duration-300">
                <RiInstagramLine />
            </Link>
        </div>
    )
};

export default Socials;