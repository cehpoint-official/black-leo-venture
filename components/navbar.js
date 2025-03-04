import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gradient-to-r from-gray-300 to-[#FF6805] h-[10vh] flex justify-start items-center"
    >
      <div className="flex justify-start items-center container mx-auto px-4 md:px-0">
        <img
          src="/image/ezgif.com-crop.png"
          className="w-[100px] h-[100px] mr-4 mt-4"
          alt=""
        />
        <p className="text-[#2B2C7F] text-[14px] font-medium">
          <span className="font-semibold text-[24px] leading-6">Black Leo</span>
          <br />
          <span className="tracking-widest">Venture</span>
        </p>
      </div>
    </motion.div>
  );
};

export default Navbar;
