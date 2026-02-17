import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar, FaQuoteLeft, FaUserTie } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 50;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 50;
    setHoverPos({ x, y });
  };

  const handleMouseLeave = () => {
    setHoverPos({ x: 0, y: 0 });
  };

  // offer timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 2); // 2-hour limited offer

    const updateTimer = () => {
      const now = new Date();
      const difference = targetTime - now;

      if (difference > 0) {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  // Data arrays
  const foodItems = [
    {
      name: "Classic Cold Coffee",
      price: "$6.0",
      img: "https://i.pinimg.com/736x/a2/43/51/a24351d202d0399d666b77f8528e4009.jpg",
    },
    {
      name: "Iced Latte",
      price: "$6.5",
      img: "https://i.pinimg.com/736x/dc/b0/95/dcb0958870e49985d2ef4200a6c284f8.jpg",
    },
    {
      name: "Iced Cappuccino",
      price: "$6.5",
      img: "https://i.pinimg.com/736x/57/06/5c/57065ca6aec073ec21c468356d714b33.jpg",
    },
    {
      name: "Mocha Frappe",
      price: "$7.0",
      img: "https://i.pinimg.com/1200x/75/ff/4b/75ff4bd9c9368c0b27f80988026bdb4a.jpg",
    },
    {
      name: "Caramel Cold Coffee",
      price: "$7.0",
      img: "https://i.pinimg.com/736x/3e/c3/d6/3ec3d6b45c2e086a5f9db306beeea447.jpg",
    },
    {
      name: "Lemon Mint Cooler",
      price: "$5.5",
      img: "https://i.pinimg.com/736x/da/98/9f/da989f6bac8c3cfe401f28a828a120fb.jpg",
    },
    {
      name: "Blue Lagoon",
      price: "$6.0",
      img: "https://i.pinimg.com/736x/b0/a3/a2/b0a3a27ac81de902688f9fecfd324654.jpg",
    },
    {
      name: "Virgin Mojito",
      price: "$6.0",
      img: "https://i.pinimg.com/736x/92/00/5a/92005a35297bd7848cbb7dc73d4b2440.jpg",
    },
    {
      name: "Strawberry Blast",
      price: "$6.5",
      img: "https://i.pinimg.com/736x/e3/78/59/e378592766cf9f7b8a5e30aae5696355.jpg",
    },
    {
      name: "Mango Tango",
      price: "$6.5",
      img: "https://i.pinimg.com/736x/9e/b1/0e/9eb10e9ee441dbf2135584bc1f0fa818.jpg",
    },
  ];

  const categoryItems = [
    {
      name: "Spicy BBQ Chicken",
      img: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_1.png",
    },
    {
      name: "Today's Special",
      img: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_2.png",
    },
    {
      name: "Special Chicken Roll",
      img: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_3.png",
    },
  ];

  const bestSellingDishes = [
    {
      name: "Butter Paneer Masala",
      img: "https://png.pngtree.com/png-vector/20250119/ourmid/pngtree-paneer-butter-masala-with-fresh-coriander-and-cream-png-image_15262834.png",
      price: "$19.9",
    },
    {
      name: "Shahi Paneer",
      img: "https://i.pinimg.com/736x/a3/78/2a/a3782ad69c2dadf9ff11e6255daab03e.jpg",
      price: "$19.9",
    },
    {
      name: "Chole Bhature",
      img: "https://i.pinimg.com/736x/5a/83/8b/5a838bf71b48ac24d6c4fdd682e047fc.jpg",
      price: "$19.9",
    },
    {
      name: "Pav Bhaji",
      img: "https://i.pinimg.com/736x/a2/21/94/a221948320ea035ca6d5cfa64ce40430.jpg",
      price: "$19.9",
    },
    {
      name: "Gulab Jamun",
      img: "https://i.pinimg.com/736x/46/82/42/4682429353b9899be59cab8621525c9b.jpg",
      price: "$19.9",
    },
    {
      name: "Kaju Katli",
      img: "https://i.pinimg.com/736x/24/10/40/2410403e2e31a77c53cc3e1ebbe17223.jpg",
      price: "$19.9",
    },
    {
      name: "Rasgulla",
      img: "https://i.pinimg.com/1200x/0a/b7/02/0ab7020a4ad10864c04cd546f891b5d0.jpg",
      price: "$19.9",
    },
    {
      name: "Besan Ladoo",
      img: "https://i.pinimg.com/736x/89/94/d3/8994d3fbb3c9efeff8969cb705f9b01d.jpg",
      price: "$19.9",
    },
  ];

  const menuItems = [
    {
      name: "Magnam Tiste",
      desc: "Lorem, deren, tratoro, filede, nerada",
      price: "$5.95",
      img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    },
    {
      name: "Aut Luia",
      desc: "Lorem, deren, tratoro, filede, nerada",
      price: "$14.95",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
    },
    {
      name: "Est Eligendi",
      desc: "Lorem, deren, tratoro, filede, nerada",
      price: "$8.95",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    },
    {
      name: "Eos Lubisdam",
      desc: "Lorem, deren, tratoro, filede, nerada",
      price: "$12.95",
      img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
    },
    {
      name: "Eos Lubisdam",
      desc: "Lorem, deren, tratoro, filede, nerada",
      price: "$12.95",
      img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
    },
    {
      name: "Laboriosam Direva",
      desc: "Lorem, deren, tratoro, filede, nerada",
      price: "$9.95",
      img: "https://themewagon.github.io/yummy-red/assets/img/menu/menu-item-3.png",
    },
  ];

  const chefs = [
    {
      name: "Chef Antonio Russo",
      specialty: "Italian Pasta Specialist",
      image:
        "https://gramentheme.com/html/fresheat/assets/img/chefe/chefeThumb2_1.jpg",
      description:
        "Known for his signature handmade fettuccine and truffle ravioli.",
    },
    {
      name: "Chef Mei Ling",
      specialty: "Asian Fusion Expert",
      image:
        "https://gramentheme.com/html/fresheat/assets/img/chefe/chefeThumb2_2.jpg",
      description: "Fuses traditional Asian flavors with modern techniques.",
    },
    {
      name: "Chef Carlos Fernandez",
      specialty: "Grill Master",
      image:
        "https://gramentheme.com/html/fresheat/assets/img/chefe/chefeThumb2_3.jpg",
      description:
        "Loves crafting gourmet burgers and perfectly seared steaks.",
    },
  ];

const blogPosts = [
  {
    title: "Sweet & Salty Flavor Research",
    img: "https://i.pinimg.com/1200x/6b/8e/79/6b8e79df93727e10bd2525bf94085f3a.jpg",
  },
  {
    title: "Healthy Vegetarian Cooking",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  },
  {
    title: "Food, Culture & Art",
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
  },
  {
    title: "Street Style Veg Snacks",
    img: "https://images.unsplash.com/photo-1628294895950-9805252327bc",
  },
  {
    title: "Healthy Veg Meals",
    img: "https://i.pinimg.com/1200x/1a/cb/c1/1acbc1692e035d3137cc701330a431d0.jpg",
  },
  {
    title: "Modern Veg Recipes",
    img: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759",
  },
  {
    title: "Benefits of Vegetarian Food",
    img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
  },
];



  //  menu data
  const menuData = {
    Starters: [
      {
        name: "Paneer Tikka",
        desc: "Crispy and tasty",
        price: "$5.95",
        img: "https://i.pinimg.com/1200x/fa/a8/7e/faa87efaab908b4884e6c5418d336421.jpg",
      },
      {
        name: "Crispy Corn",
        desc: "Hot & spicy",
        price: "$4.95",
        img: "https://i.pinimg.com/736x/c2/95/df/c295df0b9e6d1d8d964a4fff7a2079db.jpg",
      },
      {
        name: "Soup",
        desc: "Hot & spicy",
        price: "$4.95",
        img: "https://i.pinimg.com/1200x/3b/39/f4/3b39f4444dadb4fcf8ecd9e163c261c1.jpg",
      },
    ],

    Breakfast: [
      {
        name: "Poha",
        desc: "Soft & sweet",
        price: "$6.95",
        img: "https://i.pinimg.com/736x/7f/6f/6a/7f6f6a4806b6e0513d6bea3233718aac.jpg",
      },
      {
        name: "Aloo Paratha",
        desc: "Healthy eggs",
        price: "$5.95",
        img: "https://i.pinimg.com/736x/2b/c6/c2/2bc6c24915879c1ade148513cec6e687.jpg",
      },
      {
        name: "Masala Dosa",
        desc: "Healthy eggs",
        price: "$5.95",
        img: "https://i.pinimg.com/736x/b1/ed/f5/b1edf52332ad7d4dbd349adbc2725145.jpg",
      },
      {
        name: "Uttapam",
        desc: "Healthy eggs",
        price: "$5.95",
        img: "https://i.pinimg.com/736x/4a/13/3b/4a133b95bb624cd32cd8dced87a696d0.jpg",
      },
      {
        name: "Chole Bhature",
        desc: "Healthy eggs",
        price: "$5.95",
        img: "https://i.pinimg.com/736x/36/12/b8/3612b8e5b3c9e3b84f0b23aa68208ca5.jpg",
      },
      {
        name: "Cheese Sandwich",
        desc: "Healthy eggs",
        price: "$5.95",
        img: "https://i.pinimg.com/1200x/18/4b/ab/184bab829cf32c9e13698c017876b22e.jpg",
      },
    ],

    Lunch: [
      {
        name: "Dal Tadka",
        desc: "Indian meal",
        price: "$9.95",
        img: "https://i.pinimg.com/1200x/1f/59/cc/1f59cc55ad67591c0833862a2593133d.jpg",
      },
      {
        name: "Kadai Paneer",
        desc: "Full lunch",
        price: "$8.95",
        img: "https://i.pinimg.com/736x/47/b9/88/47b98855a4c6c4261f6d0103ef050faa.jpg",
      },
      {
        name: "Mix Veg",
        desc: "Full lunch",
        price: "$8.95",
        img: "https://i.pinimg.com/1200x/e6/34/58/e634588561877d787908598027b32eff.jpg",
      },
    ],

    Dinner: [
      {
        name: "Magnam Tiste",
        desc: "Lorem, deren, tratoro",
        price: "$5.95",
        img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
      },
      {
        name: "Aut Luia",
        desc: "Lorem, deren, tratoro",
        price: "$14.95",
        img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
      },
      {
        name: "Est Eligendi",
        desc: "Lorem, deren, tratoro",
        price: "$8.95",
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      },
    ],
  };

  // our chfe

  const testimonials = [
    {
      text: `Suman is our Starter Chef, specializing in a wide variety of starters and appetizers.
From crispy snacks to flavorful starters, Suman ensures every dish is fresh, well-balanced, and delicious, making the perfect beginning to a great meal.`,
      name: "Suman",
      role: "Starter Chef",
      img1: "https://i.pinimg.com/736x/67/7d/1b/677d1b712c2d5dc0c37a096bcd627413.jpg",
      img2: "https://i.pinimg.com/1200x/83/b6/e2/83b6e22f548bf8b001c196e54c4eadf0.jpg",
    },
    {
      text: `Pratik is our Head Chef, responsible for preparing complete meals with perfection.
He has strong expertise in Indian cuisine, main course dishes, breads, and traditional recipes. His focus is always on authentic taste, quality ingredients, and kitchen hygiene..`,
      name: "Pratik",
      role: "Head Chef",
      img1: "https://i.pinimg.com/736x/c0/f1/1b/c0f11b40bdf81185495c6269046db911.jpg",
      img2: "https://i.pinimg.com/1200x/de/00/bf/de00bf01bfca36b0fc1eba9487e23e71.jpg",
    },
    {
      text: `Priyanka is our Burger and Pizza Chef, known for preparing tasty fast food loved by all age groups.
Her burgers are juicy, her pizzas are cheesy, and every dish is made using fresh ingredients with a modern touch.`,
      name: "Priynka",
      role: "Burger & Pizza Chef",
      img1: "https://i.pinimg.com/1200x/05/1f/68/051f68355afa0db3743ff047bb040d9b.jpg",
      img2: "https://i.pinimg.com/1200x/6a/bf/af/6abfafbb67e503da19704b2fcb8d1119.jpg",
    },
  ];

  // big image section

  const [activeTab, setActiveTab] = useState("Starters");

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openPopup = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closePopup = () => setIsOpen(false);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? menuData[activeTab].length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === menuData[activeTab].length - 1 ? 0 : prev + 1
    );
  };

  // export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const item = testimonials[index];

  return (
    <>
      <section className="bg-gray-200">
        <div className=" text-black">
          {/* Hero Section */}
          <section
  className="relative bg-[#faeccc] text-white px-6 py-20 md:px-20 overflow-hidden"
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
>
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
    
    <div className="w-full md:w-1/2">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
  <span className="inline-block min-h-[72px] md:min-h-[96px] text-red-500">
    <Typewriter
      words={[
        "Chicago Deep",
        "Burger King",
        "Delicious & Juicy",
        "100% Fresh",
      ]}
      loop
      cursor
      cursorStyle=""
      typeSpeed={120}
      deleteSpeed={80}
      delaySpeed={500}
    />
  </span>
</h1>


      <p className="mt-4 text-lg text-black">
        Welcome india - 50% OFF
      </p>

  <button
  type="button"
  className="mt-6 font-sans flex justify-center gap-2 items-center shadow-xl text-lg text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold isolation-auto 
  before:absolute before:w-full before:transition-all before:duration-700 
  before:hover:w-full before:-left-full before:hover:left-0 
  before:rounded-full before:bg-red-500 
  hover:text-gray-50 before:-z-10 before:aspect-square 
  before:hover:scale-150 before:hover:duration-700 
  relative z-10 px-6 py-3 overflow-hidden border-2 rounded-full group"
>
  Order Now

  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 19"
    className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 
    group-hover:bg-gray-50 ease-linear duration-300 
    rounded-full border border-gray-700 
    group-hover:border-none p-2 rotate-45"
  >
    <path
      className="fill-gray-800"
      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
    />
  </svg>
</button>

    </div>

    <div
      className="w-full md:w-1/2 transition-transform duration-200 ease-out"
      style={{
        transform: `translate(${hoverPos.x}px, ${hoverPos.y}px)`,
      }}
    >
      <img
        src="https://gramentheme.com/html/fresheat/assets/img/banner/bannerThumb1_2.png"
        alt="Burger"
        className="w-96 mx-auto mt-10 md:mt-0 select-none pointer-events-none"
      />
    </div>

  </div>
</section>


          {/* Popular Food Items */}
         <section className="py-14 md:py-20 px-4 md:px-20 bg-gray-50">
  {/* Heading */}
  <div className="text-center mb-10">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-gray-900">
      Popular{" "}
      <span className="text-red-500">Food Items</span>
    </h2>
    <p className="mt-3 text-gray-600 max-w-xl mx-auto">
      Discover our most loved dishes, freshly prepared and full of flavor.
    </p>
  </div>

  {/* Slider */}
  <Swiper
    modules={[Autoplay]}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    loop={true}
    spaceBetween={24}
    slidesPerView={1}
    breakpoints={{
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    }}
    className="!pb-12"
  >
    {foodItems.map((item, i) => (
      <SwiperSlide key={i}>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 h-full flex flex-col items-center">
          <img
            src={item.img}
            alt={item.name}
            className="w-24 h-24 object-contain"
          />
          <h4 className="mt-4 text-lg font-semibold text-gray-800">
            {item.name}
          </h4>
          <p className="mt-1 text-red-500 font-medium">
            {item.price}
          </p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>


          {/* Category Buttons */}
          {/* START  */}

         <section className="py-16 md:py-24 px-4 md:px-20 bg-gray-50 text-gray-900">
  <div className="max-w-7xl mx-auto text-center">

    {/* Heading */}
    <div className="mb-14">
     

       <h2 className="text-5xl font-extrabold tracking-wide text-black mb-4">
                    Course {" "}
                <span className="text-5xl font-extrabold tracking-wide text-red-500 mb-4">
                  Overview 
                </span>
              </h2>

     <span className="inline-block text-xs font-semibold tracking-widest text-yellow-500 uppercase mb-3">
        Learn To Create Nutritious Meals & Master 5 Healthy Recipes In 4 Weeks
      </span>

      <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
        Gain practical cooking skills, understand nutrition basics, and prepare
        delicious healthy meals with confidence in just four weeks.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-14">

      {/* Card */}
      <div className="bg-white shadow-md rounded-2xl overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
        <img
          src="https://i.pinimg.com/736x/08/c7/0d/08c70d473888e35bd1c4cd9d1d2983d7.jpg"
          alt="Balance in Meals"
          className="w-full h-56 object-cover"
        />
        <div className="p-6 text-left">
          <h3 className="font-semibold text-lg mb-2">
            How To Achieve Balance In Meals
          </h3>
          <p className="text-gray-500 text-sm">
            Learn how to balance nutrients for energy, health, and taste.
          </p>
        </div>
      </div>

      {/* Card */}
      <div className="bg-white shadow-md rounded-2xl overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
        <img
          src="https://i.pinimg.com/1200x/da/54/b8/da54b8bfaffa1ad68f9f23d57d1222c8.jpg"
          alt="Improve Cooking Skills"
          className="w-full h-56 object-cover"
        />
        <div className="p-6 text-left">
          <h3 className="font-semibold text-lg mb-2">
            Improve Your Cooking Skills
          </h3>
          <p className="text-gray-500 text-sm">
            Build confidence with modern techniques and kitchen tips.
          </p>
        </div>
      </div>

      {/* Card */}
      <div className="bg-white shadow-md rounded-2xl overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
        <img
          src="https://i.pinimg.com/736x/72/2a/0c/722a0c35c56cdfb242610b193d1c4d7b.jpg"
          alt="Kitchen Equipment"
          className="w-full h-56 object-cover"
        />
        <div className="p-6 text-left">
          <h3 className="font-semibold text-lg mb-2">
            Kitchen Equipment Essentials
          </h3>
          <p className="text-gray-500 text-sm">
            Understand tools that make cooking faster and easier.
          </p>
        </div>
      </div>
    </div>

    {/* Button */}
    <button className="bg-black hover:bg-red-600 text-white font-semibold px-12 py-4 rounded-full transition transform hover:scale-105">
      Start Your Journey Now
    </button>

  </div>
</section>


          {/* END */}

          {/* American Cuisine Variety */}
          <section className="py-16 px-6 md:px-20 bg-gray-50">
            <div className="grid md:grid-cols-3 items-center gap-10 max-w-6xl mx-auto">
              <img
                src="https://gramentheme.com/html/fresheat/assets/img/shape/aboutShape1_3.png"
                alt="Variety 1"
                className="w-full rounded-lg animate-spin-slow"
              />

              <div className="text-center">
                <h2 className="text-3xl font-bold">
                  Variety Of Flavours From American Cuisine
                </h2>
                <p className="mt-4">
                  We deliver the best taste and authentic flavors right to your
                  doorstep.
                </p>
              </div>

              <img
                src="https://gramentheme.com/html/fresheat/assets/img/shape/aboutShape1_6.png"
                alt="Variety 2"
                className="w-full rounded-lg animate-spin-slow"
              />
            </div>
          </section>

          {/* Best Selling Dishes */}
         <section className="py-16 px-6 md:px-20 bg-[#f9f9f9]">
  <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
    Best Selling Dishes
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
    {bestSellingDishes.map((dish, i) => (
      <div
        key={i}
        className="group p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer bg-white"
      >
        <div className="flex justify-center mb-4">
          <img
            src={dish.img}
            alt={dish.name}
            className="
              w-28 h-28 rounded-full object-cover
              transition-transform duration-300
              group-hover:-translate-y-2
            "
          />
        </div>

        <h4 className="text-center font-semibold text-lg text-gray-800">
          {dish.name}
        </h4>
        <p className="text-center text-red-500 font-medium mt-1">
          {dish.price}
        </p>
      </div>
    ))}
  </div>
</section>


          {/* Discount Offer */}
          <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white py-24 text-center overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
              <h2 className="text-5xl font-extrabold tracking-wide text-red-500 mb-4">
                TODAY'S SPECIAL Offer
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                🔥 Grab your deal before time runs out!
              </p>

              {/* Countdown Timer */}
              <div className="flex justify-center gap-8 mb-12">
                {[
                  { label: "Hours", value: timeLeft.hours },
                  { label: "Minutes", value: timeLeft.minutes },
                  { label: "Seconds", value: timeLeft.seconds },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 w-24 shadow-lg"
                  >
                    <div className="text-3xl font-bold text-yellow-400">
                      {String(item.value).padStart(2, "0")}
                    </div>
                    <div className="text-sm text-gray-300 mt-2">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

               <button className="bg-white text-black hover:bg-red-600 hover:text-white font-semibold px-10 py-3 rounded-full transition transform hover:scale-105">
  Order Now
</button>

            </div>

            {/* Decorative Glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-red-500/10 via-black/50 to-black/90 opacity-20 z-0" />
          </section>

          {/* Fresheat Menu */}
          <section className="py-20 px-6 bg-white">
            {/* Header */}
            <div className="text-center mb-12">
              <p className="text-sm tracking-widest text-gray-400 uppercase"></p>
              <h2 className="text-5xl font-extrabold tracking-wide text-black mb-4">
                Check Our{" "}
                <span className="text-5xl font-extrabold tracking-wide text-red-500 mb-4">
                  Yummy Menu
                </span>
              </h2>
            </div>

            {/* Tabs */}
            <div className="flex justify-center gap-8 mb-10 text-gray-600">
              {Object.keys(menuData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 transition ${
                    activeTab === tab
                      ? "text-red-500 border-b-2 border-red-500"
                      : "hover:text-red-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Sub heading */}
            <div className="text-center mb-14">
              <p className="text-sm text-gray-400 uppercase"></p>
              <h3 className="text-3xl text-red-500 tracking-wide">
                {activeTab}
              </h3>
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-24 gap-x-10 max-w-6xl mx-auto">
              {menuData[activeTab].map((item, index) => (
                <div key={index} className="text-center relative">
                  <div className="relative flex justify-center">
                    <div className="w-52 h-52 rounded-full bg-gray-100 shadow-inner"></div>

                    <img
                      src={item.img}
                      alt={item.name}
                      onClick={() => openPopup(index)}
                      className="absolute top-1/2 -translate-y-1/2 w-44 h-44 rounded-full object-cover cursor-pointer hover:scale-110 transition shadow-lg"
                    />
                  </div>

                  <h4 className="mt-8 text-lg font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                  <p className="mt-2 text-red-500 font-semibold text-lg">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>

            {/* POPUP */}
            {isOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
                <button
                  onClick={closePopup}
                  className="absolute top-6 right-6 text-white text-3xl"
                >
                  ✕
                </button>

                <button
                  onClick={prevImage}
                  className="absolute left-6 text-white text-4xl p-3 bg-white/10 rounded-full"
                >
                  ‹
                </button>

                <img
                  src={menuData[activeTab][currentIndex].img}
                  alt=""
                  className="w-[420px] h-[420px] rounded-full object-cover shadow-[0_0_80px_rgba(255,255,255,0.15)]"
                />

                <button
                  onClick={nextImage}
                  className="absolute right-6 text-white text-4xl p-3 bg-white/10 rounded-full"
                >
                  ›
                </button>
              </div>
            )}
          </section>

          {/* Meet Our Expert Chefs */}
          {/* <section className="bg-[#f6f3ed] py-16 px-6">
  <div className="max-w-6xl mx-auto border border-[#e3dfd6] rounded-2xl p-10 bg-[#f6f3ed]">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

   
      <div className="relative flex gap-6 justify-center">
        <img
          src="https://images.unsplash.com/photo-1528605248644-14dd04022da1"
          alt="Restaurant Staff"
          className="w-56 h-80 object-cover rounded-xl shadow-lg"
        />

        <img
          src="https://images.unsplash.com/photo-1528605105345-5344ea20e269"
          alt="Happy Customers"
          className="w-56 h-80 object-cover rounded-xl shadow-lg mt-10"
        />
      </div>

     
      <div>
        <div className="text-6xl text-gray-300 leading-none mb-4">“</div>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Donec at tellus in nulla posuere interdum sit amet eget libero.
          Morbi fermentum tincidunt ex, at aliquam enim elementum eget.
          Sed sed accumsan nibh. Nullam rhoncus magna ut tempor malesuada.
        </p>

        <div className="border-t border-gray-300 w-16 mb-4"></div>

        <h4 className="text-lg font-semibold text-gray-800">
          Lisa Damian
        </h4>
        <span className="text-sm text-gray-500">
          Customer
        </span>
      </div>

    </div>
  </div>
</section> */}

          {/* Testimonials */}
         <section className="bg-white py-12 md:py-16 px-4 md:px-6 overflow-hidden">
  {/* Heading */}
  <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-extrabold tracking-wide text-black mb-8 md:mb-10">
    Let's meet{" "}
    <span className="text-red-500">the expert.</span>
  </h2>

  <div className="max-w-6xl mx-auto border border-[#faeccc] rounded-2xl p-5 sm:p-8 md:p-10 bg-[#f6f3ed]">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

      {/* LEFT IMAGES */}
      <div className="relative flex justify-center gap-4 sm:gap-6">
        <img
          src={item.img1}
          alt=""
          className="w-36 sm:w-44 md:w-56 h-56 sm:h-64 md:h-80 object-cover rounded-xl shadow-lg transition-all duration-700"
        />
        <img
          src={item.img2}
          alt=""
          className="w-36 sm:w-44 md:w-56 h-56 sm:h-64 md:h-80 object-cover rounded-xl shadow-lg mt-6 sm:mt-8 md:mt-10 transition-all duration-700"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="text-center md:text-left">
        <div className="text-4xl sm:text-5xl md:text-6xl text-gray-300 leading-none mb-3 md:mb-4">
          “
        </div>

        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 transition-opacity duration-700">
          {item.text}
        </p>

        <div className="border-t border-gray-300 w-12 md:w-16 mx-auto md:mx-0 mb-4"></div>

        <h4 className="text-base sm:text-lg font-semibold text-gray-800">
          {item.name}
        </h4>
        <span className="text-sm text-gray-500">{item.role}</span>
      </div>

    </div>
  </div>
</section>


          {/* Latest Food News */}
          <section className="py-16 px-6 md:px-20 bg-gray-50">
  <h2 className="text-3xl font-bold text-center mb-10">
    Our Latest Foods News
  </h2>

  <div className="max-w-6xl mx-auto">
    <Swiper
      modules={[Autoplay]}   // ❌ Pagination removed
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      loop={true}
      spaceBetween={20}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {blogPosts.map((post, i) => (
        <SwiperSlide key={i}>
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md h-full">
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg">
                {post.title}
              </h4>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

        </div>
      </section>
    </>
  );
};

export default Home;
