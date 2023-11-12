import React from "react";

function DisplayData({ data }) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <p className=" list-disc list-item list-inside">
            {JSON.stringify(item)}
          </p>
          <hr />
        </li>
      ))}
    </ul>
  );
}

export default DisplayData;
