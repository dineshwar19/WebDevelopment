import { useState } from "react";
import Lander from "./components/Lander";
import Login from "./components/Login";

function App() {
  const [data , setData] = useState([]);
  return (
    <div >
      <Login getData = {(data) => setData(data)} />
      <Lander data={data} />
    </div>
  );
}

export default App;
