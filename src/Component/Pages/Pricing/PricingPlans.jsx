
import tikmark from"../../../assets/public/image/tik mark/rightmark.png"
const PricingPlans = () => {
    return (
        <div>
            <div className="bg-[#251c69e7] text-white">

    <div className="py-16 px-5 md:px-20">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Pricing Plans</h2>
 <p className="text-lg text-gray-200 mt-4 font-semibold">Affordable and Flexible Plans to Suit Your Needs</p>
        </div>

   
        <div className="grid gap-10 md:gap-6 grid-cols-1 md:grid-cols-3">
         
            <div className="bg-[rgb(16,34,101)] text-center rounded-lg shadow-lg p-6 
           border-t-4 border-r-[1px] border-y-[1px] border-cyan-600">
                <h3 className="text-2xl  md:text-3xl font-bold mb-6 text-cyan-300">Basic</h3>
                <ul className="space-y-4 text-left text-gray-200 ">
                    <li className="flex items-center gap-3">
                      
                        <img src={tikmark} alt="rightmark" className="h-5 w-5 " />
                        Access to Basic Wallet Management
                    </li>
                    <li className="flex items-center gap-3">
                    <img src={tikmark} alt="rightmark" className="h-5 w-5" />
                        Limited Exchange Transactions
                    </li>
                    <li className="flex items-center gap-3">
                    
                          <img src={tikmark} alt="rightmark" className="h-5 w-5" />
                        Basic Real-Time Analytics
                    </li>
                    <li className="flex items-center gap-3">
                      
                          <img src={tikmark} alt="rightmark" className="h-5 w-5" />
                        Email Support
                    </li>
                </ul>
                <div className="my-8  text-3xl md:text-6xl border-x-[1px] border-y-[1px] rounded-lg  font-bold text-cyan-300 ">
                 $19
                <span className="text-lg font-medium">/month</span></div>
                <button className="w-full py-3 rounded-lg  bg-gradient-to-r from-cyan-500 to-blue-500 text-white  font-semibold">
                    Get Now
                </button>
            </div>


            <div className="bg-[#102265] text-center rounded-lg 
            shadow-lg p-6   border-t-4 border-r-[1px] border-y-[1px] border-cyan-600">
                <h3 className="text-2xl  md:text-3xl font-bold mb-6 text-cyan-300">Pro</h3>
                <ul className="space-y-4 text-left text-gray-200">
                    <li className="flex items-center  gap-3">
                      
                          <img src={tikmark} alt="rightmark" className="h-5 w-5" />
                        Advanced Wallet Management
                    </li>
                    <li className="flex items-center  gap-3">
                    
                          <img src={tikmark} alt="rightmark" className="h-5 w-5" />
                        Unlimited Exchange Transactions
                    </li>
                    <li className="flex items-center gap-3">
                     
                          <img src={tikmark} alt="rightmark" className="h-5 w-5" />
                        Enhanced Real-Time Analytics
                    </li>
                    <li className="flex items-center gap-3">
                      
                          <img src={tikmark} alt="rightmark" className="h-5 w-5" />
                        Priority Support
                    </li>
                    <li className="flex items-center gap-3">
                       
                          <img src={tikmark} alt="rightmark" className="h-5 w-5" />
                        Investment Consulting Sessions
                    </li>
                </ul>
                <div className="my-8 text-3xl md:text-6xl  border-x-[1px] border-y-[1px]  rounded-lg  font-bold text-cyan-300">
                    $49
                 <span className="text-lg font-medium">/month</span></div>
                <button className="w-full py-3 rounded-lg 
                 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold">
                    Get Now
                </button>
            </div>


            <div className="bg-[#102265] text-center rounded-lg 
            shadow-lg p-6   border-t-4 border-r-[1px] border-y-[1px] border-cyan-600">
                <h3 className=" text-2xl  md:text-3xl font-bold mb-6 text-cyan-300">Premium</h3>
                <ul className="space-y-4 text-left text-gray-200">
                    <li className="flex items-center gap-3">
                      
                          <img src={tikmark} alt="rightmark" className="h-5 w-5" />
                        Premium Wallet Management with Additional Security Features
                    </li>
                    <li className="flex items-center gap-3">
                    
                          <img src={tikmark} alt="rightmark" className="h-5 w-5" />
                        All-Inclusive Exchange Transactions
                    </li>
                    <li className="flex items-center gap-3">
                       
                          <img src={tikmark} alt="rightmark" className="h-5 w-5" />
                        Comprehensive Real-Time Analytics
                    </li>
                    <li className="flex items-center gap-3">
                    
                          <img src={tikmark} alt="rightmark" className="h-5 w-5" />
                        24/7 Dedicated Support
                    </li>
                    <li className="flex items-center gap-3">
                      
                          <img src={tikmark} alt="rightmark" className="h-5 w-5" />
                        Exclusive Investment Strategies and Insights
                    </li>
                    <li className="flex items-center gap-3">
                    
                          <img src={tikmark} alt="rightmark" className="h-5 w-5" />
                        Early Access to New Features
                    </li>
                </ul>
                <div className="my-8 text-3xl md:text-6xl border-x-[1px] border-y-[1px]  rounded-lg  font-bold text-cyan-300">
                    $99
                <span className="text-lg font-medium">/month</span></div>
                <button className="w-full py-3   bg-gradient-to-r
                 from-cyan-500 to-blue-500 text-white rounded-lg font-semibold">
                    Get Now
                </button>
            </div>

        </div>
    </div>

</div>
        </div>
    );
};

export default PricingPlans;