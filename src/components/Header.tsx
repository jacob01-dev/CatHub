import { NavLink } from "react-router-dom";

const Header = () : JSX.Element => {
    return (
        <header className="w-full h-auto p-5 bg-yellow-400 flex items-center font-mono">
            <p className="text-4xl absolute left-[5%]">CatHub</p>
            <nav className="w-full h-full flex items-center justify-end">
                <NavLink to="/">
                    <p className="2xl:text-2xl sm:text-2xl tracking-wide 2xl:m-2 2xl:p-3 sm:m-4 sm:p-4  rounded-xl hover:bg-yellow-500">Home</p>
                </NavLink>
                <NavLink to="/gallery">
                    <p className="2xl:text-2xl sm:text-2xl tracking-wide 2xl:m-2 2xl:p-3 sm:m-4 sm:p-4  rounded-xl hover:bg-yellow-500">Gallery</p>
                </NavLink>
                <NavLink to="/custom">
                    <p className="2xl:text-2xl sm:text-2xl tracking-wide 2xl:m-2 2xl:p-3 sm:m-4 sm:p-4 rounded-xl hover:bg-yellow-500">Custom</p>
                </NavLink>
            </nav>
        </header>
    )
};

export default Header;