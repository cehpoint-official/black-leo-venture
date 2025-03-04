import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#2B2C7F] relative z-10"
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center py-4 lg:py-0 lg:h-[7vh]">
        <p className="text-white py-0 lg:py-4">© Black Leo Venture Pvt. Ltd.</p>
        <div className="flex items-center justify-center">
          <a href="/contact-us">
            <p className="text-white mr-6">contact</p>
          </a>
          <p className="text-white mr-6">|</p>
          <a href="https://quikey.app" target="_blank">
            <p className="text-white">quikey</p>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
