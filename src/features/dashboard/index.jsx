/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

// *Design Imports*
import openWeatherLogo from "./assets/open-weather-logo.png";
import { TbClock } from "react-icons/tb";

// *Custom Hooks Import*
import useTime from "./hooks/useTime";

// *Utility Import*
import StyleMode from "../../utils/StyleMode";

// *API Services Import*
import GetWeatherByCity from "../../api_services/GetWeatherByCity";

// *Component Imports*
import Search from "./components/Search";
import Forecast from "./components/Forecast";
import Temperature from "./components/Temperature";
import Wind from "./components/Wind";
import WeatherSpotlight from "./components/WeatherSpotlight";

const DashboardFeature = () => {
  const { handleData, weatherData } = GetWeatherByCity();
  const changeStyles = StyleMode();
  const time = useTime();

  // Initial city shown.
  useEffect(() => {
    handleData("Bay Roberts");
  }, []);

  !weatherData.loading && console.log("Search Weather", weatherData);

  useEffect(() => {
    changeStyles(weatherData.details);
  }, [weatherData]);

  return (
    <div
      className="dashboard"
      style={weatherData.loading ? { height: "611px" } : undefined}
    >
      {weatherData.loading ? (
        <div className="loaderContainer">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          {weatherData.details && (
            <>
              <div className="top">
                <div className="searchContainer">
                  <img src={openWeatherLogo} alt="" />
                  <Search
                    handleData={handleData}
                    errorMsg={weatherData.errorMsg}
                  />
                  <div className="clock">
                    <TbClock /> <p>{time}</p>
                  </div>
                </div>
                <h2>
                  {`${weatherData.details.name}, ${weatherData.details.sys.country}`}
                </h2>
                <div className="details">
                  <div className="forecast">
                    <Forecast weatherData={weatherData.details} />
                  </div>
                  <div className="temperature">
                    <Temperature weatherData={weatherData.details} />
                  </div>
                  <div className="wind">
                    <Wind weatherData={weatherData.details} />
                  </div>
                </div>
              </div>

              <WeatherSpotlight />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default DashboardFeature;
