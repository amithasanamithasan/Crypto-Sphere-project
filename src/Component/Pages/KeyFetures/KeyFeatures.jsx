import Vector from"../../../assets/public/image/Vector.png"
import Vector1 from"../../../assets/public/image/Vector 1.png"
import Vector2 from"../../../assets/public/image/Vector 2.png"
import Vector3 from"../../../assets/public/image/Group 5.png"
import Vector4 from"../../../assets/public/image/Group 8.png"
import Vector5 from"../../../assets/public/image/Vector 4.png"
const KeyFeatures = () => {
    return (
        <div className="bg-[#251c69e7] py-16 overflow-auto">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">Key Features</h2>
            <p className="text-white  mt-4">Explore the Benefits of Using Crypto Sphere</p>
        </div>
    
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
         gap-12 px-4">
       
            <div className="bg-[#251c69e7] rounded-lg p-8 text-center 
           border-l-4 border-cyan-400">
                
                <img src={Vector} alt=""  className="mx-auto mb-4 w-12 h-12"/>
                <h3 className="text-xl font-bold text-white mb-4">Secure Transactions</h3>
                <p className="text-white">Experience the highest level of security with 
                    our encrypted transactions, ensuring your assets are always protected.</p>
              <div className="py-4  ">   
               <img src={Vector3} alt="" className="mx-auto mb-4 w-12  h-12"/>
               <h3 className="text-xl font-bold text-white mb-4">Secure Transactions</h3>
              <p className="text-white">Experience the highest level of security with our 
                encrypted transactions, ensuring your assets are always protected.</p>F
         </div>
           
            </div>
    
      
         <div className="bg-[#251c69e7]  rounded-lg p-8 text-center
        border-l-4 border-cyan-400">
             
                <img src={Vector1} alt="" className="mx-auto mb-4 w-12 h-12" />
                <h3 className="text-xl font-bold text-white mb-4">Real-Time Analytics</h3>
                <p className="text-white">Make informed decisions with real-time 
                analytics and insights into the latest market trends and movements.</p>
            <div className="py-4">
              <img src={Vector4} alt="" className="mx-auto mb-4 w-12 h-12"/>
                <h3 className="text-xl font-bold text-white mb-4">User-Friendly Interface</h3>
            <p className="text-white">Navigate the world of crypto with ease using our 
            intuitive and user-friendly platform designed for all experience levels.</p>
                </div>
            </div> 
    
     
            <div className="bg-[#251c69e7] rounded-lg p-8 text-center  border-l-4 border-cyan-400">
            
                <img src={Vector2} alt="" className="mx-auto mb-4 w-12 h-12" />
                <h3 className="text-xl font-bold text-white mb-4">Multi-Currency Support</h3>
                <p className="text-white">Trade and manage a wide range of cryptocurrencies 
                    with our extensive multi-currency support.</p>
                       
               <div className="py-4">
               <img src={Vector5} alt="" className="mx-auto mb-4 w-12 h-12" />
                <h3 className="text-xl font-bold text-white mb-4">User-Friendly Interface</h3>
                <p className="text-white">Navigate the world of crypto with 
                ease using our intuitive and user-friendly platform designed for all experience levels.</p>
               </div>
            </div>
    

        </div>
    </div>
    );
};

export default KeyFeatures;