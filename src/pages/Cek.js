/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { useState } from 'react';
import axios from 'axios';

export default function Cek() {
  // declared the variable
  const [weather, setWeather] = useState('');
  const [city, setCity] = useState('');
  const apiKey = '796c8c456e75cd973a94afde7096ddae';

  // call and get the api
  const apiCall = async (e) => {
    e.preventDefault();
    const loc = e.target.elements.loc.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;
    const req = axios.get(url);
    const res = await req;

    // set the weather depends the city
    setWeather({
      descp: res.data.weather[0].description,
      temp: res.data.main.temp,
      city: res.data.name,
      humidity: res.data.main.humidity,
      press: res.data.main.pressure,
    });

    // set city name
    setCity(res.data.name);
  };

  // Converting K to C
  const k = weather.temp;
  const C = k - 273.15;

  return (
    <div className="container">

      {/* SEARCH start */}
      <div className="search">
        <form onSubmit={apiCall} className="form">
          <input type="text" placeholder="Search city" name="loc" className="input" />
          <button className="btn">Search</button>
        </form>
      </div>
      {/* SEARCH end */}

      {/* BODY start */}
      <div className="top">
        <div className="w-full flex flex-wrap justify-center">
          <div className="md:w-1/2">
            <h1 className="text-lg suhu">
              {C.toFixed(0)}
              °C
            </h1>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-lg kota">
              {city}
              {' '}
              •
              {' '}
              {weather.descp}
            </h3>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="desc">
          <div className="feels">
            <p className="bold">
              {C.toFixed(2)}
              °C
            </p>
            <p>Feels like</p>
          </div>
          <div className="humidity">
            <p className="bold">
              {weather.humidity}
              {' '}
              %
            </p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">
              {weather.press}
              {' '}
              mb
            </p>
            <p>Pressure</p>
          </div>
        </div>
      </div>
      {/* BODY end */}

    </div>
  );
}
