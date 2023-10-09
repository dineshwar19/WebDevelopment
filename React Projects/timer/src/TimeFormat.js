import React from "react";

const TimeFormat = ({ seconds }) => {
  const hours = Math.floor(seconds / 3600);
  const min = Math.floor((seconds % 3600) / 60);
  const sec = seconds % 60;

  return (
    <>
      {`${hours.toString().padStart(2, "0")} : ${min
        .toString()
        .padStart(2, "0")} : ${sec.toString().padStart(2, "0")} `}
    </>
  );
};

export default TimeFormat;
