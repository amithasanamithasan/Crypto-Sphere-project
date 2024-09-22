import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div >
      <nav className="flex justify-between items-center p-6 bg-[#251c69e7] ">
     
        <div className="flex items-center">
        <div className="md:hidden">

<button onClick={() => setIsOpen(!isOpen) 
 
} 

className="text-white focus:outline-none">
  <svg className="w-6 h-6" fill="none" 
  stroke="currentColor" viewBox="0 0 24 24" 
  xmlns="http://www.w3.org/2000/svg">

    <path strokeLinecap="round" strokeLinejoin="round" 
    strokeWidth="2"
     d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path>
  </svg>
</button>
</div>
          <img src="logo.png" alt="Crypto Sphere" className="h-10 md:text-center" />
          <h1 className="ml-3 text-xl font-semibold text-cyan-400 md:text-center">Crypto</h1>
          <span className="ml-1 text-xl font-semibold text-cyan-200 md:text-center ">Sphere</span>
        </div>

        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="text-white hover:text-cyan-500">Home</a></li>
          <li><a href="#" className="text-white hover:text-cyan-500">Features</a></li>
          <li><a href="#" className="text-white hover:text-cyan-500">About</a></li>
          <li><a href="#" className="text-white hover:text-cyan-500">Services</a></li>
          <li><a href="#" className="text-white hover:text-cyan-500">Testimonials</a></li>
          <li><a href="#" className="text-white hover:text-cyan-500">Pricing</a></li>
          <li><a href="#" className="text-white hover:text-cyan-500">FAQ</a></li>
          <li><a href="#" className="text-white hover:text-cyan-500">Contact</a></li>
        </ul>


        <div className=" md:block">
          <a href="#" className="bg-cyan-500
           text-black md:px-2 md:py-1 px-4 py-2 rounded-lg hover:bg-cyan-600">Sign Up</a>
        </div>

       
      </nav>
{/* todo side show using componet using */}
      <div className={`md:hidden fixed inset-y-0 right-0 w-64
         bg-[#251c69e7] p-6 transform 
         ${isOpen ? 'translate-x-0' : 'translate-x-full'} 
         transition-transform duration-300 ease-in-out`}>
        <ul className="space-y-4">
          <li><a href="#" className="text-white hover:text-cyan-500">Home</a></li>
          <li><a href="#" className="text-white hover:text-cyan-500">Features</a></li>
          <li><a href="#" className="text-white hover:text-cyan-500">About</a></li>
          <li><a href="#" className="text-white hover:text-cyan-500">Services</a></li>
          <li><a href="#" className="text-white hover:text-cyan-500">Testimonials</a></li>
          <li><a href="#" className="text-white hover:text-cyan-500">Pricing</a></li>
          <li><a href="#" className="text-white hover:text-cyan-500">FAQ</a></li>
          <li><a href="#" className="text-white hover:text-cyan-500">Contact</a></li>
        </ul>
        <div className="mt-4">
          <button href="#" className="bg-cyan-500 text-black px-4 py-2 
          rounded-lg hover:bg-cyan-600">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
