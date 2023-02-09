const Temperature = (props) => {
  return (
    <>
      <h4>
        Temperature
        <hr />
        <hr />
      </h4>
      <p className="temp">{Math.round(props.weatherData.main.temp)}°C</p>
      <hr className="divider" />

      <p>
        Feels Like:{" "}
        <span>{Math.round(props.weatherData.main.feels_like)}°C</span>
      </p>
      <p>
        Range:{" "}
        <span>
          {Math.round(props.weatherData.main.temp_min)}°C /{" "}
          {Math.round(props.weatherData.main.temp_max)}°C
        </span>
      </p>
      <p>
        Pressure: <span>{Math.round(props.weatherData.main.pressure)}hPa</span>
      </p>
      <p>
        Humidity: <span>{Math.round(props.weatherData.main.humidity)}%</span>
      </p>
    </>
  );
};

export default Temperature;
