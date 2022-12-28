import moment from 'moment'
import React from 'react'

const SummaryCard = ({day}) => {
  let day_icon = `${process.env.REACT_APP_ICON_URL + day.weather[0]["icon"]}@2x.png`

  return (
    <>
    <li className='container p-2 flex items-center justify-center bg-gray-200 rounded-lg my-auto mr-1'>
      <div className='my-auto'>
        <p className='font-bold   text-pink-600 mb-1'>
          {Math.round(day.main.temp)}&deg;C
        </p>
        <h1 className='text-2xl text-gray-500 tracking-widest'>
          {day.weather[0].main}
          <img src={day_icon} alt="weather-icon" className='w-1/4 inline' />
        </h1>
        <p className='text-gray-400 text-xs uppercase tracking-wide'>
          {day.weather[0].description}
        </p>
        <p className='tracking-wider'>
          {moment(day.dt_txt).format("dddd hh:mm")}am
        </p>
      </div>
    </li>
    </>
  )
}

export default SummaryCard