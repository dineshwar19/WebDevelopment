import React from "react";
import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";
const WeatherRender = ({ data }) => {
  return (
    <div>
      <div className="flex flex-col items-center my-20 mb-32 ">
        <img
          src={data.current.condition.icon}
          alt=""
          className="w-24 bg-slate-500 bg-opacity-20 rounded-full my-5 p-3"
        />
        <div className="text-white text-5xl font-bold">
          {data.current.temp_c}°c
        </div>
        <div className="text-white text-center text-5xl font-bold">
          {data.location.country}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex space-x-10">
          <div className="flex gap-3 flex-wrap">
            <img src={humidity} alt="" className="h-12" />
            <div className="text-white">
              <div className="text-xl">{data.current.humidity}%</div>
              <div>Humidity</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <img src={wind} alt="" />
            <div className="text-white">
              <div className="text-xl">{data.current.wind_kph} km/hr</div>
              <div>Wind</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherRender;
