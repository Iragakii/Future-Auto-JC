import React, { useState, useEffect } from "react";
import "./Explor.css";
import { Link } from "react-router-dom";

const Explor = () => {
  const [active, setActive] = useState(3);
  const items = [
    {
      id: 1,
      title: "Vintage Aston Martin",
      text: "• Experience unparalleled comfort with our premium luxury sedan. Featuring advanced safety systems, plush interiors, and a smooth ride perfect for long journeys.",
      img: "https://i.pinimg.com/736x/79/d5/e9/79d5e904b03515bfc3523ca5ef4640b7.jpg",
    },
    {
      id: 2,
      title: "Aston Martin Vahalla",
      text: "• Feel the adrenaline with our high-performance sports car. With a powerful engine and aerodynamic design, it delivers an exhilarating driving experience.",
      img: "https://i.pinimg.com/736x/a4/3f/7f/a43f7f7b2044628a22735c417bcbaa61.jpg",
    },
    {
      id: 3,
      title: "Aston Martin Vahalla",
      text: "• Own a piece of automotive history with our meticulously restored classic car. Perfect for collectors and enthusiasts who appreciate timeless design.",
      img: "https://i.pinimg.com/736x/cf/50/53/cf5053d92955bc8a1778812d40f62738.jpg",
    },
    {
      id: 4,
      title: "Aston Martin Vahalla",
      text: "• Spacious and versatile, our family SUV offers ample room for passengers and cargo, with advanced entertainment systems to keep everyone comfortable.",
      img: "https://i.pinimg.com/736x/44/b3/36/44b3364f1cd4eb42170c0a9fd80d7d2a.jpg",
    },
    {
      id: 5,
      title: "Aston Martin Vahalla",
      text: "• Eco-friendly and efficient, our electric car delivers impressive range and instant torque, with cutting-edge technology for a sustainable future.",
      img: "https://i.pinimg.com/736x/4e/8d/99/4e8d994e88e83a5ba1e0bde01432c21a.jpg",
    },
    {
      id: 6,
      title: "Aston Martin Vahalla",
      text: "• Eco-friendly and efficient, our electric car delivers impressive range and instant torque, with cutting-edge technology for a sustainable future.",
      img: "https://i.pinimg.com/736x/23/e9/af/23e9afab48f022173423b4f026512e9a.jpg",
    },
    {
      id: 7,
      title: "Aston Martin Vahalla",
      text: "• Eco-friendly and efficient, our electric car delivers impressive range and instant torque, with cutting-edge technology for a sustainable future.",
      img: "https://i.pinimg.com/736x/bc/f2/61/bcf2616e2d2254493e1a8ec7d0b7a9db.jpg",
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

export default Explor;
