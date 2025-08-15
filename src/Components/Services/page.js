"use client";
import React, {useState, useEffect} from "react";
import Image from 'next/image';

const ServicePage = ()=>{
    const [animate, setAnimate] = useState(false);
    const containers = [
    { id: 1, title: 'App Development', content: 'This is the full content of container 1' , bg : "violet-800", text : "white", src: "/serviceImg1.png"},
    { id: 2, title: 'Website Development', content: 'This is the full content of container 2', bg : "amber-50", text : "black", src: "/serviceImg2.png"},
    { id: 3, title: 'UI/UX Design', content: 'This is the full content of container 3 This is the full content of container 3', bg : "blue-200", text : "black", src: "/serviceImg3.png"},
    { id: 4, title: 'Digital Marketing', content: 'This is the full content of container 4', bg: "salmon-500", text : "white", src: "/serviceImg4.png"},
    { id: 5, title: 'GPS Tracking', content: 'This is the full content of container 5', bg: "blue-900", text : "white", src: "/serviceImg5.png"},
  ];
  const bgColors = {
  "violet-800": "bg-violet-900",
  "amber-50": "bg-amber-50", // closest color, since chestnut isn't Tailwind default
  "blue-200": "bg-blue-300",
  "salmon-500": "bg-orange-400", // salmon isn't default, pick a close one
  "blue-900": "bg-blue-900"
};
    const textColors = {
    white: "text-white",
    black: "text-black"
    };
    const imagePaths = [
    '/serviceimg1.jpg',
    '/serviceimg2.jpg',
    '/serviceimg3.jpg',
    '/serviceimg4.jpg',
    '/serviceimg5.jpg',
    ];
    useEffect(() => {
        const timer = setTimeout(() => {    
            setAnimate(true);
        }, 100); // Delay for 100ms before starting the animation
        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, []); 
    return (
        <>
            <div className="h-screen overflow-hidden w-full ">
                <div className="h-1/4  flex flex-col justify-center items-center overflow-hidden">
                    <p className={`text-5xl font-bold text-blue-700 mb-2 transform transition-transform duration-1000 ${
                        animate ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
                            Services
                    </p>
                    <p
                        className={`text-5xl font-bold text-black-600 transform transition-transform duration-1000 delay-300 ${
                        animate ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
                        We Provide
                    </p>
                </div>
                <div className=" h-3/4 bg-blue-900 ">
                            <div className="w-full    ">
                                {containers.map((container, index) => (
                                <div
                                    key={container.id}
                                    className={`flex overflow-hidden transition-all duration-300     ${
                                    index < 4
                                        ? 'h-16 hover:h-38 cursor-pointer'
                                        : 'h-38'
                                    }`}>                                        
                                        <div className={` p-2 w-2/3 ${textColors[container.text]} ${bgColors[container.bg]}`}>
                                            <div>
                                                <div className="p-3 font-bold text-xl  ">{container.title}</div>
                                    
                                                <div className="px-3 pb-3 ">
                                                {container.content}
                                                </div>
                                            </div>                                         
                                        </div>                
                                    <div className={`w-1/3 overflow-hidden ${textColors[container.text]} ${bgColors[container.bg]}  p-4`}>
                                        <div className="relative w-full h-30 transition-all duration-300 group-hover:h-69  ">
                                            <Image
                                            src={container.src}
                                            alt="Example"
                                            fill
                                            className="object-contain   "
                                            />
                                        </div>
</div>
                                </div>
                                ))}
                            </div>
                </div>
            </div>
        </>
    )
}
export default ServicePage


