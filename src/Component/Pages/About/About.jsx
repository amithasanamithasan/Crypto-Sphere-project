const About = () => {
    return (
      <div className="flex flex-col lg:flex-row justify-center lg:justify-end items-center overflow-auto bg-[#251c69e7] py-10 lg:py-20 px-5 md:px-10 lg:px-40">
        <div className="max-w-full lg:max-w-[600px] mb-4 lg:mb-0 lg:mr-10">
          <h1 className="text-3xl font-bold md:text-5xl text-white text-center lg:text-left">
            About Crypto Sphere
          </h1>
          <div className="py-5 md:py-10 text-center lg:text-left">
            <p className="text-white text-sm md:text-base font-semibold">
              Who We Are and Our Mission to Transform the Crypto Landscape
            </p>
          </div>
  
          <div className="py-70 lg:py-4 text-center lg:text-left font-extralight">
            <p className="text-white text-sm md:text-base py-2">
              At Crypto Sphere, we are passionate about revolutionizing the world
              of finance through the power of cryptocurrency and blockchain
              technology. Established with a vision to empower individuals and
              businesses alike, we strive to make the complex world of digital
              currencies accessible to everyone.

            </p>
            <p className="text-white text-sm md:text-base py-2">
              Our team is composed of seasoned professionals with deep expertise
              in the fields of finance, technology, and cybersecurity. We are
              dedicated to providing our users with a secure, user-friendly
              platform that simplifies the process of buying, selling, and
              managing cryptocurrencies.

            </p> 

            <p className="text-white text-sm md:text-base">
              To lead the charge in the global adoption of cryptocurrency by
              providing innovative solutions that are secure, transparent, and
              easy to use.
            </p>
          </div>
  
         
  
          <div className="py-5 flex justify-center lg:justify-start">
            <button
              className="w-full md:w-[200px] lg:w-[200px] h-[50px] md:h-[60px] bg-gradient-to-r from-cyan-600 to-blue-400 text-white px-6 py-3 rounded-full font-semibold text-lg md:text-2xl"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;