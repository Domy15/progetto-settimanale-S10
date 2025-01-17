import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselComponent(props) {
  const [napoliList, setNapoliList] = useState(props.napoliData.list)
  const [milanoList, setMilanoList] = useState(props.milanoData.list)
  const [romaList, setRomaList] = useState(props.romaData.list)
  
  return (
    <Carousel className="text-white">
      <Carousel.Item>
        <img
          src="../src/assets/Napoli.webp"
          className="w-100"
          style={{ height: "35em" }}
        />
          <h3>{props.name1}</h3>
          <p>Temperature = {props.temp1}°</p>
          <ul className="list-unstyled">
            <li>Data: {napoliList[0].dt_txt} - Weather: {napoliList[0].weather[0].main} - Temperature: {Math.floor(napoliList[0].main.temp - 273.15)}° - Humidity: {napoliList[0].main.humidity}% </li>
            <li>Data: {napoliList[1].dt_txt} - Weather: {napoliList[1].weather[0].main} - Temperature: {Math.floor(napoliList[1].main.temp - 273.15)}° - Humidity: {napoliList[1].main.humidity}% </li>
            <li>Data: {napoliList[2].dt_txt} - Weather: {napoliList[2].weather[0].main} - Temperature: {Math.floor(napoliList[2].main.temp - 273.15)}° - Humidity: {napoliList[2].main.humidity}% </li>
            <li>Data: {napoliList[3].dt_txt} - Weather: {napoliList[3].weather[0].main} - Temperature: {Math.floor(napoliList[3].main.temp - 273.15)}° - Humidity: {napoliList[3].main.humidity}% </li>
            <li>Data: {napoliList[4].dt_txt} - Weather: {napoliList[4].weather[0].main} - Temperature: {Math.floor(napoliList[4].main.temp - 273.15)}° - Humidity: {napoliList[4].main.humidity}% </li>
            <br/>
          </ul>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="../src/assets/Milano.jpg"
          className="w-100"
          style={{ height: "35em" }}
        />
          <h3>{props.name2}</h3>
          <p>Temperature = {props.temp2}°</p>
          <ul className="list-unstyled">
            <li>Data: {milanoList[0].dt_txt} - Weather: {milanoList[0].weather[0].main} - Temperature: {Math.floor(milanoList[0].main.temp - 273.15)}° - Humidity: {milanoList[0].main.humidity}% </li>
            <li>Data: {milanoList[1].dt_txt} - Weather: {milanoList[1].weather[0].main} - Temperature: {Math.floor(milanoList[1].main.temp - 273.15)}° - Humidity: {milanoList[1].main.humidity}% </li>
            <li>Data: {milanoList[2].dt_txt} - Weather: {milanoList[2].weather[0].main} - Temperature: {Math.floor(milanoList[2].main.temp - 273.15)}° - Humidity: {milanoList[2].main.humidity}% </li>
            <li>Data: {milanoList[3].dt_txt} - Weather: {milanoList[3].weather[0].main} - Temperature: {Math.floor(milanoList[3].main.temp - 273.15)}° - Humidity: {milanoList[3].main.humidity}% </li>
            <li>Data: {milanoList[4].dt_txt} - Weather: {milanoList[4].weather[0].main} - Temperature: {Math.floor(milanoList[4].main.temp - 273.15)}° - Humidity: {milanoList[4].main.humidity}% </li>
            <br/>
          </ul>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="../src/assets/Roma.webp"
          className="w-100"
          style={{ height: "35em" }}
        />
          <h3>{props.name3}</h3>
          <p>Temperature = {props.temp3}°</p>
        <ul className="list-unstyled">
            <li>Data: {romaList[0].dt_txt} - Weather: {romaList[0].weather[0].main} - Temperature: {Math.floor(romaList[0].main.temp - 273.15)}° - Humidity: {romaList[0].main.humidity}% </li>
            <li>Data: {romaList[1].dt_txt} - Weather: {romaList[1].weather[0].main} - Temperature: {Math.floor(romaList[1].main.temp - 273.15)}° - Humidity: {romaList[1].main.humidity}% </li>
            <li>Data: {romaList[2].dt_txt} - Weather: {romaList[2].weather[0].main} - Temperature: {Math.floor(romaList[2].main.temp - 273.15)}° - Humidity: {romaList[2].main.humidity}% </li>
            <li>Data: {romaList[3].dt_txt} - Weather: {romaList[3].weather[0].main} - Temperature: {Math.floor(romaList[3].main.temp - 273.15)}° - Humidity: {romaList[3].main.humidity}% </li>
            <li>Data: {romaList[4].dt_txt} - Weather: {romaList[4].weather[0].main} - Temperature: {Math.floor(romaList[4].main.temp - 273.15)}° - Humidity: {romaList[4].main.humidity}% </li>
            <br/>
          </ul>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
