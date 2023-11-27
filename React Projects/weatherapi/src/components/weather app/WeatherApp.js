import { useEffect, useState } from "react";
import Search from "./Search";
import WeatherRender from "./WeatherRender";

function WeatherApp() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loca, setLoca] = useState("India");
  const APIKEY = process.env.REACT_APP_API_KEY;
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
  }, [loca, APIKEY]);

  return (
    <div className="md:flex md:flex-col md:min-h-screen md:items-center justify-center bg-gradient-to-r from-violet-500 via-violet-600 to-fuchsia-700 ">
      <div className="bg-white bg-opacity-25 p-10 rounded-lg flex bg-f flex-col items-center shadow-2xl min-h-screen">
        <Search searchLocation={(text) => setLoca(text)} />
        {isLoading ? (
          <p className="text-white text-2xl font-bold my-10">Loading...</p>
        ) : error ? (
          <p className="text-white text-2xl font-bold my-10">Error: {error}</p>
        ) : (
          <WeatherRender data={data} />
        )}
      </div>
    </div>
  );
}

export default WeatherApp;
