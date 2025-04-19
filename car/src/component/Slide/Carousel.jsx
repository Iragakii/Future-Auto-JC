import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [active, setActive] = useState(3);
  const items = [
    {
      id: 1,
      title: "Vintage Mustang",
      text: "• Experience unparalleled comfort with our premium luxury sedan. Featuring advanced safety systems, plush interiors, and a smooth ride perfect for long journeys.",
      img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Sports Car",
      text: "• Feel the adrenaline with our high-performance sports car. With a powerful engine and aerodynamic design, it delivers an exhilarating driving experience.",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Classic AMG",
      text: "• Own a piece of automotive history with our meticulously restored classic car. Perfect for collectors and enthusiasts who appreciate timeless design.",
      img: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Mc Lauren",
      text: "• Spacious and versatile, our family SUV offers ample room for passengers and cargo, with advanced entertainment systems to keep everyone comfortable.",
      img: "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "FX Lamborgini",
      text: "• Eco-friendly and efficient, our electric car delivers impressive range and instant torque, with cutting-edge technology for a sustainable future.",
      img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      title: "Vintage Toyota",
      text: "• Eco-friendly and efficient, our electric car delivers impressive range and instant torque, with cutting-edge technology for a sustainable future.",
      img: "https://i.pinimg.com/736x/32/eb/72/32eb72060fdf6471f132642d91d1ff0a.jpg",
    },
    {
      id: 8,
      title: "La Ferrari",
      text: "• Eco-friendly and efficient, Spacious and versatile, our family SUV offers ample room for passengers and cargo,.",
      img: "https://i.pinimg.com/736x/6f/35/1b/6f351b53155de08520b40a12f20d207a.jpg",
    },
    {
      id: 9,
      title: "Vintage Mazda",
      text: "• Eco-friendly and efficient, our electric car delivers impressive range and instant torque, with cutting-edge technology for a sustainable future.",
      img: "https://i.pinimg.com/736x/ff/4a/35/ff4a3569e9644138488be180de62b4d2.jpg",
    },
    {
      id: 10,
      title: "Vintage Lambor",
      text: "• Own a piece of automotive history with our meticulously restored classic car. impressive range and instant torque, with cutting-edge technology for a sustainable future.",
      img: "https://i.pinimg.com/736x/a5/0f/30/a50f30430332a7b3da19370aa5c85b75.jpg",
    },
  ];

  const loadShow = () => {
    const newItems = document.querySelectorAll(".slider .item");

    if (newItems.length > 0) {
      newItems[active].style.transform = `none`;
      newItems[active].style.zIndex = 1;
      newItems[active].style.filter = "none";
      newItems[active].style.opacity = 1;

      // show after
      let stt = 0;
      for (let i = active + 1; i < newItems.length; i++) {
        stt++;
        newItems[i].style.transform = `translateX(${180 * stt}px) scale(${
          1 - 0.15 * stt
        }) perspective(16px) rotateY(-1deg)`;
        newItems[i].style.zIndex = -stt;
        newItems[i].style.filter = "blur(3px)";
        newItems[i].style.opacity = stt > 2 ? 0 : 0.7;
      }

      stt = 0;
      for (let i = active - 1; i >= 0; i--) {
        stt++;
        newItems[i].style.transform = `translateX(${-180 * stt}px) scale(${
          1 - 0.15 * stt
        }) perspective(16px) rotateY(1deg)`;
        newItems[i].style.zIndex = -stt;
        newItems[i].style.filter = "blur(3px)";
        newItems[i].style.opacity = stt > 2 ? 0 : 0.7;
      }
    }
  };

  useEffect(() => {
    loadShow();
  }, [active]);

  const nextSlide = () => {
    setActive((prev) => (prev + 1 < items.length ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  return (
    <div className="carousel-container">
      <div className="slider">
        {items.map((item, index) => (
          <div key={item.id} className="item">
            <div className="image-container">
              <img src={item.img} alt={`${item.title}`} className="car-image" />
            </div>
            <div className="content">
              <h1>{item.title}</h1>
              <p>{item.text}</p>
            </div>
            <Link>
              <button>Submit To Dealer</button>
            </Link>
          </div>
        ))}
        <button id="next" onClick={nextSlide}>
          &gt;
        </button>
        <button id="prev" onClick={prevSlide}>
          &lt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
