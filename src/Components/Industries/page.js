import Footer from "../../../Components/Footer";
import Navbar from "../Navbar";
import Image from "next/image";
export default function IndustryPage() {
  return (
    <>
      <div className="w-full h-full bg-white overflow-hidden">
        <div className="h-auto pb-0 mb-0 bg-white ">
          <Navbar />
          <div className="flex h-full justify-center relative bg-white">
            <Image
              src="/AbstractDesign.jpg"
              width={500}
              height={600}
              alt="Abstract design background"
              className="object-contain 0"
            />
            <div className="absolute top-14 bg-white text-center">
              <h1 className="text-3xl bg-white text-violet-950 font-bold">
                Industries
              </h1>
              <p className="bg-white text-black leading-loose text-sm text-center mt-3">
                Certified with love since 2017
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full gap-5 justify-center items-start  h-full b-white  overflow-hidden">
          <div className="w-2/5 px-10 self-center ">
            <p className="text-2xl  text-black font-bold underline decoration-blue-500 decoration-4 underline-offset-15">
              E-Commerce App & Web
            </p>
            <p className="text-sm text-black leading-6 mt-4">
              Analogue is a Best mobile app development company in Hyderabad
              that specialises in creating and enhancing user experience through
              the design and development of mobile and web applications. Our
              focus lies in helping businesses expand and reach their specific
              customer base by collaborating with individuals and organisations
              to conceptualise and promote their products.
            </p>
          </div>

          <div className="w-3/5 p-10  ">
            <div className="bg-grey-300">
              <Image
                className="border-2 border-grey-500 rounded bg-grey-200 "
                src="/image.png"
                alt="Industry Image"
                width={600}
                height={300}
              />
            </div>
          </div>
        </div>

        <div className="bg-industry bg-cover bg-center w-screen h-[300] relative">
          <div className="p-3  text-white  ml-20 ">
            <p className="text-2xl leading-9 font-bold">
              A proven methodology that ensures successful <br /> project
              delivery from conception to deployment.
            </p>
            <p className="w-1/2 mt-5 text-sm leading-6">
              Analogue is a Best mobile app development company in Hyderabad
              that specialises in creating and enhancing user experience through
              the design and development of mobile and web applications. Our
              focus lies in helping businesses expand and reach their specific
              customer base by collaborating with individuals and organisations
              to conceptualise and promote their products.
            </p>
            <button className="primary text-white bg-blue-500 text-sm p-3 rounded my-2">
              Contact Us
            </button>
          </div>

          <div className="absolute -bottom-10 right-20 w-120 h-70 rounded-4xl p-10 bg-gray-300">
            Hellooo
          </div>

        </div>

        <div className="bg-white m-5 p-5">
          <p className="text-blue-500 text-xl">Bussiness Benifits</p>
          <p className="text-sm mt-4 leading-5 text-gray-600">
            Analogue is a Best mobile app development company in Hyderabad that
            specialises in creating and enhancing user experience through the
            design and development of mobile and web applications. Our focus
            lies in helping businesses expand and reach their specific customer
            base by collaborating with individuals and organisations to
            conceptualise and promote their products. Analogue is a Best mobile
            ain helping businesses expand and reach their specific customer base
            by co
          </p>

          <p className="text-sm mt-4 leading-5 text-gray-600 ">
            Analogue is a Best mobile app development company in Hyderabad that
            specialises in creating and enhancing user experience through the
            design and development of mobile and web applications. Our focus
            lies in helping businesses expand and reach their specific customer
            base by collaborating with individuals and organisations to
            conceptualise and promote their products. Analogue is a Best mobile
            ain helping businesses expand and reach their specific customer base
            by co. Analogue is a Best mobile app development company in
            Hyderabad that specialises in creating and enhancing user experience
            through the design and development of mobile and web applications.
            Our focus lies in helping businesses expand and reach their specific
            customer base by collaborating with individuals and organisations to
            conceptualise and promote their products. Analogue is a Best mobile
            ain helping businesses expand and reach their specific customer base
            by co Analogue is a Best mobile app development company in Hyderabad
            that specialises in creating and enhancing user experience through
            the design and development of mobile and web applications. Our focus
            lies in
          </p>


        </div>
      </div>
      <Footer />
    </>
  );
}
