// "use client";

// import { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Controller } from "swiper/modules";
// import Image from "next/image";

// import "swiper/css";
// import "swiper/css/navigation";

// export default function ClientCarousel() {
//   const companies = [
//     { logo: "/flythlogo.png", phone: "/flythimg.png" },
//     { logo: "/aarishlogo.png", phone: "/aarishimg.png" },
//     { logo: "/poshanalogo.png", phone: "/poshanaimg.png" },
//     { logo: "/giftlogo.png", phone: "/giftimg.png" },
//     { logo: "/healrlogo.png", phone: "/aarishimg.png" },
//   ];

//   const phoneSwiperRef = useRef(null);
//   const logoSwiperRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const onPhoneSlideChange = (swiper) => {
//     setActiveIndex(swiper.realIndex % companies.length);

//     // Remove old neighbor classes
//     swiper.slides.forEach((slide) => {
//       slide.classList.remove(
//         "prev-prev",
//         "next-next",
//         "duplicate-prev-prev",
//         "duplicate-next-next"
//       );
//     });

//     // Normal neighbors
//     const prevPrev = swiper.slides[swiper.activeIndex - 2];
//     const nextNext = swiper.slides[swiper.activeIndex + 2];

//     if (prevPrev) prevPrev.classList.add("prev-prev");
//     if (nextNext) nextNext.classList.add("next-next");

//     // Duplicate slide neighbors (loop edges)
//     const totalSlides = swiper.slides.length;
//     const prevPrevDup = swiper.slides[(swiper.activeIndex - 2 + totalSlides) % totalSlides];
//     const nextNextDup = swiper.slides[(swiper.activeIndex + 2) % totalSlides];

//     if (prevPrevDup) prevPrevDup.classList.add("duplicate-prev-prev");
//     if (nextNextDup) nextNextDup.classList.add("duplicate-next-next");
//   };

//   const onLogoClick = (index) => {
//     if (phoneSwiperRef.current) {
//       phoneSwiperRef.current.slideToLoop(index);
//     }
//   };

//   return (
//     <div className="w-full">
//       <h2 className="text-3xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-center text-[#7B7E86] mb-10">
//   <span className="text-blue-400">O</span>
//   <span className="text-gray-300">ur Featured Projects</span>
// </h2>

// <p className="text-xs xs:text-xs sm:text-sm md:text-lg lg:text-xl text-center font-normal  mb-8 text-[#071637]">
//   Our Clients
// </p>

//       <div className="relative max-w-7xl mx-auto space-y-10">
//         {/* Logo Carousel */}
//         <Swiper
//           onSwiper={(swiper) => {
//             logoSwiperRef.current = swiper;
//             if (phoneSwiperRef.current) swiper.controller.control = phoneSwiperRef.current;
//           }}
//           loop={true}
//           autoplay={{ delay: 6000, disableOnInteraction: true }}
//           speed={1500}
//           slidesPerView={5}
//           centeredSlides={true}
//           modules={[Autoplay, Controller]}
//           breakpoints={{
//             320: { slidesPerView: 1.5, spaceBetween: 20 },
//             640: { slidesPerView: 3, spaceBetween: 20 },
//             1024: { slidesPerView: 5, spaceBetween: 20 },
//           }}
//         >
//           {companies.concat(companies).map((c, i) => (
//             <SwiperSlide key={`logo-${i}`} onClick={() => onLogoClick(i % companies.length)}>
//               <div
//                 className={`flex justify-center transition-transform duration-300 ${
//                   activeIndex === i % companies.length
//                     ? "scale-110 opacity-100"
//                     : "opacity-50"
//                 }`}
//               >
//                 <Image
//                   src={c.logo}
//                   alt={`Logo ${i}`}
//                   width={120}
//                   height={50}
//                   className="object-contain"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Phone Carousel */}

//         {/* Phone Carousel */}
// <div className="w-full flex justify-center px-6">
//   <Swiper
//     className="client-swiper max-w-7xl "
//     loop={true}
//     autoplay={{ delay: 2000, disableOnInteraction: false }}
//     speed={800}
//     slidesPerView={5}      // keep 5 for desktop
//     spaceBetween={10}      // <-- reduced from 20 to 10
//     centeredSlides={true}
//     slidesOffsetBefore={0}
//     slidesOffsetAfter={0}
//     modules={[Autoplay, Navigation, Controller]}
//     breakpoints={{
//       320: { slidesPerView: 1.5, spaceBetween: 5 },   // reduced gap for small screens
//       640: { slidesPerView: 3, spaceBetween: 8 },     // reduced gap for medium screens
//       1024: { slidesPerView: 5, spaceBetween: 5 },   // reduced gap for large screens
//     }}
//     onSwiper={(swiper) => {
//       phoneSwiperRef.current = swiper;
//       if (logoSwiperRef.current) swiper.controller.control = logoSwiperRef.current;
//     }}
//     onSlideChange={onPhoneSlideChange}
//   >
//     {companies.concat(companies).map((c, i) => (
//       <SwiperSlide key={`phone-${i}`}>
//         <div className="phone-wrapper flex justify-center">
//           <Image
//             src={c.phone}
//             alt={`Phone ${i}`}
//             width={260}
//             height={520}
//             className="object-contain"
//           />
//         </div>
//       </SwiperSlide>
//     ))}
//   </Swiper>
// </div>

//       </div>

//       {/* Styles */}
//       <style jsx global>{`
//         /* Default slide */
//         .client-swiper .phone-wrapper {
//           transform: scale(0.9) translateY(10px);
//           transition: transform 0.4s ease, padding-top 0.4s ease;
//         }

//         /* Active center */
//         .client-swiper .swiper-slide-active .phone-wrapper {
//           transform: scale(1.5) translateX(15px);
//           padding-top: 4.2rem;
//         }

//         /* Immediate neighbors (left/right) */
//         .client-swiper .swiper-slide-prev .phone-wrapper,
//         .client-swiper .swiper-slide-next .phone-wrapper,
//         .client-swiper .swiper-slide-duplicate-prev .phone-wrapper,
//         .client-swiper .swiper-slide-duplicate-next .phone-wrapper {
//           transform: scale(1.2) translateX(10px);
//           padding-top: 3rem;
//         }

//         /* Two-away neighbors */
//         .client-swiper .prev-prev .phone-wrapper,
//         .client-swiper .next-next .phone-wrapper,
//         .client-swiper .duplicate-prev-prev .phone-wrapper,
//         .client-swiper .duplicate-next-next .phone-wrapper {
//           transform: scale(1.2) translateY(15px);
//           padding-top: 3rem;
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Controller } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

export default function ClientCarousel() {
  const companies = [
    { logo: "/flythlogo.png", phone: "/flythimg.png" },
    { logo: "/aarishlogo.png", phone: "/aarishimg.png" },
    { logo: "/poshanalogo.png", phone: "/poshanaimg.png" },
    { logo: "/giftlogo.png", phone: "/giftimg.png" },
    { logo: "/healrlogo.png", phone: "/aarishimg.png" },
  ];

  const phoneSwiperRef = useRef(null);
  const logoSwiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onPhoneSlideChange = (swiper) => {
    const totalSlides = companies.length;

    // Get the real active index (0 to companies.length - 1)
    const realIndex = swiper.realIndex % totalSlides;
    setActiveIndex(realIndex);

    // Clear all custom classes first
    swiper.slides.forEach((slide) => {
      slide.classList.remove(
        "prev-prev",
        "next-next",
        "prev",
        "next",
        "duplicate-prev-prev",
        "duplicate-next-next"
      );
    });

    const active = swiper.slides[swiper.activeIndex];
    const prev = swiper.slides[swiper.activeIndex - 1];
    const next = swiper.slides[swiper.activeIndex + 1];
    const prevPrev = swiper.slides[swiper.activeIndex - 2];
    const nextNext = swiper.slides[swiper.activeIndex + 2];

    const total = swiper.slides.length;

    // Immediate neighbors
    if (prev) prev.classList.add("prev");
    if (next) next.classList.add("next");

    // Two-away neighbors
    if (prevPrev) prevPrev.classList.add("prev-prev");
    if (nextNext) nextNext.classList.add("next-next");

    // Handle duplicates (looped slides)
    const prevDup = swiper.slides[(swiper.activeIndex - 1 + total) % total];
    const nextDup = swiper.slides[(swiper.activeIndex + 1) % total];
    const prevPrevDup = swiper.slides[(swiper.activeIndex - 2 + total) % total];
    const nextNextDup = swiper.slides[(swiper.activeIndex + 2) % total];

    if (prevDup) prevDup.classList.add("duplicate-prev");
    if (nextDup) nextDup.classList.add("duplicate-next");
    if (prevPrevDup) prevPrevDup.classList.add("duplicate-prev-prev");
    if (nextNextDup) nextNextDup.classList.add("duplicate-next-next");
  };

  const onLogoClick = (index) => {
    if (phoneSwiperRef.current) {
      phoneSwiperRef.current.slideToLoop(index);
    }
  };

  return (
    <div className="w-full pl-10 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16">
      {/* Heading */}
      <h2 className="text-2xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl 3xl:text-7xl text-center text-[#7B7E86] mb-6 sm:mb-8 md:mb-10">
        <span className="text-blue-400">O</span>
        <span className="text-gray-300">ur Featured Projects</span>
      </h2>

      <p className="text-xs xs:text-xs sm:text-sm md:text-lg lg:text-xl 3xl:text-2xl text-center font-normal mb-6 sm:mb-8 md:mb-10 text-[#071637]">
        Our Clients
      </p>


      <div className="relative max-w-7xl mx-auto space-y-10">
        {/* Logo Carousel */}
        <Swiper
          onSwiper={(swiper) => {
            logoSwiperRef.current = swiper;
            if (phoneSwiperRef.current)
              swiper.controller.control = phoneSwiperRef.current;
          }}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          speed={800}
          slidesPerView={5}
          centeredSlides={true}
          modules={[Autoplay, Controller]}
          breakpoints={{
            360: { slidesPerView: 1, spaceBetween: 10 }, // xs mobile
            480: { slidesPerView: 2, spaceBetween: 12 }, // sm small phones
            640: { slidesPerView: 3, spaceBetween: 14 }, // md tablets
            768: { slidesPerView: 4, spaceBetween: 16 }, // lg
            1024: { slidesPerView: 5, spaceBetween: 20 }, // xl desktop
            1280: { slidesPerView: 5, spaceBetween: 24 }, // 2xl
            1536: { slidesPerView: 5, spaceBetween: 28 }, // 3xl
          }}
        >
          {companies.concat(companies).map((c, i) => (
            <SwiperSlide
              key={`logo-${i}`}
              onClick={() => onLogoClick(i % companies.length)}
            >
              <div
                className={`flex justify-center transition-transform duration-300 ${
                  activeIndex === i % companies.length
                    ? "scale-105 sm:scale-110 opacity-100"
                    : "opacity-50"
                }`}
              >
                <Image
                  src={c.logo}
                  alt={`Logo ${i}`}
                  width={120}
                  height={50}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Phone Carousel */}
        <div className="w-full flex justify-center px-2 sm:px-4 md:px-6">
          <div className="pl-20 sm:pl-4 md:w-full max-w-7xl">
            <Swiper
              className="client-swiper max-w-7xl"
              loop={true}
              centeredSlides={true}
              spaceBetween={0}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              speed={800}
              modules={[Autoplay, Navigation, Controller]}
              breakpoints={{
                360: { slidesPerView: 1, spaceBetween: 0 }, // mobile XS
                480: { slidesPerView: 1, spaceBetween: 0 }, // mobile SM
                640: { slidesPerView: 2, spaceBetween: 8 }, // tablets
                768: { slidesPerView: 4, spaceBetween: 10 }, // LG
                1024: { slidesPerView: 5, spaceBetween: 12 }, // XL
              }}
              onSwiper={(swiper) => {
                phoneSwiperRef.current = swiper;
                if (logoSwiperRef.current)
                  swiper.controller.control = logoSwiperRef.current;
              }}
              onSlideChange={onPhoneSlideChange}
            >
              {companies.concat(companies).map((c, i) => (
                <SwiperSlide key={`phone-${i}`}>
                  <div className="phone-wrapper flex justify-center">
                    <Image
                      src={c.phone}
                      alt={`Phone ${i}`}
                      width={260}
                      height={520}
                      className="object-contain xs:w-48 xs:h-96 sm:w-52 sm:h-[420px] md:w-60 md:h-[480px] lg:w-64 lg:h-[520px]"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        .client-swiper .swiper-slide-active .phone-wrapper {
          transform: scale(1.05);
        }

        .client-swiper .phone-wrapper {
          transform: scale(0.7) translateY(10px); /* smaller on mobile by default */
          transition: transform 0.4s ease, padding-top 0.4s ease;
        }

        /* Active center remains same transform relative to scaled container */
        .client-swiper .swiper-slide-active .phone-wrapper {
          transform: scale(1.2) translateY(0);
          // padding-top: 3rem;
          height: 520px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Immediate neighbors */
        .client-swiper .swiper-slide-prev .phone-wrapper,
        .client-swiper .swiper-slide-next .phone-wrapper,
        .client-swiper .swiper-slide-duplicate-prev .phone-wrapper,
        .client-swiper .swiper-slide-duplicate-next .phone-wrapper {
          transform: scale(1.05) translateY(0);
        }

        /* Two-away neighbors */
        .client-swiper .prev-prev .phone-wrapper,
        .client-swiper .next-next .phone-wrapper,
        .client-swiper .duplicate-prev-prev .phone-wrapper,
        .client-swiper .duplicate-next-next .phone-wrapper {
          transform: scale(1) translateY(10px);
        }

        @media (min-width: 768px) {
          .client-swiper .phone-wrapper {
            transform: scale(0.9);
          }
        }
        @media (min-width: 1024px) {
          .client-swiper .phone-wrapper {
            transform: scale(1);
          }
        }
      `}</style>
     
    </div>
  );
}
