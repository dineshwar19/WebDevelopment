import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todos from "./components/Todos";

function App() {
  const [len, setLen] = useState(0);

  return (
    <div className="flex flex-col h-screen ">
      <Header />
      <Todos setLen={setLen} />
      <Footer len={len} />
    </div>
  );
}

export default App;
