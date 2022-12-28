import React from 'react'
import {useState} from 'react'
import { FaMapMarkerAlt, FaMapMarker, FaSearch } from 'react-icons/fa';
import Header from '../components/Header'
import DetailCard from '../components/DetailCard'
import SummaryCard from '../components/SummaryCard'

const Page = () => {

    const API_KEY = process.env.REACT_APP_API_KEY
    const IMG_URL = process.env.REACT_APP_ICON_URL
    const [data, setData] = useState('No Data Yet')
    const [searchTerm, setSearchTerm] = useState('')
    const [weatherData, setWeatherData] = useState([])
    const [city, setCity] = useState('Unknown Location')
    const [weatherIcon, setWeatherIcon] = useState(`${IMG_URL}10n@2x.png`)



    const handleChange = (input) => {
        const {value} = input.target
        setSearchTerm(value)
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        getWeather(searchTerm)
      } 
      
    //  *****************API CALL *******************
    const getWeather = async(location) => {

        setWeatherData([])
        let how_to_search = (typeof location === 'string') ? `q=${location}` : `lat=${location[0]}&lon=${location[1]}`
        
        try{

           
            let res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?${how_to_search}&appid=${API_KEY}&units=metric&cnt=5&exclude=hourly,minutely`)
            let data = await res.json()

            // console.log(data)

            if (data.cod != 200){
                setData('Location Not Found')
                return
            }

            setWeatherData(data)
            setCity(`${data.city.name}, ${data.city.country}`)
            setWeatherIcon(`${process.env.REACT_APP_ICON_URL + data.list[0].weather[0]["icon"]}@4x.png`)



        }catch(error){
            console.log(error)
        }
    }

    const myIp = (location) => {
        const {latitude, longitude} = location.coords
        getWeather([latitude, longitude])
      }
    

  return (
    <div className="bg-gray-800 flex items-center justify-center 
            w-screen  py-5">

        <div className=" flex flex-col md:flex-row w-3/4  rounded-2xl shadow-lg
            m-auto bg-gray-100 min-h-500px mt-4">

                {/* *****************FORM CARD SECTION ******************* */}

                <div className = "form-container rounded-2xl p-5 w-full md:w-2/4">
                    <div className='flex flex-col sm:flex-row items-center justify-center'>
                        <h3 className='my-auto mr-0 sm:mr-auto mb-2 sm:mb-0 text-xl text-pink-800 font-bold
                            shadow-md py-1 px-3 rounded-md bg-white bg-opacity-30'>
                                    forecast
                        </h3>
                        <div className='flex p-2 text-gray-100 bg-gray-600 bg-opacity-30
                            rounded-lg'>
                           
                                <FaMapMarkerAlt />
                                <div className='text-right'>
                                    <p className='font-semibold text-sm ml-2'>{city}</p>
                                </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center h-full'>
                        <h1>
                            The Weather Forecast App That You Need !
                        </h1>
                        <hr className='h-1 bg-white w-1/4 rounded-full my-3' />
                        <form noValidate onSubmit={handleSubmit} className='flex justify-center w-full'>
                            <input type = 'text'
                                placeholder='Enter Location'
                                className='relative rounded-xl py-2 px-3 w-2/3 bg-gray-300
                                    bg-opacity-60 text-white placeholder-gray-200'
                                onChange={handleChange}
                                required />
                            
                            <button type='submit' className='z-10'>
                                <FaSearch className='mx-2 border-1 cursor-pointer ' />

                               
                            </button>

                            <FaMapMarkerAlt className='cursor-pointer mt-3'
                            onClick = { () => {
                                navigator.geolocation.getCurrentPosition(myIp)
                            }}/>

                         

                        </form>
                    </div>
                </div>


                {/*  ************ INFO CARD SECTION ************  */}


                <div className=' p-5 w-full md:w-2/4 '>
                    <Header />

                    <div className='flex flex-col my-2'>
                        {
                            weatherData.length === 0 ?
                            <div className='container p-4 flex itens-center justify-center
                                h-1/3 mb-auto'>
                                    <h1 className='text-gray-300 text-4xl font-bold uppercase'>
                                        {data}
                                    </h1>
                            </div>  :
                            
                            <>
                            <h1 className='text-2xl text-gray-800 mt-auto mb-2'>Today</h1>

                            <DetailCard weatherIcon={weatherIcon} data={weatherData} />

                            <h1 className=' text-gray-600  mt-3 mb-2'>More on {city} </h1>

                            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-1'>
                                {weatherData.list.map((days, index) => {
                                    if (index > 0){
                                        return (
                                            <SummaryCard key={index} day = {days} />
                                        )
                                    }
                                    })}
                            </ul>
                            </>
                        }
                    </div>
                </div>
        </div>

    </div>

  )
}

export default Page