const Banner = () => {
    return (
      <div className="flex flex-col lg:flex-row justify-between 
      items-center overflow-auto bg-[#251c69e7] py-8 px-4">
    
        <div className=" space-y-7 text-white  w-1/2  font-bold  m-10 " >
          <h1 className='lg:text-5xl md:text:3xl  text-white '>
            Revolutionize Your Financial Future with Crypto Sphere
          </h1>
          <p className="text-md  lg:text-2xl md:text:1xl w[500px] h-[50px] mb-6 text-white ">
            Join Crypto Sphere and Experience Secure, User-Friendly, 
            and Advanced Solutions for All Your Cryptocurrency Needs
          </p>
          <div className="py-10">
          <button    className="w-full md:w-[200px] lg:w-[200px] h-[60px] 
          bg-gradient-to-r from-cyan-600 to-blue-400
           text-white px-6 py-3 rounded-full font-semibold text-2xl" > 
           Get Started</button>
          </div>
        </div>

{/* right section */}
        <div className="bg-blue-900 rounded-lg p-8 w-full max-w-md lg:ml-8 text-white">
          <div className="flex justify-center space-x-4 mb-4">
            <button className="w-[190px] h-[50px] bg-gradient-to-r
             from-cyan-500 to-blue-500 px-4 py-2 rounded-full font-semibold">
              Buy
            </button>
            <button className="w-[190px] h-[50px] px-4 py-2 rounded-full 
            font-semibold text-white">
              Sell
            </button>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="spend" className="block text-sm">
                I want to spend
              </label>
              <select
                id="spend"
                className="block w-full mt-1 p-2 rounded bg-blue-800 text-white"
              >
                <option>USD</option>
              </select>
              <p className="text-xs mt-1">Limit: 10 - 10000</p>
            </div>
            <div>
              <label htmlFor="receive" className="block text-sm">
                I will receive
              </label>
              <select
                id="receive"
                className="block w-full mt-1 p-2 rounded bg-blue-800 text-white"
              >
                <option>BTC</option>
              </select>
              <p className="text-xs mt-1">Limit: 5.76 - 5.899</p>
            </div>
            <div>
              <label htmlFor="payment" className="block text-sm">
                Pay With
              </label>
              <select
                id="payment"
                className="block w-full mt-1 p-2 rounded bg-blue-800 text-white"
              >
                <option>Visa/MasterCard</option>
              </select>
            </div>
            <p className="text-xs mt-2 mx-auto">Reference Price: 1 BTC = 20 USD</p>
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 
              w-full h-[60px] py-2 mt-4 rounded-lg text-white font-semibold"
            >
              Buy BTC
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Banner;
  