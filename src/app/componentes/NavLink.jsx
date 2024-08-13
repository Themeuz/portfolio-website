import Link from "next/link";

const NavLink = ({ href, title }) => {
    return (
        <Link 
            href={href}
            className='block text-[#536d66] sm:text-xl rounded md:p-0 hover:text-[#95b6ad]'
        >
            {title}
        </Link>
    );
};

export default NavLink;