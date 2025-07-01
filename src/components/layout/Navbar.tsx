// const Navbar = () => {
//     return (
//         <nav className="bg-gray-900 h-10">

import { Link } from "react-router";
import { ThemeProvider } from "../../providers/theme-provider";
import { ModeToggle } from "../mode-toggle/mode-toggle";

//         </nav>
//     );
// };

// export default Navbar;

const Navbar = () => {
    return (
        <nav className="bg-orange-600 shadow-md px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold text-white">MyLogo</div>

            {/* Navigation Links */}
            <div className="flex gap-5">
                <Link to="/" className="hover:text-blue-500 cursor-pointer">
                    Task
                </Link>
                <Link to="/user" className="hover:text-blue-500 cursor-pointer">
                    User
                </Link>
                <div>
                    <ModeToggle></ModeToggle>
                </div>
                
            </div>
                    
        </nav>
    );
};

export default Navbar;
