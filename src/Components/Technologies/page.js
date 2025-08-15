import Footer from "../../../Components/Footer";
import Navbar from "../Navbar";
import Image from "next/image";

export default function ObjectTechnologiesPagee() {
  return (
    <>
      <div className="h-full w-full bg-white flex flex-col items-center">
        <div className="h-auto pb-0 mb-0">
          <Navbar />
          <div className="flex h-full justify-center relative bg-white">
            <Image
              src="/AbstractDesign.jpg"
              width={500}
              height={600}
              alt="Abstract design background"
              className="object-contain 0"
            />
            <div className="absolute top-14 bg-white">
              <h1 className="text-3xl bg-white text-violet-950 font-bold">
                Technologies
              </h1>
              <p className="bg-white text-black leading-loose text-sm text-center mt-3">
                Crafted with love since 2017
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-full h-full bg-white gap-5 mx-10 px-10 mt-0 pt-0">
          <div className="border-2 border-red-500">
            <Image
              src="/image.png"
              width={400}
              height={300}
              alt="Buykeyz product image"
              className="object-contain"
            />
          </div>
          <div className="self-start pt-0 px-10 bg-white">
            <p className="text-black text-3xl underline underline-offset-8 decoration-blue-500 p-2">
              Adobe XD
            </p>
            <p className="text-xl text-blue-500 p-3">We design using Adobe XD</p>
            <p className="text-sm p-3 text-black">
              Analogue is a leading mobile app development company in Hyderabad,
              specializing in creating and enhancing user experience through the
              design and development of mobile and web applications. Our focus
              lies in helping businesses expand and reach their specific customer
              base by collaborating with individuals and organizations to
              conceptualize and promote their products.
            </p>
          </div>
        </div>

        <div>
          <p className=" text-xl text-black text-center">Our Works</p>
          <div className="overflow-hidden w-full max-w-6xl py-10">
            <div className="flex w-max animate-scroll gap-4">
              {[
                { src: "/Mockup (1).png", alt: "Project 1 screenshot" },
                { src: "/Mockup (2).png", alt: "Project 2 screenshot" },
                { src: "/Mockup (3).png", alt: "Project 3 screenshot" },
                { src: "/Mockup (4).png", alt: "Project 4 screenshot" },
                { src: "/Mockup (5).png", alt: "Project 5 screenshot" },
                { src: "/Mockup (6).png", alt: "Project 6 screenshot" },
                { src: "/Mockup (7).png", alt: "Project 7 screenshot" },
                { src: "/Mockup.png", alt: "Project 8 screenshot" },
                { src: "/Mockup (1).png", alt: "Project 9 screenshot" },
                { src: "/Mockup (2).png", alt: "Project 2 screenshot" },
                { src: "/Mockup (3).png", alt: "Project 3 screenshot" },
                { src: "/Mockup (4).png", alt: "Project 4 screenshot" },
                { src: "/Mockup (5).png", alt: "Project 5 screenshot" },
                { src: "/Mockup (6).png", alt: "Project 6 screenshot" },
                { src: "/Mockup (7).png", alt: "Project 7 screenshot" },
                { src: "/Mockup.png", alt: "Project 8 screenshot" },
              ].map((image, index) => (
                <div
                  key={index}
                  className="flex justify-end items-center min-w-[150px]  h-64 bg-white"
                >
                  <Image
                    src={image.src}
                    width={100}
                    height={256}
                    alt={image.alt}
                    className="w-full  h-full object-contain transition-transform duration-300 hover:scale-110 hover:z-10"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden w-full max-w-6xl py-10">
            <div className="flex w-max animate-scrollLap gap-4">
              {[
                { src: "/Carousal-Lap-Img1.png", alt: "Project 1 screenshot" },
                { src: "/Carousal-Lap-Img2.png", alt: "Project 2 screenshot" },
                { src: "/Carousal-Lap-Img3.png", alt: "Project 3 screenshot" },
                { src: "/Carousal-Lap-Img4.png", alt: "Project 4 screenshot" },
                { src: "/Carousal-Lap-Img5.png", alt: "Project 5 screenshot" },
                { src: "/Carousal-Lap-Img6.png", alt: "Project 6 screenshot" },
                { src: "/Carousal-Lap-Img1.png", alt: "Project 7 screenshot" },
                { src: "/Carousal-Lap-Img2.png", alt: "Project 8 screenshot" },
                { src: "/Carousal-Lap-Img3.png", alt: "Project 9 screenshot" },
                { src: "/Carousal-Lap-Img4.png", alt: "Project 2 screenshot" },
                
              ].map((image, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center min-w-[120px] h-48 bg-white"
                >
                  <Image
                    src={image.src}
                    width={150}
                    height={256}
                    alt={image.alt}
                    className="w-full h-full object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 hover:z-10"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-full ">
          <p className="text-blue-500 px-5 m-5 ">Why Analogue IT Solutions</p>
          <p className="text-black text-sm px-5 m-5">
            Analogue is a Best mobile app development company in Hyderabad that specialises in creating 
            and enhancing user experience through the design and development of mobile and web applications. 
            Our focus lies in helping businesses expand and reach their specific customer base by 
            collaborating with individuals and organisations to conceptualise and promote their products. 
            Analogue is a Best mobile ain helping businesses expand and reach their specific customer base 
            by co
          </p>
          <p className="text-black text-sm mt-3 px-5 mx-5 pb-5">
            Analogue is a Best mobile app development company in Hyderabad that specialises in creating 
            and enhancing user experience through the design and development of mobile and web applications. 
            Our focus lies in helping businesses expand and reach their specific customer base by 
            collaborating with individuals and organisations to conceptualise and promote their products. 
            Analogue is a Best mobile ain helping businesses expand and reach their specific customer 
            base by co. Analogue is a Best mobile app development company in Hyderabad that specialises 
            in creating and enhancing user experience through the design and development of mobile and web 
            applications. Our focus lies in helping businesses expand and reach their specific customer 
            base by collaborating with individuals and organisations to conceptualise and promote their 
            products. Analogue is a Best mobile ain helping businesses expand and reach their specific 
            customer base by co Analogue is a Best mobile app development company in Hyderabad that 
            specialises in creating and enhancing user experience through the design and development of 
            mobile and web applications. Our focus lies in

          </p>
        </div>

      </div>
      <Footer />
    </>
  );
}