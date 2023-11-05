import { useState, useEffect } from "react";
import Searchbox from "../components/searchbox/Searchbox";
import CardHome from "../components/homecard/Homecard";
import axios from "axios";

const Forcast = () => {
  const [cityName, setCityName] = useState("");
  const [locationKey, setLocationKey] = useState("");
  const [weatherData, setWeatherData] = useState([]);

  const API_KEY = "8M2aDE3kvHdu9AG3drLUjFoi3GSenTJH";
  const TelAvivLocationKey = "215854";

  const TelAvivFiveDaysForecast = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${TelAvivLocationKey}?apikey=${API_KEY}&metric=true`;
  const AUTOCOMPLETE_URL = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete${API_KEY}&q=${locationKey}`;
  const CurrentWeather_URL = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}&metric=true`;
  const FiveDaysForcastUrl = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&metric=true`;

  const getTelAvivWeather = async () => {
    try {
      const response = await axios.get(TelAvivFiveDaysForecast);
      setWeatherData(response.data);
      localStorage.setItem("telAvivWeather", response.data);

      console.log(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    getTelAvivWeather();
  }, []);

  return (
    <div>
      <Searchbox />
      <CardHome />
    </div>
  );
};

export default Forcast;
