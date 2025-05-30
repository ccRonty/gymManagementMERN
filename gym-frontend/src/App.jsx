import { useState } from "react";
import "./index.css";
import "./App.css";
import Home from "./Pages/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
