
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { id: 1, title: "Requirements", img: "/puzzle1.png", description: "Understand goals. Communicate with stakeholders and analyze current systems to identify essential features and functionalities." },
  { id: 2, title: "Agreement", img: "/puzzle2.png", description: "Finalize project scope, budget, and timelines with clients. Ensure all parties agree on deliverables and expectations before development starts." },
  { id: 3, title: "UX / UI", img: "/puzzle3.png", description: "Design intuitive interfaces that are visually appealing. Focus on usability, accessibility, and smooth user flows across all screens." },
  { id: 4, title: "Development", img: "/puzzle4.png", description: "Build the application’s frontend and backend. Ensure code is clean, maintainable, and scalable while implementing all required features." },
  { id: 5, title: "Testing", img: "/puzzle5.png", description: "Perform rigorous testing including unit tests, integration tests, and user acceptance tests. Identify bugs and fix them to ensure quality." },
  { id: 6, title: "Client Approval", img: "/puzzle6.png", description: "Present the product to the client for review. Gather feedback and make necessary adjustments before final deployment." },
  { id: 7, title: "Deployment", img: "/puzzle7.png", description: "Launch the application on the production server. Set up hosting, databases, and monitor initial performance to ensure smooth operation." },
  { id: 8, title: "User Will Use", img: "/puzzle8.png", description: "Monitor how users interact with the product. Collect analytics and user feedback to improve experience and fix issues." },
  { id: 9, title: "Analogue Monitor", img: "/puzzle9.png", description: "Track and maintain the system performance. Provide regular updates and support to ensure long-term success and stability." },
];


const offsets = [
  { x: 40, y: 0 },   // row1 col1
  { x: 0, y: 35 },   // row1 col2
  { x: -40, y: 0 },  // row1 col3
  { x: 5, y: -40 },  // row2 col1
  { x: -35, y: -5 }, // row2 col2
  { x: -75, y: -40 },// row2 col3
  { x: 40, y: -80 }, // row3 col1
  { x: 0, y: -45 },  // row3 col2
  { x: -40, y: -80 },// row3 col3
];

// Define directions for each piece
const directions = [
  { x: 0, y: -300 },  // from top
  { x: -300, y: 550 },  // from left
  { x: 300, y: 0 },   // from right
  { x: 0, y: 300 },   // from bottom
  { x: -300, y: 0 },  // from left
  { x: 300, y: 0 },   // from right
  { x: 0, y: -300 },  // from top
  { x: 0, y: 300 },   // from bottom
  { x: 0, y: 0 },     // center
];

export default function PuzzleSteps() {
  const [stepIndex, setStepIndex] = useState(1);
  const containerRef = useRef(null);
  const lastScroll = useRef(0);

  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

  const onWheel = useCallback((e) => {
    const now = Date.now();
    if (now - lastScroll.current < 200) return;
    lastScroll.current = now;

    if (e.deltaY > 0) setStepIndex(i => clamp(i + 1, 1, steps.length));
    else if (e.deltaY < 0) setStepIndex(i => clamp(i - 1, 1, steps.length));
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    el.addEventListener("wheel", onWheel, { passive: true });
    return () => el.removeEventListener("wheel", onWheel);
  }, [onWheel]);

  return (
    <div
      ref={containerRef}
      className="h-screen w-full flex items-center justify-center bg-[#071637] text-white overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 max-w-6xl gap-6 items-start">

        {/* Left Side: Step Content */}
        <div className="relative max-h-[80vh] overflow-y-auto pr-4">
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
                <h2 className="text-3xl font-bold mb-2">
                  Step {steps[stepIndex - 1].id}: {steps[stepIndex - 1].title}
                </h2>
                <p className="text-neutral-300 text-lg">
                  {steps[stepIndex - 1].description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Side: Puzzle */}
        
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
  );
}
