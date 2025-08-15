'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '../Navbar';
import Footer from '../../../Components/Footer';

export default function ProductTesting() {
  const router = useRouter();
  const cards = [
    {
      title: "Mahaboob",
      description: "E-commerce App and Static Website",
      image: "/ProductImg14.png",
      bgColor:"bg-[#E67E20]",
      link: "/mahaboob",
      objectfit : "",
    },
    {
      title: "Allonzy",
      description: "E-commerce App and Static Website",
      image: "/ProductImg13.png",
      bgColor: "bg-[#44689C]",
      link: "/allonzy",
      objectfit : "",
    },
    {
      title: "Cake Factory",
      description: "E-commerce App and Static Website",
      image: "/ProductImg12.png",
      bgColor: "bg-[#E6C1D3]",
      link: "/cakefactory",
      objectfit : "",
    },
    {
      title: "Flythru",
      description: "E-commerce App and Static Website",
      image: "/ProductImg11.png",
      bgColor:"bg-[#164E8E]",
      link: "/mahaboob",
      objectfit : "",
    },
    {
      title: "Care Credle",
      description: "E-commerce App and Static Website",
      image: "/ProductImg10.png",
      bgColor: "bg-[#6169FF]  ",
      link: "/allonzy",
      objectfit : "object-contain",
    },
    {
      title: "My Flat info",
      description: "E-commerce App and Static Website",
      image: "/ProductImg9.png",
      bgColor: "bg-[#283E71]",
      link: "/cakefactory",
      objectfit : "object-contain",
    },
    {
      title: "Yaarishhh",
      description: "E-commerce App and Static Website",
      image: "/ProductImg8.png",
      bgColor:"bg-[#2A9D8F]",
      link: "/mahaboob",
      objectfit : "object-contain",
    },
    {
      title: "Giftyu",
      description: "E-commerce App and Static Website",
      image: "/ProductImg7.png",
      bgColor: "bg-[#FF6757]",
      link: "/allonzy",
      objectfit : "object-contain",
    },


    {
      title: "Buykeyz",
      description: "E-commerce App and Static Website",
      image: "/ProductImg6.png",
      bgColor: "bg-[#3AA9FF]",
      link: "/cakefactory",
      objectfit : "object-contain",
    },
    {
      title: "Cinepass",
      description: "E-commerce App and Static Website",
      image: "/ProductImg5.png",
      bgColor:"bg-[#FFB300]",
      link: "/mahaboob",
      objectfit : "",
    },
    {
      title: "TGNPDCL",
      description: "E-commerce App and Static Website",
      image: "/ProductImg4.png",
      bgColor: "bg-[#2023BA]",
      link: "/allonzy",
      objectfit : "object-contain",
    },
    {
      title: "Poshana",
      description: "E-commerce App and Static Website",
      image: "/ProductImg3.png",
      bgColor: "bg-[#007A8F]",
      link: "/cakefactory",
      objectfit : "object-contain",
    },
    {
      title: "Healr",
      description: "E-commerce App and Static Website",
      image: "/ProductImg2.png",
      bgColor:"bg-[#2EDED3]",
      link: "/mahaboob",
      objectfit : "object-contain",
    },
    {
      title: "Naukari",
      description: "E-commerce App and Static Website",
      image: "/ProductImg1.png",
      bgColor: "bg-[#E1DBFF]",
      link: "/allonzy",
      objectfit : "",
    },
    {
      title: "Intellect Ignite",
      description: "E-commerce App and Static Website",
      image: "/ProductImg18.png",
      bgColor: "bg-[#114465]",
      link: "/cakefactory",
      objectfit : "",
    },
    {
      title: "Gvathi Party",
      description: "E-commerce App and Static Website",
      image: "/ProductImg17.png",
      bgColor:"bg-[#E31E25]",
      link: "/mahaboob",
      objectfit : "object-contain",
    },
    {
      title: "Zipik",
      description: "E-commerce App and Static Website",
      image: "/ProductImg16.png",
      bgColor: "bg-[#788F55]",
      link: "/allonzy",
      objectfit : "object-contain",
    },
    {
      title: "JSE",
      description: "E-commerce App and Static Website",
      image: "/ProductImg15.png",
      bgColor: "bg-[#E2B35B]",
      link: "/cakefactory",
      objectfit : "",
    }
 ];

  const handleClick = (link) => {
    router.push(link);
  };

  return (

    <div className='w-full h-full bg-white'>

        <div className="h-auto " >
                    <Navbar />
                    <div className=" bg-white flex h-full justify-center relative ">
                        <Image src="/AbstractDesign.jpg" width={500} height={600} alt="Abstract design background" />
                        <div className="bg-white absolute top-14  ">
                            <h1 className="text-3xl bg-white text-violet-950 font-bold">Our Products</h1>
                            <p className="bg-white leading-loose text-sm text-center mt-3">Stories of Success</p>
                        </div>
        
        
                        
                    </div>
        </div>


        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="grid grid-cols-1  md:grid-cols-3 gap-8  m-25">
            {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-xl bg-white shadow-lg  transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            onClick={() => handleClick(card.link)}
          >
            <div className="flex flex-col items-center">
              <div className={`${card.bgColor} rounded-t-3xl    w-full`}>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={350}
                  height={160}
                  className={`h-80  transition-opacity duration-300 hover:opacity-90 ${card.objectfit}`}
                />
              </div>
              <div className="mx-4 mb-2 text-start flex gap-5 p-2  justify-center items-center w-full">
                <div className="flex-1 ">
                  <p className="text-lg font-bold ml-4 text-gray-800  underline decoration-blue-500 underline-offset-9 pb-2">
                    {card.title}
                  </p>
                  <p className="text-gray-600 text-sm text-center">{card.description}</p>
                </div>
                <div className="flex items-center p-3 justify-center w-10 h-10 rounded-full bg-black transition-transform duration-300 hover:translate-x-1">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d=    "M5 19l14-14M14 5h5v5"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
}