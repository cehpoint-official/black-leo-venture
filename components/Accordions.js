import { motion } from "framer-motion";

const Accordions = () => {
  const courses = [
    {
      title: "Startup Mentoring Program",
      description:
        "The Startup Mentoring Program provides aspiring entrepreneurs with personalized guidance from experienced mentors to successfully launch and scale their startups. This program offers one-on-one mentoring sessions, covering critical areas such as business planning, product development, market validation, and investor outreach. Participants will gain practical insights and actionable strategies to overcome startup challenges and accelerate growth. By the end, you’ll have a refined business model and the confidence to navigate the startup ecosystem effectively.",
    },
    {
      title: "Entrepreneurship Skill Development Program",
      description:
        "The Entrepreneurship Skill Development Program equips participants with essential business skills to transform ideas into successful ventures. This hands-on program covers key areas like business modeling, financial planning, marketing strategies, and leadership development. Through interactive workshops and real-world case studies, you’ll gain the knowledge and confidence to tackle business challenges and drive innovation. By the end, you’ll be prepared to launch, manage, and scale your entrepreneurial journey with clarity and purpose.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
      exit={{ opacity: 0 }}
      className=""
    >
      <details className="open:bg-accent open:text-black transition duration-300 ease-in-out select-none">
        <summary className="bg-inherit px-5 py-3 text-[22px] cursor-pointer font-medium text-[#2B2C7F] ">
          About
        </summary>
        <div className="px-10 pb-4 bg-accent text-sm font-light">
          <p>
            Black Leo Venture is a forward-thinking company passionate about
            fueling innovation and fostering talent in the entrepreneurial and
            IT ecosystems. We specialize in empowering new entrepreneurs and
            startups by providing tailored solutions to bring their visions to
            life. Our expert team designs high-quality Minimum Viable Products
            (MVPs) and creates persuasive pitch decks that help secure funding
            and attract investors, giving startups the strong start they need to
            succeed in competitive markets.
            <br />
            <br />
            Beyond supporting businesses, we are deeply committed to shaping the
            future of aspiring IT professionals. Black Leo Venture offers
            comprehensive training programs for students, covering in-demand
            skills like digital marketing, project management, and software
            development. We go a step further by providing hands-on industrial
            training opportunities, allowing students to gain practical
            experience and build confidence in real-world settings. Our mission
            is to bridge the gap between ambition and achievement, equipping
            both entrepreneurs and students with the tools, knowledge, and
            opportunities to excel.
            <br />
            <br />
            At Black Leo Venture, we pride ourselves on being a catalyst for
            growth—whether it’s launching a groundbreaking startup or
            kickstarting a rewarding career in technology. We’re here to turn
            potential into progress, one success story at a time.
          </p>
        </div>
      </details>
      <details className="open:bg-accent open:text-black transition duration-300 ease-in-out select-none">
        <summary className="bg-inherit px-5 py-3 text-[22px] cursor-pointer font-medium text-[#2B2C7F] ">
          Project
        </summary>
        <div className="px-10 pb-4 bg-accent text-sm font-light text-gray-800">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#2B2C7F] mb-2 border-b-2 border-[#4A4CB8] inline-block pb-1">
                Investor Outreach Program
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The{" "}
                <span className="font-medium italic">
                  Investor Outreach Program
                </span>{" "}
                by Black Leo Venture connects ambitious entrepreneurs and
                startups with the right investors to bring their ideas to life.
                We craft compelling pitch decks and Minimum Viable Products
                (MVPs), then match startups with angel investors, venture
                capitalists, and industry-specific funds tailored to their
                vision. Our team handles personalized outreach, strategic
                introductions, and provides expert guidance on investor
                communication and negotiations. With a focus on building strong
                first impressions, this program empowers startups to secure
                funding and scale their businesses effectively.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#2B2C7F] mb-2 border-b-2 border-[#4A4CB8] inline-block pb-1">
                Funding Help Incubation and Project Management Portal
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our{" "}
                <span className="font-medium italic">
                  Funding Help Encuvation and Project Management Portal
                </span>{" "}
                is a dynamic platform designed for both startups and IT
                students. For entrepreneurs, it offers tools to build MVPs,
                refine pitch decks, and track fundraising progress with
                real-time expert feedback. For students, it’s a hands-on
                training hub featuring digital marketing, project management,
                and development modules, paired with industrial project
                experience. This dual-purpose portal fosters
                “encuvation”—encouragement meets innovation—helping users manage
                projects seamlessly, secure funding, and gain practical skills
                to succeed in the tech world.
              </p>
            </div>
          </div>
        </div>
      </details>
      <details className="open:bg-accent open:text-black transition duration-300 ease-in-out select-none">
        <summary className="bg-inherit px-5 py-3 text-[22px] cursor-pointer font-medium text-[#2B2C7F] ">
          Education
        </summary>
        <div className="px-10 pb-4 bg-accent text-sm font-light">
          {courses.map((course, index) => (
            <div
              key={index}
              className="p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-[#2B2C7F] mb-4">
                {course.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {course.description}
              </p>
            </div>
          ))}
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
    </motion.div>
  );
};

export default Accordions;
