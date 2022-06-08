import React from 'react'

const contactUs = () => {
  return (
    <div>
      <h1 className='text-center text-3xl text-gray-600 hover:text-gray-300 font-serif font-bold cursor-pointer my-8'>Enter Your Contact Details</h1>
      <form action="" className='flex flex-col w-1/3 mx-auto'>
          <label  className='my-2'  htmlFor="Name">Name:</label>        
          <input  placeholder='Enter Your Name' className='border-2 rounded-md border-gray-300 hover:border-gray-400 my-1' type="text" />
          <label  className='my-2' htmlFor="Your Email Id">Email Id:</label>
          <input placeholder='Enter Your Email Id' className='border-2 rounded-md border-gray-300 hover:border-gray-400 my-1'  type="text" />
          <label  className='my-2' htmlFor="Your Message">Your Message:</label>
          <textarea placeholder='Enter Your Message' className='border-2 rounded-md border-gray-300 hover:border-gray-400 my-1'  name="message" id="message" cols="30" rows="10"></textarea>
          <button className='bg-gray-400 py-1 rounded-lg text-base font-serif text-blue-100 hover:text-black hover:bg-gray-500 w-52 mx-auto my-3  '>Submit</button>
      </form>
    </div>
  )
}

export default contactUs