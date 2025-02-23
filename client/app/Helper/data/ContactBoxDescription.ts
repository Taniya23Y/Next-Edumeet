import {
  FaLightbulb,
  FaGlobe,
  FaUsers,
  FaBook,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";
import { IconType } from "react-icons";

interface ContactBoxItem {
  name: string;
  desc: string;
  img: IconType;
}

export const ContactBoxDescription: ContactBoxItem[] = [
  {
    name: "Innovation",
    desc: "We embrace creativity and innovation to build a better learning experience.",
    img: FaLightbulb,
  },
  {
    name: "Global Reach",
    desc: "Our vision is to make education accessible to learners across the world.",
    img: FaGlobe,
  },
  {
    name: "Community",
    desc: "We foster a strong community where learners and educators connect.",
    img: FaUsers,
  },
  {
    name: "Knowledge",
    desc: "We believe in sharing knowledge and empowering individuals to grow.",
    img: FaBook,
  },
  {
    name: "Collaboration",
    desc: "Working together to create impactful and engaging learning experiences.",
    img: FaHandshake,
  },
  {
    name: "Growth",
    desc: "We are committed to continuous growth, improving learning and teaching every day.",
    img: FaChartLine,
  },
];
