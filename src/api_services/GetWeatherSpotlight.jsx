/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// *Utility Import*
import cityList from "../utils/spotlightCityList";

const GetWeatherSpotlight = () => {
  const [spotlightData, setSpotlightData] = useState({
    spotlightLoading: true,
    details: [],
  });
  const navigate = useNavigate();

  useEffect(() => {
    const handleData = async () => {
      setSpotlightData({ spotlightLoading: true, details: {} });
      //Fisher-Yates shuffle algorithm.
      for (let i = cityList.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        const temp = cityList[i];
        cityList[i] = cityList[randomIndex];
        cityList[randomIndex] = temp;
      }
      // New random cities array to the length of 4.
      const randomCities = cityList.slice(0, 4);

      let newRandomList = [];
      let res;
      try {
        for (let i = 0; i < randomCities.length; i++) {
          const city = randomCities[i];
          res = await axios({
            method: "GET",
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`,
          });
          if (res && res.status === 200) {
            newRandomList.push(res.data);
          }
        }
        setSpotlightData({ spotlightLoading: false, details: newRandomList });
      } catch (error) {
        navigate("/error500");
        console.error(error);
        setSpotlightData({ spotlightLoading: false });
      }
    };
    handleData();
  }, []);

  return spotlightData;
};

export default GetWeatherSpotlight;
