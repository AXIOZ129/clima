import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getRandomCity } from './utils';

/*API_KEY = a poner tu key de la api obvi xd*/
const API_KEY = '9e5656030c125cfc29706c138ee50f33';
const IMAGE_PATH = '/img/clima2.png';

const Clima = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [weatherData1, setWeatherData1] = useState([]);
  const [weatherData2, setWeatherData2] = useState([]);
  const [weatherData3, setWeatherData3] = useState([]);
  const [weatherData4, setWeatherData4] = useState([]);
  const [weatherData5, setWeatherData5] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const cities = [];
      const city1 = [];
      const city2 = [];
      const city3 = [];
      const city4 = [];
      const city5 = [];
      for (let i = 0; i < 5; i++) {
        const city = getRandomCity();
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        cities.push({ ...response.data });
      }

      const response1 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=32.463058&lon=-114.776672&appid=9e5656030c125cfc29706c138ee50f33`);
      city1.push({ ...response1.data });
      setWeatherData1(city1);

      const citie2 = getRandomCity();
      const response2 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${citie2}&appid=${API_KEY}`);
      city2.push({ ...response2.data });
      setWeatherData2(city2);

      const citie3 = getRandomCity();
      const response3 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${citie3}&appid=${API_KEY}`);
      city3.push({ ...response3.data });
      setWeatherData3(city3);

      const citie4 = getRandomCity();
      const response4 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${citie4}&appid=${API_KEY}`);
      city4.push({ ...response4.data });
      setWeatherData4(city4);

      const citie5 = getRandomCity();
      const response5 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${citie5}&appid=${API_KEY}`);
      city5.push({ ...response5.data });
      setWeatherData5(city5);

      setWeatherData(cities);
      setLoading(false);
    };
    fetchData();

  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!weatherData) {
    return <p>No se pudo cargar el clima</p>;
  }
  return (
    <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark ">
        <a class="navbar-brand" href="#">Mi App De Clima</a>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <form class="d-flex my-2 my-lg-0">
                <button class="btn btn-outline-light my-2 my-sm-0 m-2" type="submit">Ingresar</button>
                <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Generar</button>
            </form>
        </div>
    </nav>
    <div class="p-2 mb-4 bg-light rounded-3">
        <div class="container-fluid">
            <div class="row ">
                <div class="col-md-7">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 p-2">
                                <div class="card text-start">
                                    <img class="card-img-top mx-auto p-2" src="https://i0.wp.com/climaya.com/wp-content/uploads/2019/06/cy-logo-512-512.png?fit=512%2C512&ssl=1"  alt="Title"/>
                                        <div class="card-body">
                                  {weatherData5.map((data) => <h4 class="card-title text-center">{data.name}</h4>) }
                                  {weatherData5.map((data) => <p class="card-title text-center" style={{ fontSize: 20, marginBottom: 8 }}>{data.weather[0].description}</p> )}
                                  {weatherData5.map((data) => <p class="card-title text-center" style={{ fontSize:25 }}>{Math.round(data.main.temp - 273.15)}°C</p>)}
                                        </div>
                                </div>
                            </div>
                            <div class="col-md-6 p-2">
                                <div class="card text-start">
                                    <img class="card-img-top mx-auto p-2" src="https://i0.wp.com/climaya.com/wp-content/uploads/2019/06/cy-logo-512-512.png?fit=512%2C512&ssl=1"  alt="Title"/>
                                        <div class="card-body">
                                  {weatherData4.map((data) => <h4 class="card-title text-center">{data.name}</h4>) }
                                  {weatherData4.map((data) => <p class="card-title text-center" style={{ fontSize: 20, marginBottom: 8 }}>{data.weather[0].description}</p> )}
                                  {weatherData4.map((data) => <p class="card-title text-center" style={{ fontSize:25 }}>{Math.round(data.main.temp - 273.15)}°C</p>)}
                                        </div>
                                </div>
                            </div>
                            <div class="col-md-6 p-2">
                                <div class="card text-start">
                                    <img class="card-img-top mx-auto p-2" src="https://i0.wp.com/climaya.com/wp-content/uploads/2019/06/cy-logo-512-512.png?fit=512%2C512&ssl=1"  alt="Title"/>
                                        <div class="card-body">
                                  {weatherData3.map((data) => <h4 class="card-title text-center">{data.name}</h4>) }
                                  {weatherData3.map((data) => <p class="card-title text-center" style={{ fontSize: 20, marginBottom: 8 }}>{data.weather[0].description}</p> )}
                                  {weatherData3.map((data) => <p class="card-title text-center" style={{ fontSize:25 }}>{Math.round(data.main.temp - 273.15)}°C</p>)}
                                        </div>
                                </div>
                            </div>
                            <div class="col-md-6 p-2">
                                <div class="card text-start">
                                    <img class="card-img-top mx-auto p-2" src="https://i0.wp.com/climaya.com/wp-content/uploads/2019/06/cy-logo-512-512.png?fit=512%2C512&ssl=1"  alt="Title"/>
                                        <div class="card-body">
                                  {weatherData2.map((data) => <h4 class="card-title text-center">{data.name}</h4>) }
                                  {weatherData2.map((data) => <p class="card-title text-center" style={{ fontSize: 20, marginBottom: 8 }}>{data.weather[0].description}</p> )}
                                  {weatherData2.map((data) => <p class="card-title text-center" style={{ fontSize:25 }}>{Math.round(data.main.temp - 273.15)}°C</p>)}
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="card">
                        <img class="card-img-top p-2 mx-auto" src="https://i0.wp.com/climaya.com/wp-content/uploads/2019/06/cy-logo-512-512.png?fit=512%2C512&ssl=1"  alt="Title"/>
                            <div class="card-body">
                                {weatherData1.map((data) => <h4 class="card-title text-center">{data.name}</h4>) }
                                {weatherData1.map((data) => <p class="card-title text-center" style={{ fontSize: 20, marginBottom: 8 }}>{data.weather[0].description}</p> )}
                                {weatherData1.map((data) => <p class="card-title text-center" style={{ fontSize:25 }}>{Math.round(data.main.temp - 273.15)}°C</p>)}
                            </div>
                    </div>
                    <br/>
                        <a type="button" href='here' class="btn btn-primary d-block mx-auto ">Obtener Diferentes</a>
                </div>

            </div>

        </div>
    </div>

     

    </div>
  );
};

export default Clima;