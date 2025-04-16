"use client";
import Image from "next/image";
import React from "react";
import logo from "../../public/images/edumeet-yellow-logo-removebg-preview.png";
import Link from "next/link";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import {
  Contact,
  CookieIcon,
  CopyrightIcon,
  LucideGoal,
  NotebookText,
  PaperclipIcon,
  TerminalSquare,
  UserRound,
} from "lucide-react";

const quickLinks = [
  { id: 1, icon: <UserRound size={16} />, label: "About Us", url: "/aboutus" },
  {
    id: 2,
    icon: <PaperclipIcon size={16} />,
    label: "Courses",
    url: "/category",
  },
  { id: 3, icon: <NotebookText size={16} />, label: "Blog", url: "/blog" },
  {
    id: 4,
    icon: <Contact size={16} />,
    label: "Contact Us",
    url: "/contact",
  },
];

const legalLinks = [
  {
    id: 1,
    icon: <LucideGoal size={16} />,
    label: "Privacy Policy",
    url: "/policy/privacy-link",
  },
  {
    id: 2,
    icon: <TerminalSquare size={16} />,
    label: "Terms of Service",
    url: "/policy/terms",
  },
  {
    id: 3,
    icon: <CookieIcon size={16} />,
    label: "Cookie Policy",
    url: "/policy/cookie-policy",
  },
  {
    id: 4,
    icon: <CopyrightIcon size={16} />,
    label: "Copyright Notice",
    url: "/policy/copyright-notice",
  },
];

const socialLinks = [
  {
    id: 1,
    icon: <FaGithub size={21} />,
    url: "https://www.github.com/Taniya23Y",
  },
  { id: 2, icon: <FaTwitter size={21} />, url: "https://x.com" },
  { id: 3, icon: <FaInstagram size={21} />, url: "https://www.instagram.com" },
  {
    id: 4,
    icon: <FaLinkedin size={21} />,
    url: "https://www.linkedin.com/taniay",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="max-w-[95%] mx-auto bg-black text-white rounded-2xl border-[0.5px] border-[#ffffff13] p-6 px-2 bottom-1 xl:px-2 xl:bottom-1">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {/* Company Information */}
        <div>
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image className="h-9 w-9 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight text-yellow font-semibold">
              Edumeet
            </span>
          </Link>
          <p className="text-sm pt-2 font-Josefin_Sans">
            EduMeet is your one-stop destination for free coding courses with
            structured roadmaps and hands-on assignments.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#C691FC]">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.id} className="flex items-center space-x-2">
                {link.icon}
                <a href={link.url} className="hover:text-[#C691FC]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4  text-[#C691FC]">
            Legal Links
          </h3>
          <ul className="space-y-2">
            {legalLinks.map((link) => (
              <li key={link.id} className="flex items-center space-x-2">
                {link.icon}
                <a href={link.url} className="hover:text-[#C691FC]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col gap-7">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-500">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  className="hover:text-emerald-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-500">
              Contact
            </h3>
            <p className="text-sm">
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:edumeetlearn@gmail.com"
                className="hover:text-yellow"
              >
                edumeetlearn@gmail.com
              </a>
            </p>
            <p className="text-sm">
              <span className="font-semibold">Phone:</span> +1 (555) 123-4567
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-300 mt-4 pt-4 text-center text-xs text-gray-500">
        <div className="text-center py-2 pb-2 w-full text-[#ffffffe7] text-[14px] bottom-1">
          © 2024 - {new Date().getFullYear()}
          <span className="text-xl text-yellow font-bold"> EduMeet. </span>
          <span>All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
