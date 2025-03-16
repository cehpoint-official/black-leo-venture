import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#2B2C7F] relative z-10">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center py-4 lg:py-0 lg:h-[7vh]">
        <p className="text-white py-0 lg:py-4">Black Leo Venture © 2025</p>
        <div className="flex items-center justify-center">
          <Link href="/contact-us" className="text-white cursor-pointer">
            Contact
          </Link>
          <p className="text-white mx-6">|</p>
          <Link href="/" className="text-white cursor-pointer">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
