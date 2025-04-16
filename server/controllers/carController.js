export const getCarData = (req, res) => {
  try {
    // This matches the exact data structure from PageTwo.jsx
    const carData = [
      {
        title: "Mercedes-Benz 300SL",
        year: "06-1981",
        mileage: "1200 km",
        status: "Back to available",
        sold: false,
        centerImage: "https://www.pinterest.com/pin/4925880836483399/",
        leftImage: "https://www.pinterest.com/pin/4925880836483399/",
      },
      {
        title: "Mercedes-Benz 400SL",
        year: "03-1957",
        mileage: "8500 km",
        status: "Sold",
        sold: true,
        centerImage: "/images/car-center2.jpg",
        leftImage: "/images/car-left2.jpg",
      },
      {
        title: "Mercedes-Benz 400SL",
        year: "03-1957",
        mileage: "8500 km",
        status: "Sold",
        sold: true,
        centerImage: "/images/car-center3.jpg",
        leftImage: "/images/car-left3.jpg",
      },
      {
        title: "Mercedes-Benz 400SL",
        year: "03-1957",
        mileage: "8500 km",
        status: "Sold",
        sold: true,
        centerImage: "/images/car-center4.jpg",
        leftImage: "/images/car-left4.jpg",
      },
    ];

    res.json(carData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
