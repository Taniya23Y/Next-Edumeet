import React from "react";
import HighlightText from "../../UI/HighlightText";
import Faq from "./HomePage/Faq";
import Subscribe from "../../utils/Subscribe";
import ContactHero from "./ContactPage/ContactHero";
import ContactBox from "./ContactPage/ContactBox";
import CardBox from "./ContactPage/CardBox";
import { ContactBoxDescription } from "../../Helper/data/ContactBoxDescription";
import BtnThree from "../../UI/BtnThree";

const ContactUs: React.FC = () => {
  return (
    <div className="container w-screen min-h-screen relative mx-auto flex flex-col items-center justify-between">
      {/* Contact Heading get in touch | section - 1  */}
      <section className="pt-[7rem] text-center">
        <ContactHero />
      </section>

      {/* Contact Box | section - 2  */}
      <section>
        <div className="flex items-center justify-center p-5">
          <ContactBox />
        </div>
      </section>

      {/* Contact Heading get in touch | section - 3  */}
      <section className="flex justify-center items-center flex-col space-y-3">
        <div className="pt-20">
          <BtnThree>About us</BtnThree>
        </div>
        <div className="text-3xl font-semibold">
          <HighlightText text="Our Values" />
        </div>
        <div className="text-center px-3/20">
          <p>
            At EduMeet, we value innovation, accessibility, and learning for
            all. Reach out to us — we&apos;re here to support your journey!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {ContactBoxDescription.map((det, idx) => (
            <CardBox name={det.name} desc={det.desc} img={det.img} key={idx} />
          ))}
        </div>
      </section>

      {/* FAQ | section - 4 */}
      <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        <h2 className="text-center text-4xl font-semibold mt-12 pt-12">
          <HighlightText text="Discover More with Our FAQ Section" />
        </h2>
      </div>

      {/* FAQ | section - 4.1 */}
      <Faq />

      {/* Review - section - 5 */}
      {/* <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        <h2 className="text-center text-4xl font-semibold mt-10 pt-9">
          <HighlightText text="User Testimonials" />
        </h2>
       
        <TestimonialReview />
      </div> */}

      {/* Newsletter - section - 6 */}
      <div className="w-11/12 pt-[4rem] mx-auto max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        <h2 className="text-center text-4xl font-semibold mt-10 pt-9">
          <HighlightText text="Subscribe to Newsletter ✨" />
        </h2>
        <div className="pt-4">
          <Subscribe />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
