import axios from "axios";

const key = "4809d83c35d4ec684f0b2ae54db9daaf";
const address = "http://api.weatherstack.com/current";

const API = axios.create({ baseURL: address });

export const getByCity = (city) =>
  API.get(`${address}?access_key=${key}&query=${city}`);

export const getByCoordinate = (lat, lon) =>
  API.get(`${address}?access_key=${key}&query=${lat},${lon}`);
