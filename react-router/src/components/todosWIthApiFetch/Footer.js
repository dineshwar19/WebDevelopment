import React from "react";

function Footer({ len }) {
  return (
    <div>
      <footer className=" p-2 bg-blue-600 text-white text-2xl font-semibold text-center ">
        {len === 0 ? <p>No tasks</p> : <p>{len} Task Remaining</p>}
      </footer>
    </div>
  );
}

export default Footer;
