

const Navbar = () => {
    return (
    <div>
            <nav className="flex justify-between items-center p-6 
            bg-[#161042] ;">
    <div className="flex items-center">
        <image src="logo.png" alt="Crypto Sphere" className="h-10"> </image>
   <h1 className="ml-3 text-xl font-semibold text-cyan-400 "> Crypto</h1>   <span className="ml-3 text-xl font-semibold text-cyan-200">  Sphere</span>
      </div>
    <ul className="flex space-x-6">
      <li><a href="#" className="text-white hover:text-cyan-500">Home</a></li>
      <li><a href="#" className="text-white hover:text-cyan-500">Features</a></li>
      <li><a href="#" className="text-white hover:text-cyan-500">About</a></li>
      <li><a href="#" className="text-white hover:text-cyan-500">Services</a></li>
      <li><a href="#" className="text-white hover:text-cyan-500">Testimonials</a></li>
      <li><a href="#" className="text-white hover:text-cyan-500">Pricing</a></li>
      <li><a href="#" className="text-white hover:text-cyan-500">FAQ</a></li>
      <li><a href="#" className="text-white hover:text-cyan-500">Contact</a></li>
    </ul>
    <div>
      <a href="#" className="bg-cyan-500 text-black px-4 py-2 rounded-lg hover:bg-cyan-600">Sign Up</a>
    </div>
  </nav>
  </div>
    );
};

export default Navbar;