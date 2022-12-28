import React from 'react'
import moment from 'moment'

const DetailCard = ({ weatherIcon, data }) => {

  const {clouds, main, weather} = data.list[0]

  return (
      <div className='container flex flex-col sm:flex-row p-2  items-center justify-center shadow-lg rounded-lg bg-white
        h-1/3 mb-auto'>

          <div className='my-auto'>
            <p className='font-bold text-3xl text-pink-800 '>
              {Math.round(main.temp)}&deg;C 
            </p>
            <p className='text-2xl font-bold text-gray-800 tracking-widest'>
              {weather[0].main}
              <img src={weatherIcon} className='w-1/4 inline' />
            </p>
            <p className='text-gray-400 text-xs uppercase tracking-widest'>
              {weather[0].description}
            </p>
            <p className='tracking-wider text-gray-400 text-xs'>
              {moment().format("dddd MMM YYYY")}
            </p>
          </div>

          <div className='my-1 border-1-2 border-gray-100 p-1'>
            <p className='text-gray-600 '>
              RealFeel : {Math.round(main.feels_like)}&deg;C
            </p>
            <p className='text-gray-600 '>Humidity : {main.humidity}%</p>
            <p className='text-gray-600 '>Cloud Cover : {clouds.all}%</p>
            <p className='text-gray-600 '>Min Temp : {Math.round(main.temp_min)}&deg;C</p>
            <p className='text-gray-600 '>Max Temp : {Math.round(main.temp_max)}&deg;C</p>

          </div>

      </div>
  )
}

export default DetailCard