const Wind = (props) => {
  return (
    <>
      <h4>
        Wind
        <hr />
        <hr />
      </h4>
      <p className="speed">{props.weatherData.wind.speed}mph</p>
      <hr className="divider" />

      <p>
        Direction: <span>{props.weatherData.wind.deg}°</span>
      </p>
      <p>
        Gust: <span>{props.weatherData.wind.gust}mph</span>
      </p>
    </>
  );
};

export default Wind;
