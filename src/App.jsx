import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import TemperatureConverter from "./Convertor";

function App() {
  return (
    <div>
      <TemperatureConverter />
    </div>
  );
}

export default App;
