import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const slides = [
    { imageUrl: "http://fullstacksapp.com/assets/img2-B5l93ND0.png" },
    { imageUrl: "http://fullstacksapp.com/assets/img3-BefCqIyQ.png" },
    { imageUrl: "http://fullstacksapp.com/assets/img3-BefCqIyQ.png" },
    {
      imageUrl: "http://fullstacksapp.com/assets/img2-B5l93ND0.png",
    },
    {
      imageUrl: "http://fullstacksapp.com/assets/img2-B5l93ND0.png",
    },
    {
      imageUrl: "http://fullstacksapp.com/assets/img2-B5l93ND0.png",
    },
    {
      imageUrl: "http://fullstacksapp.com/assets/img2-B5l93ND0.png",
    },
  ];

  const [dotActive, setDotActive] = useState(0);

  const dotClickHandler = (index) => {
    setDotActive(index);
  };
  const getPrevIndex = (index) => {
    return (index - 1 + slides.length) % slides.length;
  };
  const getNextIndex = (index) => {
    return (index + 1) % slides.length;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDotActive((prevIndex) => getNextIndex(prevIndex));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-5 mb-5">
      <div className="container">
        <div className="main-slider">
          <div className="slider-item slider-prev-item">
            <div className="slider-item-inner">
              <img
                src={slides[getPrevIndex(dotActive)].imageUrl}
                alt="Previous"
              />
            </div>
          </div>
          <div className="slider-item slider-current-item">
            <div className="slider-item-inner">
              <img src={slides[dotActive].imageUrl} alt="Current" />
            </div>
          </div>
          <div className="slider-item slider-next-item">
            <div className="slider-item-inner">
              <img src={slides[getNextIndex(dotActive)].imageUrl} alt="Next" />
            </div>
          </div>
        </div>
        <div className="main-slider-dots w-100">
          {slides.map((item, index) => {
            return (
              <div
                key={index}
                className={`slider-dot ${dotActive === index ? "active" : ""}`}
                onClick={() => dotClickHandler(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default App;
