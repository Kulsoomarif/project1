import Link from "next/link";

const Header = () => {
    return (
        <div>
            <ul className="flex flex-col md:flex-row bg-[#010e01] md:gap-5 gap-3 h-[10vh] md:h-[15vh] w-full justify-center items-center">
                <li className="relative group">
                    <Link href="/" className="text-white text-base md:text-lg uppercase">
                        Home
                    </Link>
                    <span className="absolute block w-full md:w-12 h-[1px] bg-white transform scale-x-0 transition-transform duration-500 bottom-[-5px] left-0 group-hover:scale-x-100 group-active:scale-x-100"></span>
                </li>
                <li className="relative group">
                    <Link href="/about" className="text-white text-base md:text-lg uppercase">
                        About
                    </Link>
                    <span className="absolute block w-full md:w-12 h-[1px] bg-white transform scale-x-0 transition-transform duration-500 bottom-[-5px] left-0 group-hover:scale-x-100 group-active:scale-x-100"></span>
                </li>
                <li className="relative group">
                    <Link href="/projects" className="text-white text-base md:text-lg uppercase">
                        Projects
                    </Link>
                    <span className="absolute block w-full md:w-12 h-[1px] bg-white transform scale-x-0 transition-transform duration-500 bottom-[-5px] left-0 group-hover:scale-x-100 group-active:scale-x-100"></span>
                </li>
                <li className="relative group">
                    <Link href="/contact" className="text-white text-base md:text-lg uppercase">
                        Contact
                    </Link>
                    <span className="absolute block w-full md:w-12 h-[1px] bg-white transform scale-x-0 transition-transform duration-500 bottom-[-5px] left-0 group-hover:scale-x-100 group-active:scale-x-100"></span>
                </li>
            </ul>
        </div>
    );
};

export default Header;
