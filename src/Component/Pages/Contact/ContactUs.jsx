

const ContactUs = () => {
    return (
        <div >
            <div className="flex items-center justify-center min-h-screen bg-[#251c69e7]">
  <div className="w-full max-w-lg">

    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-5xl font-bold text-white">Get in Touch</h2>
      <p className="text-lg text-gray-200 font-semibold mt-2">We are Here to Help You</p>
    </div>


    <form className="space-y-6 px-5">
 
      <div>
        <label className="block text-white text-lg font-medium mb-1">Name</label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-3 border border-cyan-400 bg-transparent
           text-white rounded-lg focus:outline-none focus:border-cyan-400"
        />
      </div>

    
      <div className="border-white  border-x-2 border-y-2 rounded-lg  ">
        <input
          type="email"
          placeholder="example@mail.com"
          className="w-full px-4 py-3  bg-transparent text-white rounded-lg"
        />
      </div>

      <div className="border-white  border-x-2 border-y-2  rounded-lg ">
        <input
          type="text"
          placeholder="Property Detail"
          className="w-full px-4 py-3 text-white rounded-lg bg-transparent"
        />
      </div>


      <div className="border-white  border-x-2 border-y-2 rounded-lg  ">
        <textarea
          placeholder="Description"
    
          className="w-full px-4 py-3  text-white rounded-lg  bg-transparent "
        ></textarea>
      </div>


      <div className="text-center">
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-600
           text-white rounded-lg font-semibold  hover:bg-blue-700"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</div>

        </div>
    );
};

export default ContactUs;