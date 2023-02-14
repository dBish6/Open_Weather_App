// *Design Imports*
import sunnyBackground from "../assets/images/sunny-bg-diego-ph.jpg";
import rainBackground from "../assets/images/rain-bg-daoudi-aissa.jpg";
import snowBackground from "../assets/images/snow-bg-matt-palmer.jpg";
import nightBackground from "../assets/images/night-bg-niklas-priddat.jpg";

const StyleMode = () => {
  const changeStyles = (weatherData) => {
    if (weatherData && Object.keys(weatherData).length) {
      // I know I could of just added and removed classes, but this is cool!

      // Set back to initial vales just in case.
      document.querySelector(".dashboard").style.background =
        "linear-gradient(231.22deg, rgba(244, 244, 244, 0.4) 12.91%, rgba(217, 217, 217, 0.1), rgba(244, 244, 244, 0.1))";
      document.querySelector(".spotlightContainer").style.background =
        "linear-gradient(229.82deg, rgba(244, 244, 244, 0.3) 0%, rgba(244, 244, 244, 0) 100%)";
      document.querySelector(".spotlightContainer").style.borderTopColor =
        "#ececec";
      document.querySelectorAll(".divider").forEach((elem) => {
        elem.style.borderColor = "#ececec";
      });

      document
        .querySelectorAll(["p", "h1", "h2", "h4", "label"])
        .forEach((elem) => {
          elem.style.color = "#f4f4f4";
        });
      document.querySelectorAll(".ifSnow").forEach((elem) => {
        elem.style.textShadow = "none";
      });

      // Nice Weather
      if (
        weatherData.weather[0].main === "Clear" ||
        weatherData.weather[0].main === "Clouds"
      ) {
        // Night
        if (weatherData.weather[0].icon.includes("n")) {
          document.getElementById("bg").src = nightBackground;
          document.querySelector(".dashboard").style.background =
            "rgba(54, 54, 54, 0.2)";
          document.querySelector(".spotlightContainer").style.background =
            "rgba(54, 54, 54, 0.15)";
          document.querySelectorAll(".divider").forEach((elem) => {
            elem.style.borderColor = "#363636";
          });
          document.querySelector(".spotlightContainer").style.borderTopColor =
            "#363636";
          // Day
        } else {
          document.getElementById("bg").src = sunnyBackground;
        }

        // Raining
      } else if (
        weatherData.weather[0].main === "Rain" ||
        weatherData.weather[0].main === "Drizzle" ||
        weatherData.weather[0].main === "Thunderstorm"
      ) {
        document.getElementById("bg").src = rainBackground;
        document
          .querySelectorAll(["p", "h1", "h2", "h4", "label"])
          .forEach((elem) => {
            elem.style.color = "#ececec";
          });

        // Snow
      } else if (weatherData.weather[0].main === "Snow") {
        document.getElementById("bg").src = snowBackground;
        document.querySelectorAll(".ifSnow").forEach((elem) => {
          elem.style.textShadow = "2px 0px 0px #000000";
        });
      }
    }
  };

  return changeStyles;
};

export default StyleMode;
