import { useState, useEffect } from "react";
import moment from "moment/moment";

const useTime = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format("h:mm A"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
};

export default useTime;
