import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent(props) {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="../src/assets/Napoli.webp" className='w-100' style={{height: "35em"}}/>
        <Carousel.Caption>
          <h3>{props.name1}</h3>
          <p>Temperature = {props.temp1}°</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="../src/assets/Milano.jpg" className='w-100' style={{height: "35em"}}/>
        <Carousel.Caption>
          <h3>{props.name2}</h3>
          <p>Temperature = {props.temp2}°</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="../src/assets/Roma.webp" className='w-100' style={{height: "35em"}}/>
        <Carousel.Caption>
          <h3>{props.name3}</h3>
          <p>Temperature = {props.temp3}°</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;