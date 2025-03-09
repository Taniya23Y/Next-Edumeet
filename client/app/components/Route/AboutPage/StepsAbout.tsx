import { FaBook, FaBullseye, FaUsers, FaTrophy } from "react-icons/fa";
import grainImage from "../../../../public/images/grainImage.jpg";
import { JSX } from "react";

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
  bg: string;
}

const features: Feature[] = [
  {
    icon: <FaBook className="text-[#9bea79] text-3xl" />,
    title: "Quality Learning Resources",
    description: "Access curated coding courses and study materials.",
    bg: "from-[#8DFDC2] to-yellow-800/20",
  },
  {
    icon: <FaBullseye className="text-purple-400 text-3xl" />,
    title: "Structured Learning Paths",
    description: "Follow step-by-step roadmaps for tech careers.",
    bg: "from-[#C691FC] to-purple-800/20 border-[#C691FC]",
  },
  {
    icon: <FaUsers className="text-pink-400 text-3xl" />,
    title: "Community Support",
    description: "Interact with peers & mentors.",
    bg: "from-pink-500/90 to-pink-800/20",
  },
  {
    icon: <FaTrophy className="text-blue-400 text-3xl" />,
    title: "Project-Based Learning",
    description: "Apply skills with real-world projects.",
    bg: "from-[#3B94B3] to-blue-800/20",
  },
];

export default function StepsAbout() {
  return (
    <section className="w-full py-4 px-6 pt-8 pb-6 flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative p-6 rounded-xl shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300"
            style={{
              backgroundImage: `url(${grainImage})`,
              backgroundSize: "cover",
              backgroundBlendMode: "overlay",
              backdropFilter: "blur(30px)",
              WebkitBackdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.2)", // Soft transparent background
            }}
          >
            <div
              className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.bg} opacity-2`}
            />
            <div className="relative z-10 flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="text-xl font-semibold text-white mt-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 mt-2 text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
