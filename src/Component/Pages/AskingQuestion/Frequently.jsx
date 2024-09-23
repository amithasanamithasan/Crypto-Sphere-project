const Frequently = () => {
  return (
    <div className=" bg-[#251c69e7]">
    <div className=" lg:px-[200px]   md:px[196px] py-10 w-full lg:w-[1047px] ">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-300 font-semibold mt-4">Your Questions Answered</p>
      </div>
{/* FREQUENTLY QUESTION  */}
      <div className="space-y-4">
   
        <div className="collapse collapse-arrow border border-white hover:border-cyan-400 rounded-lg">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title text-lg font-semibold text-white">
            How secure is my data on Crypto Sphere?
          </div>
          <div className="collapse-content text-gray-300">
            <p className="text-sky-600 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fugiat qui consequuntur molestias tenetur magni est voluptatum natus laudantium nesciunt harum, pariatur iste sequi ratione nisi, voluptatibus distinctio iure saepe.</p>
          </div>
        </div>

      
        <div className="collapse collapse-arrow border border-white hover:border-cyan-400 rounded-lg">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold text-white">
            What types of cryptocurrencies can I trade on Crypto Sphere?
          </div>
          <div className="collapse-content text-gray-300">
            <p className="text-sky-600 font-semibold">
              Crypto Sphere supports a wide range of cryptocurrencies, including popular options like Bitcoin, Ethereum, and Litecoin, as well as many altcoins. Check our platform for the full list of supported currencies.
            </p>
          </div>
        </div>


        <div className="collapse collapse-arrow border border-white hover:border-cyan-400 rounded-lg">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold text-white">
            How do I create an account with Crypto Sphere?
          </div>
          <div className="collapse-content text-gray-300">
            <p className="text-sky-600 font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto dicta vero mollitia numquam saepe. Est qui aut perspiciatis amet quas rem obcaecati dicta, vero alias corporis ullam similique numquam et.</p>
          </div>
        </div>

        <div className="collapse collapse-arrow border border-white hover:border-cyan-400 rounded-lg">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold text-white">
            Can I use Crypto Sphere on my mobile device?
          </div>
          <div className="collapse-content text-gray-300">
            <p className="text-sky-600 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eum doloribus tempore consectetur voluptas dolores mollitia deserunt! Ut, quod quo officia quae tempore eos quam, dolor maxime facere aliquam ad!</p>
          </div>
        </div>

     
        <div className="collapse collapse-arrow border border-white hover:border-cyan-400 rounded-lg">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold text-white">
            What fees are associated with using Crypto Sphere?
          </div>
          <div className="collapse-content text-gray-300">
            <p className="text-sky-600 font-semibold"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus impedit aspernatur unde eveniet quisquam voluptates ducimus? Tempora consectetur, consequatur esse porro a error in at dicta, sapiente, dolorem neque est!</p>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default Frequently;