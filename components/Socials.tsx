import Link from "next/link";
import { RiInstagramLine, RiFacebookLine, RiThreadsLine, RiTwitterLine, RiWhatsappLine } from 'react-icons/ri'

const Socials = () => {
    return(
        <div className="flex items-center gap-x-4 text-lg">
            <Link href="https://wa.me/6285865130221" className="hover:text-accent transition-all duration-300">
                <RiWhatsappLine />
            </Link>
            <Link href="https://x.com/ertansyah?t=owfBavdYd1mmUaizqe8D8Q&s=09" className="hover:text-accent transition-all duration-300">
                <RiTwitterLine />
            </Link>
            <Link href="https://www.threads.net/@gilangprimae" className="hover:text-accent transition-all duration-300">
                <RiThreadsLine />
            </Link>
            <Link href="https://www.instagram.com/gilangprimae?igsh=MTBsejU5Z3dwMmsyOQ==" className="hover:text-accent transition-all duration-300">
                <RiInstagramLine />
            </Link>
        </div>
    )
};

export default Socials;