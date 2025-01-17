import { useState } from "react";

function Search() {
  const [dataCity, setDataCity] = useState();

  const getCity = async (city) => {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
          city +
          "&appid=97ab1f2ca067001a39f0a1f84a73ce34"
      );
      if (response.ok) {
        const data = await response.json();
        setDataCity(data);
        console.log(data);
      } else {
        throw new Error("errore nella raccolta dei dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="homeContent" className="w-50 m-auto pt-3 text-white">
      <form
        className="d-flex w-75 m-auto pt-5"
        onSubmit={(e) => {
          e.preventDefault();
          getCity(e.target[0].value);
        }}
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      {dataCity && (
        <>
          <h2>
            {dataCity.city.name} - {dataCity.city.country}
          </h2>
          {dataCity.list.map((element) => (
            <p key={element.dt}>Data: {element.dt_txt} - Weather: {element.weather[0].main} - Temperature: {Math.floor(element.main.temp - 273.15)}° - Humidity: {element.main.humidity}%</p>
          ))}
        </>
      )}
    </div>
  );
}

export default Search;
