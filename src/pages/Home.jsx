import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getByCity, getByCoordinate } from "../api/api";
import { Form } from "../components/form/Form";
import { HeroTile } from "../components/heroTile/HeroTile";

export const Home = () => {
  const { id } = useParams();
  const [value, setValue] = useState("");
  const [weather, setWeather] = useState({});

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`../${value}`, { replace: true });
    setValue("");
  };

  useEffect(() => {
    if (id) {
      getByCity(id).then(({ data }) => setWeather(data));
    } else {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
          getByCoordinate(
            position.coords.latitude,
            position.coords.longitude
          ).then(({ data }) => setWeather(data));
        });
      } else {
        getByCity("london").then(({ data }) => setWeather(data));
      }
    }
  }, [id]);

  return (
    <div>
      <Form
        value={value}
        onSubmit={handleSubmit}
        onChange={(e) => setValue(e.target.value)}
      />
      <HeroTile weather={weather} />
    </div>
  );
};
