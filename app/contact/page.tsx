import React from 'react'

const page = () => {
  return (
    <><div className="text-center bg-[url('/bg.png')] bg-cover bg-fixed px-6 md:px-12 lg:px-44 py-20 lg:py-40">
 <div className="mt-28">
        <h1 className="md:ml-14 text-4xl md:text-5xl lg:text-6xl font-extrabold text-cyan-950 text-left border-l-8 pl-4 border-cyan-800 mb-8 md:mb-12 mt-6 ml-5">
        Contact Me:</h1>
</div>
<div className="bg-cyan-950 pb-7 rounded-xl shadow-xl md:px-47">
  
        
<div className="relative max-w-4xl mx-auto w-full px-4 py-8 bg-cyan-950 rounded-lg z-10 mt-12 ">
  <h2 className="text-3xl font-bold mb-6 text-center text-white">Get in Touch</h2>
 
  <div className="border-t-2 border-cyan-900 pt-4">
    <form>
      <div className="mb-6">
        <label htmlFor="name" className="block text-lg font-semibold text-white text-left">Enter your Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-2 bg-cyan-950 text-white block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 sm:text-lg"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-lg font-semibold text-white text-left">Enter your Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className=" bg-cyan-950 text-white mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2  sm:text-lg"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-lg  text-white text-left font-semibold">Enter your Message:</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="pb-2 pt-23 bg-cyan-950 text-white mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 sm:text-lg"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-cyan-800 text-white py-3 px-6 rounded-md shadow-sm hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
</div>
</div>  
</div>
</div>

</>
  
  )
}

export default page
