"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Controller } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

export default function ClientCarousel() {
  // ==================== Company Data ====================
  const companies = [
    { logo: "/flythlogo.png", phone: "/flythimg.png" },
    { logo: "/aarishlogo.png", phone: "/aarishimg.png" },
    { logo: "/poshanalogo.png", phone: "/poshanaimg.png" },
    { logo: "/giftlogo.png", phone: "/giftimg.png" },
    { logo: "/healrlogo.png", phone: "/aarishimg.png" },
  ];

  // ==================== Puzzle Steps ====================
 const steps = [
  { 
    id: 1, 
    title: "Requirements", 
    img: "/puzzle1.png", 
    description: "Understand goals. Communicate with stakeholders and analyze current systems to identify essential features and functionalities. Gather both functional and non-functional requirements to form a complete picture of the project. Prioritize requirements and create a clear specification document to avoid confusion later." 
  },
  { 
    id: 2, 
    title: "Agreement", 
    img: "/puzzle2.png", 
    description: "Finalize project scope, budget, and timelines with clients. Ensure all parties agree on deliverables and expectations before development starts. Draft a formal contract or agreement for clarity and transparency. Confirm milestones, payment terms, and communication channels to prevent misunderstandings." 
  },
  { 
    id: 3, 
    title: "UX / UI", 
    img: "/puzzle3.png", 
    description: "Design intuitive interfaces that are visually appealing. Focus on usability, accessibility, and smooth user flows across all screens. Create wireframes, mockups, and prototypes to test ideas early. Conduct user testing sessions to gather feedback and refine designs before development." 
  },
  { 
    id: 4, 
    title: "Development", 
    img: "/puzzle4.png", 
    description: "Build the application’s frontend and backend. Ensure code is clean, maintainable, and scalable while implementing all required features. Use best practices, version control, and modular architecture. Collaborate with the team regularly to ensure consistency and integration of components." 
  },
  { 
    id: 5, 
    title: "Testing", 
    img: "/puzzle5.png", 
    description: "Perform rigorous testing including unit tests, integration tests, and user acceptance tests. Identify bugs and fix them to ensure quality. Maintain a bug tracker and regression test frequently. Test performance, security, and cross-device compatibility to ensure a robust product." 
  },
  { 
    id: 6, 
    title: "Client Approval", 
    img: "/puzzle6.png", 
    description: "Present the product to the client for review. Gather feedback and make necessary adjustments before final deployment. Conduct demonstrations and clarify any remaining questions. Document approval and finalize project sign-off to move forward confidently." 
  },
  { 
    id: 7, 
    title: "Deployment", 
    img: "/puzzle7.png", 
    description: "Launch the application on the production server. Set up hosting, databases, and monitor initial performance to ensure smooth operation. Ensure proper security configurations and backups are in place. Prepare deployment notes for future reference and maintenance." 
  },
  { 
    id: 8, 
    title: "User Will Use", 
    img: "/puzzle8.png", 
    description: "Monitor how users interact with the product. Collect analytics and user feedback to improve experience and fix issues. Track performance, errors, and user behavior to inform future updates. Engage with users to understand pain points and gather suggestions." 
  },
  { 
    id: 9, 
    title: "Analogue Monitor", 
    img: "/puzzle9.png", 
    description: "Track and maintain the system performance. Provide regular updates and support to ensure long-term success and stability. Perform maintenance, update dependencies, and plan for feature enhancements. Ensure downtime is minimized and system reliability is maximized." 
  },
];


  // ==================== Puzzle Offsets ====================
  const offsets = [
    { x: 40, y: 0 },    // row1 col1
    { x: 0, y: 35 },    // row1 col2
    { x: -40, y: 0 },   // row1 col3
    { x: 5, y: -40 },   // row2 col1
    { x: -35, y: -5 },  // row2 col2
    { x: -75, y: -40 }, // row2 col3
    { x: 40, y: -80 },  // row3 col1
    { x: 0, y: -45 },   // row3 col2
    { x: -40, y: -80 }, // row3 col3
  ];

  const directions = [
    { x: 0, y: -300 },   // from top
    { x: -300, y: 550 }, // from left
    { x: 300, y: 0 },    // from right
    { x: 0, y: 300 },    // from bottom
    { x: -300, y: 0 },   // from left
    { x: 300, y: 0 },    // from right
    { x: 0, y: -300 },   // from top
    { x: 0, y: 300 },    // from bottom
    { x: 0, y: 0 },      // center
  ];

  // ==================== Swiper Refs & State ====================
  const phoneSwiperRef = useRef(null);
  const logoSwiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onPhoneSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex % companies.length);
  };

  const onLogoClick = (index) => {
    if (phoneSwiperRef.current) {
      phoneSwiperRef.current.slideToLoop(index);
    }
  };

  // ==================== Puzzle Scroll ====================
  const [stepIndex, setStepIndex] = useState(1);
  const containerRef = useRef(null);
  const lastScroll = useRef(0);

  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

  const onWheel = useCallback((e) => {
  const now = Date.now();
  if (now - lastScroll.current < 200) return; 
  lastScroll.current = now;

  // Prevent default page scroll inside the puzzle container
  if (
    (e.deltaY > 0 && stepIndex < steps.length) ||
    (e.deltaY < 0 && stepIndex > 1)
  ) {
    e.preventDefault();
    if (e.deltaY > 0) {
      setStepIndex(i => clamp(i + 1, 1, steps.length));
    } else if (e.deltaY < 0) {
      setStepIndex(i => clamp(i - 1, 1, steps.length));
    }
  }
}, [stepIndex]);

  useEffect(() => {
  const el = containerRef.current;
  el.addEventListener("wheel", onWheel, { passive: false }); // passive: false important!
  return () => el.removeEventListener("wheel", onWheel);
}, [onWheel]);

  // ==================== Render ====================
  return (
    <div className="w-full">

      {/* Header */}
      <h2 className="text-3xl sm:text-4xl md:text-6xl text-center text-[#7B7E86] mb-10">
        <span className="text-blue-400">O</span>
        <span className="text-gray-300">ur Featured Projects</span>
      </h2>
      <p className="text-center text-xs md:text-4xl font-normal mb-8 !text-[#071637]">
        Our Clients
      </p>

      {/* ==================== Logo Carousel ==================== */}
      <div className="relative max-w-7xl mx-auto  space-y-10">
      <Swiper
  onSwiper={(swiper) => {
    logoSwiperRef.current = swiper;
    if (phoneSwiperRef.current) swiper.controller.control = phoneSwiperRef.current;
  }}
  loop={true}
  autoplay={{ delay: 6000, disableOnInteraction: true }} // delay increased to 5s
  speed={1500} // slower transition
  slidesPerView={5}
  centeredSlides={true}
  modules={[Autoplay, Controller]}
  breakpoints={{
    320: { slidesPerView: 1.5, spaceBetween: 30 },
    640: { slidesPerView: 3, spaceBetween: 30 },
    1024: { slidesPerView: 5, spaceBetween: 30 },
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
            ? "scale-110 opacity-100"
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


        {/* ==================== Phone Carousel ==================== */}



       <div className="w-full flex justify-center  ml-10 px-6">
             <Swiper
               className="client-swiper w-full"
               loop={true}
               autoplay={{ delay: 2000, disableOnInteraction: false }}
               speed={800}
               slidesPerView={5}
               spaceBetween={20} // reduced to fit all 5 evenly
               centeredSlides={true}
               modules={[Autoplay, Navigation, Controller]}
               breakpoints={{
                 320: { slidesPerView: 1.5, spaceBetween: 10 },
                 640: { slidesPerView: 3, spaceBetween: 10 },
                 1024: { slidesPerView: 5, spaceBetween: 10 },
               }}
               onSwiper={(swiper) => {
                 phoneSwiperRef.current = swiper;
                 if (logoSwiperRef.current) swiper.controller.control = logoSwiperRef.current;
               }}
               onSlideChange={(swiper) => {
                 swiper.slides.forEach((slide) => {
                   slide.classList.remove("prev-prev", "next-next");
                 });
                 const prevPrev = swiper.slides[swiper.activeIndex - 2];
                 const nextNext = swiper.slides[swiper.activeIndex + 2];
                 if (prevPrev) prevPrev.classList.add("prev-prev");
                 if (nextNext) nextNext.classList.add("next-next");
               }}
             >
               {companies.concat(companies).map((c, i) => (
                 <SwiperSlide key={`phone-${i}`}>
                   <div
                     className={`phone-wrapper flex justify-center ${
                       c.phone.includes("/healrimg.png") ? "healr-slide" : ""
                     }`}
                   >
                     <Image
                       src={c.phone}
                       alt={`Phone ${i}`}
                       width={260}
                       height={520}
                       className="object-contain"
                     />
                   </div>
                 </SwiperSlide>
               ))}
             </Swiper>
           </div>
       
      </div>





      {/* ==================== Process Section ==================== */}
      <h2 className="text-3xl mt-20 sm:text-4xl  mb-10 md:text-6xl text-center text-[#7B7E86]">
        <span className="text-blue-400">O</span>
        <span className="text-gray-300">ur Process</span>
      </h2>





      {/* ==================== Puzzle Steps ==================== */}
     <div
  ref={containerRef}
  className="puzzle-container h-screen w-full flex items-center justify-center bg-[#071637] text-white"
>
        <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 max-w-6xl gap-6 items-start">




          {/* Left: Step Content */}
         <div className="relative max-h-[80vh] overflow-y-auto pr-4 scrollbar-hide">

            <h3 className="text-white font-bold text-2xl mb-10 md:text-3xl font-semibold leading-snug ">
              Process we follow for <br /> successful project
            </h3>
            <AnimatePresence mode="wait">
              {stepIndex > 0 && (
                <motion.div
                  key={steps[stepIndex - 1].id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <h4 className="text-xl font-bold mb-2">
                    Step {steps[stepIndex - 1].id}: {steps[stepIndex - 1].title}
                  </h4>
                  <p className="text-neutral-300 text-lg">
                    {steps[stepIndex - 1].description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>



          {/* Right: Puzzle */}
          <div className="grid grid-cols-3 grid-rows-3 gap-2 w-full max-w-md relative">
            {steps.map((step, idx) => (
              <AnimatePresence key={step.id}>
                {idx < stepIndex && (
                  <motion.img
                    src={step.img}
                    alt={step.title}
                    initial={{
                      opacity: 0,
                      x: directions[idx].x,
                      y: directions[idx].y,
                      rotateY: 180,
                      rotateX: 30,
                      scale: 0.5
                    }}
                    animate={{
                      opacity: 1,
                      x: offsets[idx].x,
                      y: offsets[idx].y,
                      rotateY: 0,
                      rotateX: 0,
                      scale: 1
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 14,
                      delay: idx * 0.1
                    }}
                    exit={{ opacity: 0 }}
                    whileHover={{
                      scale: 1.1,
                      rotateZ: 10,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    className="w-full h-full object-contain"
                  />
                )}
              </AnimatePresence>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
