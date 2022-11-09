import React from 'react';
import { useEffect, useState } from 'react';

const Climate = () => {
  const [weather, setWeather] = useState()
  const [forecast, setForecast] = useState()
  
  useEffect(() =>{
    fetchWeather()
  }, [])
  
  const fetchWeather = async () => {
      const urlWeather = 'https://api.openweathermap.org/data/2.5/weather?q=Rosario,arg&units=metric&APPID=96195d06b3da4c45185991489e914ce4';
      const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?q=Rosario,arg&units=metric&APPID=96195d06b3da4c45185991489e914ce4';

      const responseWeather = await fetch(urlWeather)
      const responseForecast = await fetch(urlForecast)
  
      const resWeatherJSON = await responseWeather.json()
      const resForecastJSON = await responseForecast.json()

      setWeather(resWeatherJSON)
      setForecast(resForecastJSON)

      
      
      
    }
      
    return <div className='container-climate'>

    </div>
}
 export default Climate