import axios from "axios";
import React from "react";

async function getData() {
  const res = await axios.get(
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
  );
  return res.data;
}

export default async function page() {
  const weather = await getData();

  return (
    <>
      <div>Nhiệt độ: {weather.current.temperature_2m}</div>
      <div>Tốc độ gió: {weather.current.wind_speed_10m}</div>
    </>
  );
}
