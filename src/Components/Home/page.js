import Image from 'next/image';
import { FaChevronDown } from "react-icons/fa";
import Navbar from '../Navbar';


export default function MainPage() {

  const socialIcons = [
    { id: 1, name: "Facebook", src: "/link1.png", link: "#" },
    { id: 2, name: "Twitter", src: "/link2.png", link: "#" },
    { id: 3, name: "LinkedIn", src: "/link3.png", link: "#" },
    { id: 4, name: "Instagram", src: "/link4.png", link: "#" },
    { id: 5, name: "Whatsapp", src: "/link5.png", link: "#" },
    { id: 6, name: "Youtube", src: "/link6.png", link: "#" } 
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-hidden relative">
      <Navbar />
      {/* Hero */}
      <div className="hero flex flex-1 bg-white text-black">
        {/* Left */}
        <div className="left-hero w-1/2 px-10 flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-black">
            Best Mobile App Development Company in Hyderabad
          </h1>
          <p className="mt-4 text-black">
            Analogue is a Best mobile app development company in Hyderabad that
            specialises in creating and enhancing user experience through the
            design and development of mobile and web applications. Our focus
            lies in helping businesses expand and reach their specific customer
            base by collaborating with individuals and organisations to
            conceptualise and promote their products.
          </p>
          <div className="flex items-center gap-5 mt-10 flex-wrap w-full">
            {[1, 2, 3, 4].map((id) => (
              <Image 
                key={id}
                src={`ellipse${id}.png`}
                width={id === 1 ? 135 : 120}
                height={id === 1 ? 140 : 120}
                alt={`Logo ${id}`}
                className="rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Right */}
      <div className="right-hero w-1/2 flex justify-center items-center relative">
        <div className="relative w-[350px] h-[450px]">

          {/* Main Mobile Image */}
          <Image
            src="/Main-mobile.png"
            alt="Mobile"
            layout="fill"
            objectFit="contain"
            className="z-10 relative"
          />

        {/* Left Side (Top and Bottom) */}
        <div className="absolute left-[-90px] top-1/2 -translate-y-1/2 flex flex-col items-center gap-0">
          <Image
            src="/logo1.png"
            alt="Ellipse 1"
            width={180}
            height={180}
            className="rotate-[-15deg] mb-[-5px]"
          />
          <Image
            src="/logo3.png"
            alt="Ellipse 2"
            width={180}
            height={180}
            className="rotate-[10deg]"
          />
        </div>

        {/* Right Side (Top and Bottom) */}
        <div className="absolute right-[-90px] top-1/2 -translate-y-1/2 flex flex-col items-center gap-0">
          <Image
            src="/logo2.png"
            alt="Ellipse 3"
            width={180}
            height={180}
            className="rotate-[20deg] mb-[-5px]"
          />
          <Image
            src="/logo4.png"
            alt="Ellipse 4"
            width={180}
            height={180}
            className="rotate-[-10deg]"
          />
        </div>

    </div>
  </div>


        {/* Icon Links */}
        <div className="icon-links absolute left-5 bottom-10 flex items-center gap-4">
          {socialIcons.map((icon) => (
            <a
              key={icon.id}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={icon.src}
                alt={icon.name}
                width={24}
                height={24}
                className="cursor-pointer hover:scale-110 transition-transform"
              />
            </a>
          ))}
          <span className="text-gray-700 text-xs font-medium">Follow Us</span>
        </div>
      </div>
    </div>
  );
}