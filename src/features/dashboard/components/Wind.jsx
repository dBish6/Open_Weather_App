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
      {props.weatherData.wind.gust ? (
        <p>
          Gust: <span>{props.weatherData.wind.gust}mph</span>
        </p>
      ) : (
        <p>
          Gust: <span>none</span>
        </p>
      )}
    </>
  );
};

export default Wind;
