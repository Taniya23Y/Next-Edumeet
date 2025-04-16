import React from "react";

import ContactForm from "./ContactForm";
import HighlightText from "../../../UI/HighlightText";
import CallImed from "./CallImed";

const ContactBox: React.FC = () => {
  return (
    <div className="bg-[#FFB400] glass text-white p-6 md:p-12 rounded-3xl w-full max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 flex flex-col gap-6">
          <h2 className="text-xl md:text-3xl font-bold text-white">
            <HighlightText text={" Let’s discuss Something Cool together"} />
          </h2>

          {/* Stats Section */}
          <div className="hidden md:grid grid-cols-3 gap-4 text-center">
            {[
              { value: "45+", label: "Successful Lectures" },
              { value: "130+", label: "Best Reviews" },
              { value: "350+", label: "Happy Learners" },
            ].map((stat, index) => (
              <div key={index}>
                <h3 className="text-3xl font-bold text-[#96DCDD]">
                  {stat.value}
                </h3>
                <p className="text-sm text-[#96DCDD] font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <CallImed />
        </div>

        {/* Right Side (Contact Form) */}
        <ContactForm />
      </div>

      {/* Mobile view */}
      <div className="md:hidden flex flex-col gap-6 mt-8">
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { value: "45+", label: "Successful Lectures" },
            { value: "130+", label: "Best Reviews" },
            { value: "350+", label: "Happy Learners" },
          ].map((stat, index) => (
            <div key={index}>
              <h3 className="text-3xl font-bold text-[#96DCDD]">
                {stat.value}
              </h3>
              <p className="text-sm text-[#96DCDD] font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <p className="italic text-[#dad6d6]">
          <span className="font-bold">
            “Let’s shape your learning journey together!
          </span>{" "}
          At EduMeet, we’re committed to helping you unlock your potential with
          curated roadmaps, structured learning paths, and personalized
          assignments. Have questions about our platform, suggestions for
          improvement, or ideas for collaboration? We’re here to listen and
          support you. Drop us a message, and let’s build a smarter, brighter
          future for learners like you. Get in touch today and start your
          journey with EduMeet!
          <span className="font-bold">”</span>
        </p>
        <p className="font-semibold text-[#DB2777]">- Edumeet-Team</p>
      </div>
    </div>
  );
};

export default ContactBox;
