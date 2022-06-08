import React from 'react'

const hobies = () => {
  return (
    <div>
        <h1 className='font-bold font-serif text-4xl text-gray-400 hover:text-gray-500 cursor-pointer  text-center my-5'>Some of My Hoobies</h1>
        <ol className='list-decimal ml-9 mt-12 font-serif text-2xl text-emerald-400 cursor-pointer '>
            <li className='my-2 hover:text-emerald-500 ' ><a href="https://en.wikipedia.org/wiki/Brewing" target='_blank' >beer brewing</a></li>
            <li className='my-2 hover:text-emerald-500 ' ><a href="https://en.wikipedia.org/wiki/Martial_arts" target='_blank'>Martial arts</a></li>
            <li className='my-2 hover:text-emerald-500 ' ><a href="https://en.wikipedia.org/wiki/Motorcycle"target='_blank'> Motorcycles</a></li>
        </ol>
    </div>
  )
}

export default hobies