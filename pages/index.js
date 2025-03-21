import Head from "next/head";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { motion } from "framer-motion";
import SwiperCore, { EffectFade, Autoplay } from "swiper";
SwiperCore.use([Autoplay, EffectFade]);
import { useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Technology from "@/components/Technology";
import Accordions from "@/components/Accordions";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const details = document.querySelectorAll("details");
    // Open the first accordion
    // details[0].setAttribute("open", "");

    details.forEach((detail) => {
      detail.addEventListener("click", function () {
        details.forEach((d) => {
          if (d !== this) {
            d.removeAttribute("open");
          }
        });
      });
    });
  });

  return (
    <>
      <Head>
        <title>Black Leo Venture</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        exit={{ opacity: 0 }}
        className="bg-[url('/image/wall.png')] bg-cover bg-center bg-no-repeat lg:h-[83vh]"
      >
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
                <Accordions />
              </div>
            </div>
            <Technology />
          </div>
        </div>
      </motion.div>

      <Footer />
    </>
  );
}
