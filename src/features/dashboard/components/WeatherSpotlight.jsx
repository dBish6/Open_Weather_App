// *API Services Import*
import GetWeatherSpotlight from "../../../api_services/GetWeatherSpotlight";

const WeatherSpotlight = () => {
  const spotlightData = GetWeatherSpotlight();

  !spotlightData.spotlightLoading &&
    console.log("spotlightData", spotlightData);

  return (
    <div className="spotlightContainer">
      {!spotlightData.spotlightLoading
        ? spotlightData.details.map((detail) => {
            return (
              <div className="spotlight" key={detail.id}>
                <p>{Math.round(detail.main.temp)}°C</p>
                <p>{`${detail.name}, ${detail.sys.country}`}</p>
              </div>
            );
          })
        : undefined}
    </div>
  );
};

export default WeatherSpotlight;
