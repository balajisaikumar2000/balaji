import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./BootstrapCarousel.scss";
export default function BootstrapCarousel() {
  return (
    <div className="carouse">
      <Carousel>
        <Carousel.Item>
          <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/CJQ9VVKJLZBT">
            <img
              className="d-block w-100"
              src="assets/c1.png"
              alt="First slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://www.coursera.org/account/accomplishments/certificate/PYFUJUGT28RD">
            <img
              className="d-block w-100"
              src="assets/c2.png"
              alt="Second slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://www.coursera.org/account/accomplishments/certificate/P2W5KAELRA56">
            <img
              className="d-block w-100"
              src="assets/c3.png"
              alt="Third slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://www.coursera.org/account/accomplishments/certificate/R8WCSBX2F3ML">
            <img
              className="d-block w-100"
              src="assets/c4.png"
              alt="Third slide"
            />
          </a>
        </Carousel.Item>{" "}
        <Carousel.Item>
          <a href="https://ude.my/UC-d8aeed16-725f-46b4-911c-c38730f37c7e">
            <img
              className="d-block w-100"
              src="assets/c5.png"
              alt="Third slide"
            />
          </a>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
