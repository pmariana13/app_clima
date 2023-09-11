
import React from 'react';



const CardApi = ({ data }) => {
  console.log(data)


return (
  <div className='cardclima'>
    <h2>Ciudad:{data.city}</h2>
    <p>Pais:{data.country}</p>
    <p>Temperatura:{data.temp} °C</p>
    <p>Sensación Térmica:{data.feelslike} °C</p>
    <p>Temperatura Max: {data.temp_max} °C</p>
    <p>Temperatura Min: {data.temp_min} °C</p>
    <p>Humedad:{data.humidity} %</p>
    <p>Presión Atmosférica:{data.pressure} hPa</p>
  </div>
)
}

export default CardApi;