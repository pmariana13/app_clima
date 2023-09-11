
import React, { useEffect, useState } from "react";
import Barrabuscar from '../components/buscar';
import getApiInfo from "../components/getApi";
import CardApi from '../components/CardApi';

const ClimaApp = () => {

  const [data, setData] = useState({
    city: "",
    country: "",
    description: "",
    temp: "",
    feelslike: "",
    temp_max: "",
    temp_min: "",
    Humedad: "",
    pressure: "",

  })
  const [city, setCity] = useState('')

  useEffect(() => {
    getApiInfo(city).then((data) => {
      console.log(data);

      setData((prevState) => ({
        ...prevState,
        city: data.name,
        country: data.sys.country,
        temp: Math.floor(data.main.temp - 273),
        feelslike: Math.floor(data.main.feels_like - 273),
        temp_max: Math.floor(data.main.temp_max - 273),
        temp_min: Math.floor(data.main.temp_min - 273),
        humidity: data.main.humidity,
        pressure: data.main.pressure,

      }));
    });
  }, [city]);

  const handleSumit = (e) => {
    e.preventDefault()
    setCity(e.target[0].value)
    console.log(e.target[0].value)
    e.target.reset()
    }
    return (
      <div className="card1"> 
        <Barrabuscar handleSumit={handleSumit} />
        <CardApi data={data} />
      </div>
    );
  };


export default ClimaApp;