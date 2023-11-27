import React, { useState, useEffect } from "react";
import Images from "./components/Images";
import SearchImage from "./components/SearchImage";
function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${term}&image_type=photo&pretty=true`
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
    <div className="bg-slate-800  lg:mx-auto ">
      <SearchImage searchImage={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && (
        <h1 className="  text-white text-center mt-32 mx-auto text-5xl">
          No Result Found!!!
        </h1>
      )}
      {isLoading ? (
        <h1 className="text-white text-center mt-32 mx-auto text-5xl">
          Loading...
        </h1>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center min-h-screen p-5 gap-6 ">
          {images.map((image, index) => (
            <Images key={index} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
