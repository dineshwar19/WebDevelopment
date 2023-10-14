import React from "react";

const Images = ({ image }) => {
    const tags = image.tags.split(",");
  return (
    <div>
      <div className="max-w-sm shadow-lg rounded overflow-hidden bg-white">
        <img src={image.webformatURL} alt="" className = "w-full" />
        <div className="p-4">
          <div className="font-semibold text-green-400 text-xl mb-2">
            Photo by {image.user}
          </div>
        </div>
        <ul className="p-4">
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Shares: </strong>
            {image.likes}
          </li>
        </ul>
        <div className="my-1 p-4 flex gap-4 flex-wrap">
          {tags.map((tag,index) =>(
            <span key={index} className="inline-block bg-gray-300 rounded-xl font-semibold p-1.5">
            #{tag}
          </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Images;
