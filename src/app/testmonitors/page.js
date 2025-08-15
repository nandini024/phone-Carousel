"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function Appointment() {
  const testimonials = [
    {
      text: "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
      name: "Jennifer Anderson",
      image: "/davi.png",
      stars: 5,
    },
    {
      text: "Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!",
      name: "Robert Johnson",
      image: "/robot.png",
      stars: 5,
    },
    {
      text: "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
      name: "Emily Davis",
      image: "/jenny.png",
      stars: 5,
    },
    {
      text: "Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!",
      name: "Robert Johnson",
      image: "/robot.png",
      stars: 5,
    },
    {
      text: "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
      name: "Emily Davis",
      image: "/jenny.png",
      stars: 5,
    },
    {
      text: "Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!",
      name: "Robert Johnson",
      image: "/robot.png",
      stars: 5,
    },
    {
      text: "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
      name: "Emily Davis",
      image: "/jenny.png",
      stars: 5,
    },
  ];

  return (
    <section className=" py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-sm ">Our Testimonials</h2>
        <p className="text-gray-500 mt-2 ">
          Our satisfied clients share their success stories and experiences with us.
        </p>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-10"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col h-full">
                {/* Quote Section */}
               <div className=" bg-blue-100 p-6 flex-grow  p-6 flex-grow">

                  <span className="text-5xl text-black-900">“</span>
                  <p className="text-gray-700 mt-2">{t.text}</p>
                </div>

                {/* User Info */}
                <div className="flex items-center justify-between p-4 ">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <span className="text-gray-800 font-medium">{t.name}</span>
                  </div>
                  <div className="flex text-yellow-400">
                    {Array(t.stars)
                      .fill()
                      .map((_, idx) => (
                        <span key={idx}>★</span>
                      ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
