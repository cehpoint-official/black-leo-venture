"use client";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const ContactAccordings = () => {
  const emailData = [
    { title: "General Inquiries", email: "info@blackleoventure.com" },
    {
      title: "Customer Support & Assistance",
      email: "support@blackleoventure.com",
    },
    { title: "Sales & Business Inquiries", email: "sales@blackleoventure.com" },
    {
      title: "Collaboration & Partnership Opportunities",
      email: "partnerships@blackleoventure.com",
    },
    {
      title: "Investor Relations & Funding Inquiries",
      email: "investors@blackleoventure.com",
    },
    { title: "Human Resources & Recruitment", email: "hr@blackleoventure.com" },
    {
      title: "Job Applications & Internship Inquiries",
      email: "careers@blackleoventure.com",
    },
    {
      title: "Technical Support & IT-Related Queries",
      email: "tech@blackleoventure.com",
    },
    {
      title: "Accounts & Payment-Related Inquiries",
      email: "billing@blackleoventure.com",
    },
    {
      title: "Direct Communication with the CEO",
      email: "ceo@blackleoventure.com",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-lg mx-auto space-y-2">
      <h1 className="text-3xl font-semibold underline my-6">
        Contact Information:
      </h1>
      {emailData.map((item, index) => (
        <div key={index} className="border-b border-gray-300 pb-2">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex items-center space-x-2 text-blue-800 font-semibold hover:underline"
          >
            <FaPlay
              className={`transition-transform ${
                openIndex === index ? "rotate-90" : ""
              }`}
            />
            <span>{item.title}</span>
          </button>
          {openIndex === index && (
            <p className="ml-6 text-gray-700 font-semibold">{item.email}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactAccordings;
