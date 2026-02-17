import { useState, useEffect } from "react";
import {
  FaUserTie,
  FaNewspaper,
  FaStar,
  FaQuoteLeft,
  FaUser,
  FaUtensils,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

/* ================= DATA ================= */

const chefs = [
  {
    name: "John Smooth",
    role: "CEO, Co Founder",
    desc: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    img: "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg",
  },
  {
    name: "Rebeca Welson",
    role: "Head Chef",
    desc: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    img: "https://i.pinimg.com/736x/5e/81/6a/5e816a835df8f66fdbe3c97b34a4a33e.jpg",
  },
  {
    name: "Kharl Branyt",
    role: "Chef",
    desc: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    img: "https://i.pinimg.com/736x/b3/23/21/b323216169c58db70d5d91692865d1f4.jpg",
  },
  {
    name: "Luke Simon",
    role: "Chef",
    desc: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    img: "https://i.pinimg.com/736x/63/a7/40/63a7401d7e603a674acd4c546d2a16f2.jpg",
  },
];

const news = [
  {
    title: "Benefits of Health and Safety Measures",
    description: "How proper food handling keeps you safe and healthy.",
    date: "17 Dec",
    author: "Admin",
    category: "Chicken",
    thumb:
      "https://gramentheme.com/html/fresheat/assets/img/blog/blogThumb1_2.jpg",
    link: "/news/health-safety-measures",
  },
  {
    title: "Quick Cravings: Unraveling Fast Food Delights",
    description: "Discover the secret behind your favorite fast foods.",
    date: "25 Dec",
    author: "Admin",
    category: "Noodles",
    thumb:
      "https://gramentheme.com/html/fresheat/assets/img/blog/blogThumb1_1.jpg",
    link: "/news/fast-food-delights",
  },
  {
    title: "Fast Food Frenzy: A Taste of Convenience",
    description: "Why fast food continues to rule our busy lives.",
    date: "15 Dec",
    author: "Admin",
    category: "Noodles",
    thumb:
      "https://gramentheme.com/html/fresheat/assets/img/blog/blogThumb1_3.jpg",
    link: "/news/fast-food-frenzy",
  },
  {
    title: "Benefits of Health and Safety Measures",
    description: "How proper food handling keeps you safe and healthy.",
    date: "17 Dec",
    author: "Admin",
    category: "Chicken",
    thumb:
      "https://gramentheme.com/html/fresheat/assets/img/blog/blogThumb1_2.jpg",
    link: "/news/health-safety-measures",
  },
];

const testimonials = [
  {
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    author: "Richard McClintock",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    author: "Jane Doe",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "There are many variations of passages of Lorem Ipsum available.",
    author: "John Smith",
    img: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    author: "Emily Johnson",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

/* ================= COMPONENT ================= */

function About() {
  const [years, setYears] = useState(0);
  const [dishes, setDishes] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [customers, setCustomers] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setYears((p) => (p < 7 ? p + 1 : p));
      setDishes((p) => (p < 30 ? p + 1 : p));
      setReviews((p) => (p < 500 ? p + 10 : p));
      setCustomers((p) => (p < 10 ? p + 1 : p));
    }, 60);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <section className="bg-gray-200">

        {/* ===== About Hero Section ===== */}
        <section className="bg-[#f9f9ff] py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
Our achievement story stands as a powerful testament to teamwork and perseverance.
It reflects the dedication, hard work, and commitment of every individual involved.
Each challenge we faced made us stronger and more determined to succeed.
Together, we supported each other and never gave up on our goals.
This journey inspires us to keep growing and achieving even greater milestones.            </p>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">
              Read More →
            </button>
          </div>

          <div className="relative max-w-6xl mx-auto mt-16 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f"
              alt="Chefs cooking"
              className="w-full h-[480px] object-cover"
            />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur rounded-xl px-6 py-5 shadow-lg w-[90%] md:w-[80%]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <h3 className="text-2xl font-bold text-indigo-600">{years}+</h3>
                  <p className="text-sm text-gray-500">Years of Experience</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-indigo-600">{dishes}+</h3>
                  <p className="text-sm text-gray-500">Dishes in Our Menu</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-indigo-600">{reviews}+</h3>
                  <p className="text-sm text-gray-500">Customer Reviews</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-indigo-600">{customers}k+</h3>
                  <p className="text-sm text-gray-500">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Order Section (Pizza wala) ===== */}
        <section className="w-full flex justify-center bg-[#f9f9ff] py-10 px-4">
          <div className="w-full max-w-6xl rounded-[32px] border border-purple-200 bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50 p-8 grid md:grid-cols-2 items-center gap-8">
            <div>
              <h1 className="text-3xl font-bold mb-4">
                Order Now & Satisfy Your Cravings
              </h1>
              <p className="text-gray-600 mb-6">
                Let us bring the flavors you love straight to your door.
              </p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-xl">
                Read More →
              </button>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src="https://themewagon.github.io/restaurant/assets/img/pizza.png"
                alt="Pizza"
                className="w-64 md:w-[420px]"
              />
            </div>
          </div>
        </section>

        {/* ===== Chef Section ===== */}
        <section className="py-20 bg-gray-50">
          <div className="text-center mb-16">
            <p className="text-red-500 italic font-semibold">Chef</p>
            <h2 className="text-4xl font-bold">Our Master Chef</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 max-w-7xl mx-auto">
            {chefs.map((chef, index) => (
              <div key={index} className="group">
                <div className="overflow-hidden">
                  <img
                    src={chef.img}
                    alt={chef.name}
                    className="w-full h-[350px] object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="bg-white p-6 shadow-md">
                  <h3 className="text-xl font-semibold">{chef.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{chef.role}</p>
                  <p className="text-gray-600 text-sm">{chef.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Testimonials ===== */}
 <section
  className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
  style={{
    backgroundImage:
      "url('https://themewagon.github.io/kusina/images/bg_5.jpg')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-10 text-center max-w-2xl px-6 w-full">

    <p className="italic text-lg text-gray-200">Testimony</p>
    <h2 className="text-4xl md:text-5xl font-bold mb-10">
      Happy Customer
    </h2>

    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      loop={true}
    >
      {testimonials.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center">

            {/* Customer Image */}
            <div className="relative mb-6">
              <img
                src={item.img}
                alt={item.author}
                className="w-24 h-24 rounded-full border-4 border-white object-cover"
              />

              <div className="absolute -bottom-2 -right-2 bg-red-500 p-2 rounded-full">
                <FaQuoteLeft className="text-white text-xs" />
              </div>
            </div>

            {/* Text */}
            <p className="text-gray-200 mb-6 leading-relaxed px-4">
              {item.text}
            </p>

            {/* Author */}
            <h3 className="text-xl font-semibold">
              {item.author}
            </h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

  </div>
</section>
        {/* ===== News Section ===== */}
        <section className="py-16 px-6 md:px-20 bg-[#f9f9ff]">
          <div className="flex justify-center gap-2 text-2xl font-semibold text-red-600 mb-6">
            <FaNewspaper />
            <h3>Our Latest Food News</h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {news.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={item.thumb}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex text-sm text-gray-500 gap-4 mb-3">
                    <span><FaUser /> {item.author}</span>
                    <span><FaUtensils /> {item.category}</span>
                  </div>
                  <Link to={item.link} className="text-red-600 font-semibold">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

      </section>
    </>
  );
}

export default About;
