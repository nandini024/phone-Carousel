import { FaChevronDown } from "react-icons/fa";
import Image from 'next/image';
import Navbar from "../../../../Components/Navbar";
import Footer from "../../../../Components/Footer";

export default function MainServicesPage(){
    const icons = [
        "/service-icons/React-logo.png",
        "/service-icons/Angular-logo.png",
        "/service-icons/Vue-logo.png",
        "/service-icons/Next-logo.png",
        "/service-icons/Tensorflow-logo.png",
        "/service-icons/Amazonsagemaker-logo.png",
        "/service-icons/Flutter-logo.png",
        "/service-icons/React-logo.png",
        "/service-icons/Kotlin-logo.png",
        "/service-icons/Laravel-logo.png",
        "/service-icons/Spark-logo.png",
        "/service-icons/Springboot-logo.png",
        "/service-icons/Sas-logo.png",
        "/service-icons/Python-logo.png",
        "/service-icons/Dotnet-logo.png",
        "/service-icons/Keras-logo.png",
        "/service-icons/R-logo.png",
        "/service-icons/Java-logo.png",
        "/service-icons/Php-logo.png",
        "/service-icons/Node-logo.png",
        ];

    const DesignIcons = ["/Figma-logo.png","/Png-logo.png","/Ai-logo.png","/Jitter-logo.png","/Lottiefiles-logo.png","/Search-logo.png"];

    return (
        <div className="hero">
            <Navbar />
            <div className="flex justify-center relative">
                <div className="mt-5">
                <Image src="/AbstractDesign.png" alt="Abstract deisgn" width={600} height={600} />
                </div>
                <div className="2xl:absolute 2xl:top-25 lg:absolute lg:top-22 sm:absolute sm:top-10">
                    <h1 className="text-4xl bg-white text-violet-950 font-bold">Services</h1>
                    <p className="bg-white leading-loose text-sm text-center mt-3">Crafted with love since 2017</p>
                </div>
            </div>
            <div className="px-20 flex flex-col space-y-4">
            <h1 className="text-3xl font-semibold underline underline-offset-25 decoration-4 decoration-blue-600 leading-snug">Android App Development</h1>
            <h3 className="text-2xl text-blue-500 font-semibold leading-snug mt-5">We are the best Android App Development Company in Hyderabad, India</h3>
            <p className="text-gray-500 leading-relaxed mt-5">Analogue is a Best mobile app development company in Hyderabad that specialises in creating and enhancing user experience through the design and development of mobile and web applications. Our focus lies in helping businesses expand and reach their specific customer base by collaborating with individuals and organisations to conceptualise and promote their products. Analogue is a Best mobile ain helping businesses expand and reach their specific customer base by co</p>
            <p className="text-gray-500 leading-relaxed mt-5">Analogue is a Best mobile app development company in Hyderabad that specialises in creating and enhancing user experience through the design and development of mobile and web applications. Our focus lies in helping businesses expand and reach their specific customer base by collaborating with individuals and organisations to conceptualise and promote their products. Analogue is a Best mobile ain helping businesses expand and reach their specific customer base by co. Analogue is a Best mobile app development company in Hyderabad that specialises in creating and enhancing user experience through the design and development of mobile and web applications. Our focus lies in helping businesses expand and reach their specific customer base by collaborating with individuals and organisations to conceptualise and promote their products. Analogue is a Best mobile ain helping businesses expand and reach their specific customer base by co Analogue is a Best mobile app development company in Hyderabad that specialises in creating and enhancing user experience through the design and development of mobile and web applications. Our focus lies in.</p>
            </div>
            <div className="mt-15">
                <div className="relative h-[400px] w-full bg-[url('/app-dev-bg.jpg')] bg-cover bg-center flex justify-end items-center ">
                <div className="absolute inset-0 w-1/2 pr-0 p-20">
                    <h1 className="text-white text-4xl font-bold leading-tight">Crafting Exceptional Android Apps for Your Business</h1>
                    <p className="text-white text-sm leading-loose mt-5">At Analogue IT Solutions, we specialise in expert Android app development, employing advanced technologies such as React Native and Flutter. Whether you need a robust e-commerce platform or a tailored mobile solution, our team is dedicated to delivering high-quality Android applications that enhance user experience and drive business success. Trust us to bring your app vision to life with precision and innovation</p>
                    <button className="bg-blue-700 text-white rounded p-3 mt-4 text-sm">Contact Us</button>
                </div>
                <div className="w-1/2 h-full">
                <Image src="/group-mobiles.png" alt="Group mobiles" width={400} height={400} className="w-full h-full object-cover"/></div>
                </div>
            </div>
            <div className="leading-relaxed p-20">
                <h1 className="text-blue-700 font-semibold text-2xl w-full leading-loose">Development tools we use : </h1>
                      <div className="flex flex-wrap gap-5 mt-5">
                        {icons.map((src, index) => (
                        <Image
                            key={index}
                            src={src}
                            alt={`Icon ${index + 1}`}
                            width={45}
                            height={45}
                            className="object-contain"
                        />
                        ))}
                </div>
                <h1 className="text-blue-700 font-semibold text-2xl leading-loose mt-7">Designing tools we use : </h1>
                <div className="flex flex-wrap gap-8 mt-5">
                    {DesignIcons.map((item, index) => (
                        <Image
                            key={index}
                            src={item}
                            alt={`Icon ${index + 1}`}
                            width={index === 0 || index >= DesignIcons.length - 2 ? 30 : 50}
                            height={index === 0 || index >= DesignIcons.length - 2 ? 30 : 50}
                            className="object-contain"
                        />
                        ))}
                </div>

                <p className="text-gray-500 mt-10">Analogue is a Best mobile app development company in Hyderabad that specialises in creating and enhancing user experience through the design and development of mobile and web applications. Our focus lies in helping businesses expand and reach their specific customer base by collaborating with individuals and organisations to conceptualise and promote their products. Analogue is a Best mobile ain helping businesses expand and reach their specific customer base by co Analogue is a Best mobile app development company in Hyderabad that specialises in creating and enhancing user experience through the design and development of mobile and web applications. Our focus lies in helping businesses expand and reach their specific customer base by collaborating with individuals and organisations to conceptualise and promote their products. Analogue is a Best mobile ain helping businesses expand and reach their specific customer base by co</p>

            </div>
            <Footer />
        </div>
    )
}