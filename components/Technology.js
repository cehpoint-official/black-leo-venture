import { motion } from "framer-motion";

const Technology = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3 }}
      exit={{ opacity: 0 }}
      className="flex justify-center mb-4 lg:mb-0"
    >
      <img src="/image/tech.png" className="w-4/5" alt="" />
    </motion.div>
  );
};

export default Technology;
