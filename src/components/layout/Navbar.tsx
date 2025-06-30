

// const Navbar = () => {
//     return (
//         <nav className="bg-gray-900 h-10">

//         </nav>
//     );
// };

// export default Navbar;



const Navbar= () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        MyLogo
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li className="hover:text-blue-500 cursor-pointer">Home</li>
        <li className="hover:text-blue-500 cursor-pointer">About</li>
        <li className="hover:text-blue-500 cursor-pointer">Services</li>
        <li className="hover:text-blue-500 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
