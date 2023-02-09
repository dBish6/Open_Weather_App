import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GetWeatherByCity = () => {
  const [weatherData, setWeatherData] = useState({
    loading: true,
    details: {},
    errorMsg: "",
  });
  const navigate = useNavigate();

  const handleData = async (city) => {
    setWeatherData({ loading: true, details: {}, errorMsg: "" });
    try {
      const res = await axios({
        method: "GET",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`,
        validateStatus: (status) => {
          return status === 200 || status === 404; // Resolve only if the status code is 404 or 200
        },
      });
      if (res && res.status === 200) {
        setWeatherData({ loading: false, details: res.data, errorMsg: "" });
      } else if (res.status === 404) {
        setWeatherData({
          loading: false,
          details: weatherData.details,
          errorMsg: "City was not found.",
        });
      }
    } catch (error) {
      navigate("/error500");
      console.error(error);
      setWeatherData({ loading: false, errorMsg: "" });
    }
  };

  return { handleData, weatherData };
};

export default GetWeatherByCity;
