import { useEffect, useState } from "react";

import humidity from "../assets/humidity.png";

import wind from "../assets/wind.png";
import Search from "./Search";

function WeatherApp() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loca, setLoca] = useState("India");
  const APIKEY=process.env.REACT_APP_API_KEY;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${loca}&aqi=no`
        );
        if (!response.ok) {
          throw new Error("Weather is not available");
        }
        const data = await response.json();
        setData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [loca]);
  const renderWeatherInfo = () => {
    if (isLoading) {
      return <p className="text-white text-2xl font-bold my-10">Loading...</p>;
    } else if (error) {
      return (
        <p className="text-white text-2xl font-bold my-10">Error: {error}</p>
      );
    } else if (data) {
      return (
        <div className="flex flex-col items-center">
          <img
            src={data.current.condition.icon}
            alt=""
            className="w-24 bg-slate-500 bg-opacity-20 rounded-full mt-5 p-3"
          />
          <div className="text-white text-5xl font-bold">
            {data.current.temp_c}°c
          </div>
          <div className="text-white text-5xl font-bold">
            {data.location.country}
          </div>
        </div>
      );
    }
  };
  const renderinfo = () => {
    if (isLoading) {
      return null;
    } else if (data) {
      return (
        <div className="flex space-x-32 my-10">
          <div className="flex gap-3  ">
            <img src={humidity} alt="" className="h-12" />
            <div className="text-white ">
              <div className="text-xl">{data.current.humidity}%</div>
              <div>Humidity</div>
            </div>
          </div>
          <div className="flex gap-3 ">
            <img src={wind} alt="" />
            <div className="text-white">
              <div className="text-xl">{data.current.wind_kph} km/hr</div>
              <div>Wind</div>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-r from-violet-500 via-violet-600 to-fuchsia-700">
      <div className="bg-white bg-opacity-25  p-10 rounded-lg flex bg-f flex-col items-center shadow-2xl">
        <Search searchLocation={(text) => setLoca(text)} />
        {renderWeatherInfo()}
        {renderinfo()}
      </div>
    </div>
  );
}

export default WeatherApp;
