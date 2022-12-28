import React from 'react'

const Header = () => {
  return (

    <ul className='flex mt-auto w-full font-bold'>
        <li className='text-xs text-gray-800 ml-auto mr-3 sm:mr-5 border-b-2 border-green-400 cursor-pointer '>Weather</li>
        <li className='text-xs text-gray-800 ml-auto mr-3 sm:mr-5 alert-notice hover:border-green-400 cursor-pointer '>Alerts</li>
        <li className='text-xs text-gray-800 ml-auto mr-3 sm:mr-5 border-b-2 hover:border-green-400 cursor-pointer '>Map</li>
        <li className='text-xs text-gray-800 ml-auto mr-3 sm:mr-5 border-b-2 hover:border-green-400 cursor-pointer '>Satellite</li>
        <li className='text-xs text-gray-800 ml-auto border-b-2 hover:border-green-400 cursor-pointer '>News</li>


    </ul>
  )
}

export default Header