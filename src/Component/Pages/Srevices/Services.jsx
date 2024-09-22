import wallet from"../../../assets/public/image/services/Vector 4.png"
import exchange from"../../../assets/public/image/services/Group 10.png"
import investment from"../../../assets/public/image/services/Group 11.png"

const Services = () => {
    return (
        <div className="bg-[#251c69e7]  text-white">

    <div className="py-16 px-5 md:px-20">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">Our Services</h2>
            <p className="text-lg font-semibold text-gray-300 mt-4 ">Comprehensive Solutions to Meet All Your Cryptocurrency Needs</p>
        </div>

        <div className="grid gap-10 md:gap-6 grid-cols-1 md:grid-cols-3">
         
            <div className=" border-l-4 border-cyan-600 pt-6 px-2">
                <div className="flex  mb-4">
                
                    <div className=" p-3 rounded-lg">
                     
                        <img src={wallet}alt="Wallet" className="h-[50px] w-[60px]" />
                    </div>
                </div>
                <h3 className="text-xl font-semibold">Wallet Management</h3>
                <p className="mt-4 text-gray-300 text-sm font-extralight">
                    Crypto Sphere offers top-notch wallet management services designed to keep your digital assets safe and secure. Our advanced encryption technology ensures that your cryptocurrencies are protected from unauthorized access and cyber threats.
                </p>
            </div>

        
            <div className="border-l-4 border-cyan-600 pt-6 px-2">
                <div className="flex  mb-4">
        
                    <div className=" p-3 rounded-lg">
                      
                        <img src={exchange} alt="Exchange" className="h-[50px] w-[60px]" />
                    </div>
                </div>
                <h3 className="text-xl font-semibold">Exchange Platform</h3>
                <p className="mt-4 text-gray-300 text-sm font-extralight">
                    Experience seamless trading on our state-of-the-art exchange platform. Crypto Sphere offers a robust and reliable platform that supports a wide variety of cryptocurrencies.
                </p>
            </div>

            <div className=" border-l-4 border-cyan-600 pt-6 px-2 ">
                <div className="flex  mb-4">
          
                    <div className="p-3 rounded-lg">
                      
                        <img src={investment} alt="" className="h-[50px] w-[60px]" />
                    </div>
                </div>
                <h3 className="text-xl font-semibold">Investment Consulting</h3>
                <p className="mt-4 text-gray-300 text-sm font-extralight">
                    Navigate the complex world of cryptocurrency investing with the help of our expert consultants. Crypto Sphere offers personalized investment consulting services tailored to your unique financial goals and risk tolerance.
                </p>
            </div>
        </div>
    </div>
</div>
    );
};

export default Services;