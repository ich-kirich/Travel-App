import axios from "axios";
import config from "config";
import { StatusCodes } from "http-status-codes";
import ApiError from "../error/apiError";

async function getWeather(lat: string, lon: string) {
  const apiKey = config.get("weather.apiKey");
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`,
    );
    return String(response.data.main.temp);
  } catch (e) {
    return new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, e.message);
  }
}

export default getWeather;
