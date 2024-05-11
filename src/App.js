import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const slides = [
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/08/03/09/03/universe-1566159_640.jpg",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/09/22/10/44/banner-1686943_640.jpg",
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/1270022469/photo/golden-yellow-orange-red-maple-leaves-close-up-on-the-blurred-background.jpg?s=612x612&w=0&k=20&c=fCD5Sm_c47wC9DIydodLgH0UJqNzr2gt9W5ewaXmniM=",
    },
    {
      imageUrl:
        "https://png.pngtree.com/thumb_back/fh260/background/20221011/pngtree-blue-gold-background-banner-idea-modern-simple-free-download-image_1467602.jpg",
    },
    {
      imageUrl:
        "https://img.freepik.com/premium-vector/abstract-asthetic-hd-wallpaper-background-banner-design-multipurpose_1340-16681.jpg",
    },
    {
      imageUrl:
        "https://c4.wallpaperflare.com/wallpaper/837/468/965/wavy-dark-shadow-light-wallpaper-preview.jpg",
    },
    {
      imageUrl:
        "https://img.lovepik.com/background/20211022/large/lovepik-taobao-tmall-e-commerce-banner-background-image_500603827.jpg",
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
