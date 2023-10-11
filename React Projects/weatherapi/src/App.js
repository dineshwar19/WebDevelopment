import clear from "./components/assets/clear.png";
import cloud from "./components/assets/cloud.png";
import drizzle from "./components/assets/drizzle.png";
import humidity from "./components/assets/humidity.png";
import rain from "./components/assets/rain.png";
import search from "./components/assets/search.png";
import snow from "./components/assets/snow.png";
import wind from "./components/assets/wind.png";

function App() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-violet-300">
      <div className="bg-violet-800  p-10 rounded-lg flex flex-col items-center">
        <div className="flex justify-center gap-5">
          <input
            type="text"
            placeholder="Search"
            className="p-4 rounded-xl text-xl font-semibold border-none outline-none"
          />
          <img
            src={search}
            alt="search"
            className="bg-white w-14 p-4 rounded-2xl cursor-pointer"
          />
        </div>
        <div className="flex flex-col items-center">
          <img src={cloud} alt="" className="w-48" />
          <div className="text-white text-5xl font-bold">24'c</div>
          <div className="text-white text-5xl font-bold">London</div>
        </div>

        <div className="flex space-x-44 my-10">
          <div className="flex gap-3  ">
            <img src={humidity} alt="" className="h-12" />
            <div className="text-white ">
              <div>64%</div>
              <div>Humidity</div>
            </div>
          </div>
          <div className="flex gap-3 w-40 ">
            <img src={wind} alt="" />
            <div className="text-white">
              <div>18 km/hr</div>
              <div>Wind speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
