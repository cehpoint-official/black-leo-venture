import { motion } from "framer-motion";

const Accordions = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
      className=""
    >
      <details className="open:bg-accent open:text-black transition duration-300 ease-in-out select-none">
        <summary className="bg-inherit px-5 py-3 text-[22px] cursor-pointer font-medium text-[#2B2C7F] ">
          About
        </summary>
        <div className="px-10 pb-4 bg-accent text-sm font-light">
          <p>
            Black Leo Venture is a dynamic IT solutions company specializing in
            EdTech, FinTech, and e-commerce industries. We provide cutting-edge
            software development, AI-driven solutions, and IT consulting to help
            businesses scale efficiently. Our expertise spans web & mobile app
            development, AI integration, blockchain solutions, and cloud
            computing.
            <br />
            <br />
            Beyond IT services, we empower startups through our Startup
            Mentoring, Incubation & Acceleration Program, offering expert
            guidance, investor connections, and growth strategies. We also focus
            on IT sales, acquiring international projects and delivering
            cost-effective development in India.
            <br />
            <br />
            At Black Leo Venture, we combine innovation, technology, and
            strategic insights to drive business success.
          </p>
        </div>
      </details>
      <details className="open:bg-accent open:text-black transition duration-300 ease-in-out select-none">
        <summary className="bg-inherit px-5 py-3 text-[22px] cursor-pointer font-medium text-[#2B2C7F] ">
          Project
        </summary>
        <div className="px-10 pb-4 bg-accent text-sm font-light text-gray-800">
          <div>
            <h3 className="text-lg font-semibold text-[#2B2C7F] mb-2 border-b-2 border-[#4A4CB8] inline-block pb-1">
              Startup Fundraising & Growth Hub{" "}
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Our{" "}
              <span className="font-medium italic">
                Startup Fundraising & Growth Hub
              </span>{" "}
              is a one-stop platform designed to help startups secure funding,
              refine their pitch, and manage early-stage development seamlessly.
              <br />
            </p>
            <div className="p-6">
              <h2 className="text-lg font-bold mb-4">Key Features:</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong className="font-semibold">
                    Investor Outreach & Feedback:
                  </strong>{" "}
                  Connect with investors, run targeted campaigns, and receive
                  valuable insights.
                </li>
                <li>
                  <strong className="font-semibold">
                    Pitch Deck & Business Docs:
                  </strong>{" "}
                  Get professional PPTs and investor-ready documentation.
                </li>
                <li>
                  <strong className="font-semibold">
                    Incubation & Mentorship:
                  </strong>{" "}
                  Access expert guidance, startup acceleration, and incubation
                  support.
                </li>
                <li>
                  <strong className="font-semibold">
                    MVP Development Support:
                  </strong>{" "}
                  Build and enhance your Minimum Viable Product (MVP) with
                  structured workflows.
                </li>
                <li>
                  <strong className="font-semibold">
                    Talent & Payroll Management:
                  </strong>{" "}
                  Hire early talents (interns), manage payroll, and streamline
                  team operations.
                </li>
              </ul>
              <p className="mt-4 text-gray-800">
                From funding to product development and scaling, we provide
                startups with the right tools to grow, innovate, and succeed.
              </p>
            </div>
          </div>
        </div>
      </details>
      <details className="open:bg-accent open:text-black transition duration-300 ease-in-out select-none">
        <summary className="bg-inherit px-5 py-3 text-[22px] cursor-pointer font-medium text-[#2B2C7F] ">
          Startup Mentoring, Incubation & Acceleration Program
        </summary>
        <div className="px-10 pb-4 bg-accent text-sm font-light">
          Our Startup Mentoring, Incubation & Acceleration Program empowers
          entrepreneurs with expert guidance, funding strategies, and market
          insights. We provide mentorship, MVP development, investor
          connections, and growth acceleration. From ideation to scaling, we
          help startups refine business models, secure investments, and achieve
          sustainable success in EdTech, FinTech, and e-commerce industries.
          <p className="mt-6 text-gray-700">
            Have questions or need assistance? Contact us at
            <a
              href="mailto:info@blackleoventure.com"
              className="text-blue-600 hover:underline ml-1"
            >
              info@blackleoventure.com
            </a>
            .
          </p>
        </div>
      </details>
      <details className="open:bg-accent open:text-black transition duration-300 ease-in-out select-none">
        <summary className="bg-inherit px-5 py-3 text-[22px] cursor-pointer font-medium text-[#2B2C7F]">
          Careers
        </summary>
        <div className="px-10 pb-4 bg-accent text-sm font-light text-gray-800">
          <div className="space-y-3">
            <div>
              <h3 className="text-lg font-semibold text-[#2B2C7F] mb-1 border-b-2 border-[#4A4CB8] inline-block pb-1">
                Join Our Team
              </h3>
              <p className="text-gray-700 mb-2">
                Explore exciting opportunities in Sales, IT, and Web
                Development.
              </p>
              <p className="text-gray-700 mb-4">
                We are looking for passionate individuals to join our team and
                contribute to innovative projects. Whether you are an
                experienced professional or just starting, we have a place for
                you. Collaborate, grow, and make a difference with us.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>
                  <span className="font-medium text-[#2B2C7F]">
                    Sales/IT Specialist:
                  </span>
                  <span>
                    {" "}
                    Drive business growth through innovative IT and sales
                    solutions.
                  </span>
                </li>
                <li>
                  <span className="font-medium text-[#2B2C7F]">
                    Web Developer (WordPress):
                  </span>
                  <span>
                    {" "}
                    Build and maintain dynamic websites using WordPress.
                  </span>
                </li>
                <li>
                  <span className="font-medium text-[#2B2C7F]">
                    Web Developer (MERN Stack):
                  </span>
                  <span>
                    {" "}
                    Design and develop full-stack applications using MongoDB,
                    Express.js, React, and Node.js.
                  </span>
                </li>
              </ul>
              <p className="mt-2 font-semibold text-gray-700">
                Freshers can apply at{" "}
                <a
                  href="mailto:careers@blackleoventure.com"
                  className="text-blue-600 hover:underline"
                >
                  careers@blackleoventure.com
                </a>
                .
              </p>
              <p className="mt-2 font-semibold text-gray-700">
                Experienced Candidate can Apply at{" "}
                <a
                  href="mailto:careers@blackleoventure.com"
                  className="text-blue-600 hover:underline"
                >
                  hr@blackleoventure.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </details>
    </motion.div>
  );
};

export default Accordions;
