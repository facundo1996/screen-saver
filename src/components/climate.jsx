import React from 'react';
import { useEffect, useState } from 'react';

const Climate = () => {
  const [weather, setWeather] = useState({})
  const [forecast, setForecast] = useState({})
  const [DOLAR, setDOLAR] = useState({})
  
  useEffect(() =>{
    fetchWeather()
  }, [])
  
  useEffect(() =>{
    console.log("DOLARR",DOLAR)

  }, [weather])
  
  const fetchWeather = async () => {
      const urlWeather = 'https://api.openweathermap.org/data/2.5/weather?q=Rosario,arg&units=metric&APPID=96195d06b3da4c45185991489e914ce4';
      const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?q=Rosario,arg&units=metric&APPID=96195d06b3da4c45185991489e914ce4';

      const responseDOLAR = await fetch('https://www.infodolar.com/cotizacion-dolar-localidad-rosario-provincia-santa-fe.aspx', {mode: 'no-cors'})
      const responseWeather = await fetch(urlWeather)
      const responseForecast = await fetch(urlForecast)
      
      const resWeatherJSON = await responseWeather.json()
      const resForecastJSON = await responseForecast.json()

      setDOLAR(responseDOLAR)
      setWeather(resWeatherJSON)
      setForecast(resForecastJSON)

    }
      
    return <div className='container-climate'>

    </div>
}
 export default Climate