"use client";
import ContactAccordings from "@/components/ContactAccordings";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Technology from "@/components/Technology";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[url('/image/wall.png')] bg-cover bg-center bg-no-repeat lg:h-[83vh]">
        <div className="lg:bg-center lg:bg-[url('/image/plant-transformed.png')] bg-no-repeat bg-cover relative font-lato lg:h-[83vh]">
          <div className="flex flex-col justify-center items-center lg:h-[80vh]">
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 container mx-auto px-4 md:px-0 mb-20 lg:mb-0 h-full ">
              <div className="flex flex-col lg:justify-end">
                <div className="flex justify-center lg:hidden">
                  <img
                    src="/image/camera-bg-remove.webp"
                    className="w-1/2"
                    alt=""
                  />
                </div>

                <ContactAccordings />
              </div>
            </div>
            <Technology />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
