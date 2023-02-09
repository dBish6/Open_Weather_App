/*
  open_weather_app

  Author: David Bishop
  Creation Date: February 5, 2023
*/
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

// *Design Imports*
import "./styles/build/index.css";
import "./styles/build/styles.css";

// *Pages/Views*
import Home from "./pages/Home";

import Error404 from "./pages/errors/Error404";
import Error500 from "./pages/errors/Error500";

const onError = () => {
  document.getElementById("bg").style.display = "none";
};

function App() {
  return (
    <>
      <img id="bg" alt="" onError={() => onError()} />
      <main>
        <HashRouter>
          <Routes>
            <Route path="/home" element={<Home title="Home" />} />
            <Route path="/" element={<Navigate to="/home" />} />

            <Route path="/error404" element={<Error404 title="ERROR" />} />
            <Route path="/error500" element={<Error500 title="ERROR" />} />
            <Route path="*" element={<Navigate to="/error404" />} />
          </Routes>
        </HashRouter>
      </main>
    </>
  );
}

export default App;
