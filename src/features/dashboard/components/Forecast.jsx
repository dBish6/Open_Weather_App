const Forecast = (props) => {
  return (
    <>
      <h4>
        Forecast <hr />
        <hr />
      </h4>
      <div className="mainWeatherContainer">
        <p className="weather">{props.weatherData.weather[0].main}</p>
        <img
          src={`http://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}@2x.png`}
          alt=""
        />
      </div>
      <hr className="divider" />
      <p>
        {props.weatherData.weather[0].description.charAt(0).toUpperCase() +
          props.weatherData.weather[0].description.slice(1)}
        .
      </p>

      {props.weatherData.rain ? (
        <p>{props.weatherData.rain["1h"]}</p>
      ) : props.weatherData.snows ? (
        <p>{props.weatherData.snow["1h"]}</p>
      ) : undefined}

      {props.weatherData.clouds ? (
        <p>
          Cloudiness: <span>{props.weatherData.clouds.all}%</span>
        </p>
      ) : undefined}
    </>
  );
};

export default Forecast;
