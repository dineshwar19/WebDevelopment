import React, { useState, useEffect } from "react";
import Images from "./components/Images";
import SearchImage from "./components/SearchImage";
function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=39791508-257fe833aa3f604c10b1b17c6&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [term]);
  return (
    <div className="bg-slate-800 container lg:mx-auto ">
      <SearchImage searchImage={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && <h1 className="  text-white text-center mt-32 mx-auto text-5xl">
          No Result Found!!!
        </h1> }
      {isLoading ? (
        <h1 className="text-white text-center mt-32 mx-auto text-5xl">
          Loading...
        </h1>
      ) : (
        <div className=" md:grid grid-cols-3 gap-4  sm: flex flex-col align-middle justify-center min-h-screen p-5 gap-6 ">
          {images.map((image) => (
            <Images key="{image.id}" image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
