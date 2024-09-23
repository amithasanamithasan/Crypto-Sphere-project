
import logo from"../../../assets/public/image/LOGO/logo.png"
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
const Footer = () => {
    return (
        <div className="bg-[#251c69e7] overflow-auto">
            <div className="mb-6 flex px-16  gap-2">
        <img src={logo} alt="Crypto Sphere" className="mb-4 w-12 h-12"/>
        <h3 className="text-2xl font-bold text-cyan-400">Crypto Sphere</h3>
      </div>
            <div className="py-10">
  <div className="container mx-auto  ">
{/* footer grid section */}
    <div className="grid grid-cols-1 px-8  md:grid-cols-5 gap-10 w-[1300px] h-[700px] text-white">
 
      

      <div>
        <h4 className="text-xl font-semibold mb-4">Quick Link</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-white font-semibold">Home</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white font-semibold">Features</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white font-semibold">About Us</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white font-semibold">Services</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white font-semibold">Testimonials</a></li>
        </ul>
      </div>


      <div>
        <h4 className="text-xl font-semibold mb-4">Legal</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-white font-semibold">Privacy Policy</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white font-semibold">Terms of Service</a></li>
        </ul>
      </div>


      <div>
        <h4 className="text-xl font-semibold mb-4">Contact Detail</h4>
        <ul className="space-y-3">
          <li className="flex items-center">
            <span className="mr-2"><FiPhone className="text-2xl  md:text-3xl"></FiPhone></span>
            <a href="tel:+1234567890" className="text-gray-400 hover:text-white font-semibold">01993790088</a>
          </li>
          <li className="flex items-center">
            <span className="mr-2"><AiOutlineMail className="text-2xl  md:text-3xl"></AiOutlineMail></span>
            <a href="mailto:support@cryptosphere.com" className="text-gray-400 hover:text-white font-semibold">support@cryptosphere.com</a>
          </li>
          <li className="flex items-center">
            <span className="mr-2"><CiLocationOn className="text-2xl  md:text-3xl"></CiLocationOn></span>
            <span className="text-gray-400 font-semibold">123 Finance Avenue, Suite 456, TX 78901, USA</span>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Legal</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-white font-semibold">Twitter</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white font-semibold">Facebook</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white font-semibold">LinkedIn</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white font-semibold">Instagram</a></li>
        </ul>
      </div>
    </div>

    <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 font-semibold">
      <p>© 2024 Crypto Sphere Inc. All Rights Reserved. Created by Amit Hasan Faysal</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Footer;