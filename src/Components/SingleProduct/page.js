import Footer from "../../../Components/Footer";
import Navbar from "../Navbar";
import Image from "next/image";

export default function SingleProductPage() {
    return (
        <>
            <div className="h-full w-full">
                <div className="h-auto pb-0 mb-0 " >
                            <Navbar />
                            <div className=" flex h-full justify-center relative bg-white ">
                                <Image src="/AbstractDesign.jpg" width={500} height={600} alt="Abstract design background" />
                                <div className="absolute top-14 bg-white  ">
                                    <h1 className="text-3xl bg-white text-violet-950 font-bold">Our Products</h1>
                                    <p className="bg-white text-black leading-loose text-sm text-center mt-3">Stories of Success</p>
                                </div>  
                            </div>
                </div>
                <div className="text-4xl text-black-500 pt-0 px-10 py-5 bg-white underline underline-offset-15 decoration-blue-500 "><p className="text-3xl text-black">Buykeyz</p></div>
                <div className="bg-white w-full flex text-center justify-center  h-full  gap-20">
                    <div className="w-1/2 flex justify-center items-center gap-5">
                    <div>
                        <Image src="/img1.jpg" width={400} height={400} alt="Buykeyz product image" className=" object-contain"/>
                        <p className="text-2xl text-black-500">Paper Sketches</p>
                    </div>              
                  
                        <Image src="/img2.jpg" width={400} height={400} alt="Buykeyz product image" className=" object-contain" />
                        <Image src="/img3.jpg" width={400} height={400} alt="Buykeyz product image" className=" object-contain" />
                    </div>
                    <div className="w-1/2 flex flex-col justify-items-start gap-4 mx-10 px-10 mb-10">
                    <div className="self-start"><Image src="/logo.jpg" width={300} height={200} alt="LogiImage" className="border-2 " /></div>
                    <p className="self-start text-blue-700 text-3xl">Process we follow for successful project</p>
                    <p className=" self-start text-black text-sm text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div>
                        <p className="text-blue-700 text-start py-2 font-bold">Development Tools We use :</p>
                        <div className="grid grid-cols-6 gap-4">
                            <Image src="/React.png" width={50} height={50} alt="React logo" className=" object-contain" />
                            <Image src="/Angular.png" width={50} height={50} alt="Next.js logo" className=" object-contain" />
                            <Image src="/icons8-vue-js 1.png" width={50} height={50} alt="Node.js logo" className=" object-contain" />
                            <Image src="/next-js 1.png" width={50} height={50} alt="MongoDB logo" className=" object-contain" />
                            <Image src="/tensorflow.png" width={50} height={50} alt="Express.js logo" className="object-contain" />
                            <Image src="/amazon sagemaker.png" width={50} height={50} alt="Tailwind CSS logo" className=" object-contain" /> 
                            <Image src="/Java.png" width={50} height={50} alt="React logo" className=" object-contain" />
                            <Image src="/Php.png" width={50} height={50} alt="Next.js logo" className=" object-contain" />
                            <Image src="/node-js 3.png" width={50} height={50} alt="Node.js logo" className=" object-contain" />
                            <Image src="/dotnet 1.png" width={50} height={50} alt="MongoDB logo" className="object-contain" />
                            <Image src="/keras.png" width={50} height={50} alt="Express.js logo" className=" object-contain" />
                            <Image src="/R Programming.png" width={50} height={50} alt="Tailwind CSS logo" className=" object-contain" /> 
                            </div>

                    </div>
                    </div>
                </div>


            </div>
            <Footer />
        </>
    )
}