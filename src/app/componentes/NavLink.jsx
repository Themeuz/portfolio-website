import Link from "next/link";

const NavLink = ({ href, title }) => {
    return (
        <Link 
            href={href}
            className='block text-[#c1c4ce] sm:text-xl rounded md:p-0 hover:text-[#525457]'
        >
            {title}
        </Link>
    );
};

export default NavLink;