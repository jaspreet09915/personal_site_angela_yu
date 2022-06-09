import React from 'react'
import { useState } from 'react'
const contactUs = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleChange = (e)=>{
    if(e.target.name =="name"){
      setName(e.target.value)
  }
  else if(e.target.name == "email"){
      setEmail(e.target.value)
  }
  else if(e.target.name=="message"){
      setMessage(e.target.value)
  }
    console.log(e.target.value)
  }
  const handleSubmit = async(e)=>{
    console.log(e);
    e.preventDefault();
    const data = {name ,email,message};
    const res = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json'
      },
  });
  let response = await res.json()
  console.log(response)
  setName('')
  setEmail('')
  setMessage('')
  }
  return (
    <div>
      <h1 className='text-center text-3xl text-gray-600 hover:text-gray-300 font-serif font-bold cursor-pointer my-8'>Enter Your Contact Details</h1>
      <form action="" onSubmit={handleSubmit} method='POST'  className='flex flex-col w-1/3 mx-auto'>
          <label  className='my-2'  htmlFor="Name">Name:</label>        
          <input name='name' value={name} onChange={handleChange} placeholder='Enter Your Name' className='border-2 rounded-md border-gray-300 hover:border-gray-400 my-1' type="text" />

          <label  className='my-2' htmlFor="Your Email Id">Email Id:</label>
          <input name='email' value={email} onChange={handleChange} placeholder='Enter Your Email Id' className='border-2 rounded-md border-gray-300 hover:border-gray-400 my-1'  type="text" />

          <label  className='my-2' htmlFor="Your Message">Your Message:</label>
          <textarea name='message' value={message} onChange={handleChange} placeholder='Enter Your Message' className='border-2 rounded-md border-gray-300 hover:border-gray-400 my-1'   id="message" cols="30" rows={10}></textarea>
          <button type="submit" className='bg-gray-400 py-1 rounded-lg text-base font-serif text-blue-100 hover:text-black hover:bg-gray-500 w-52 mx-auto my-3  '>Submit</button>
      </form>
    </div>
  )
}

export default contactUs