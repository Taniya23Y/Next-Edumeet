import {
  BookOpen,
  Brackets,
  Brain,
  Bug,
  ChevronDown,
  Code,
  Contact,
  Cpu,
  Database,
  FileText,
  FlaskConical,
  Home,
  Layers,
  LayoutPanelTop,
  Network,
  // NotebookText,
  Palette,
  Server,
  Shield,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { IoBookOutline } from "react-icons/io5";

export const navItemsData = [
  { id: 1, icon: <Home size={14} />, label: "Home", url: "/" },
  { id: 2, icon: <LayoutPanelTop size={15} />, label: "Catelog" }, // Dropdown
  {
    id: 3,
    icon: <IoBookOutline size={14} />,
    label: "Course",
    url: "/courses",
  },
  { id: 3, icon: <UserRound size={14} />, label: "About us", url: "/about" },
  // { id: 4, icon: <NotebookText size={14} />, label: "Blog", url: "/blog" },
  { id: 5, icon: <Contact size={14} />, label: "Contact us", url: "/contact" },
];

export const categories = [
  {
    name: "Programming Language",
    icon: <BookOpen size={20} />,
    // url: "/course/programming-language",
    url: "/category",
  },
  {
    name: "Web Development",
    icon: <Code size={20} />,
    // url: "/course/web-development",
    url: "/category",
  },
  {
    name: "Frontend Development",
    icon: <FileText size={20} />,
    // url: "/course/frontend-development",
    url: "/category",
  },
  {
    name: "Backend Development",
    icon: <Server size={20} />,
    // url: "/course/backend-development",
    url: "/category",
  },
  {
    name: "Full Stack Development",
    icon: <Layers size={20} />,
    // url: "/course/fullstack-development",
    url: "/category",
  },
  {
    name: "Data Structures & Algorithms",
    icon: <Brackets size={20} />,
    // url: "/course/data-structure-algo",
    url: "/category",
  },
  {
    name: "Database Management",
    icon: <Database size={20} />,
    // url: "/course/database-management",
    url: "/category",
  },
  {
    name: "Blockchain Development",
    icon: <Network size={20} />,
    // url: "/course/blockchain-development",
    url: "/category",
  },
  {
    name: "Devops",
    icon: <Cpu size={20} />,
    // url: "/course/Devops",
    url: "/category",
  },
  {
    name: "Artificial Intelligence",
    icon: <Brain size={20} />,
    // url: "/course/ai",
    url: "/category",
  },
  {
    name: "Machine Learning",
    icon: <FlaskConical size={20} />,
    // url: "/course/ml",
    url: "/category",
  },
  {
    name: "Software Testing & QA",
    icon: <Bug size={20} />,
    // url: "/course/software-testing-qa",
    url: "/category",
  },
  {
    name: "Data Science",
    icon: <Database size={20} />,
    // url: "/course/data-science",
    url: "/category",
  },
  {
    name: "UI/UX Design",
    icon: <Palette size={20} />,
    // url: "/course/ui-ux"
    url: "/category",
  },
  {
    name: "Cyber Security",
    icon: <Shield size={20} />,
    // url: "/course/cyber-security",
    url: "/category",
  },
];

type Props = {
  setOpen: (open: boolean) => void;
  setRoute: (route: string) => void;
  isMobile: boolean;
};

const NavItems: React.FC<Props> = ({ isMobile, setRoute, setOpen }) => {
  const [isCatelogOpen, setIsCatelogOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setIsCatelogOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsCatelogOpen(false);
    }, 100); // Keep dropdown open for 1 seconds
    setHoverTimeout(timeout);
  };

  return (
    <>
      <div className="hidden md:flex gap-9 text-[14px] text-white rounded-xl p-2 border-[0.5px] border-[#ffffff13] z-2">
        {navItemsData &&
          navItemsData.map((item, index) =>
            item.label === "Catelog" ? (
              <div
                key={index}
                className="relative group cursor-pointer flex items-center gap-1 hover:text-yellow"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex justify-center items-center gap-1">
                  <span>
                    <LayoutPanelTop size={14} />
                  </span>
                  <span>Catelog</span>
                </div>
                <ChevronDown size={16} />
                {isCatelogOpen && (
                  <div
                    className="absolute left-1/2 top-9 w-[50rem] -translate-x-1/2 bg-[#222] text-white rounded-lg shadow-lg p-4 transition-all duration-300"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="flex items-start justify-start gap-3 border-b border-gray-600">
                      <h3 className="text-purple-400 text-lg font-semibold mb-3 px-3 pb-2">
                        Courses
                      </h3>
                      <p className="text-[#6a6b6b] text-[15px] font-Inter font-light mb-3 px-3">
                        Explore our free, expertly curated courses 💫 to boost
                        your skills and knowledge, and learn, grow, and excel
                        with our engaging and insightful lessons 🚀.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 pt-2">
                      {categories.map((category, i) => (
                        <Link
                          key={i}
                          href={category.url}
                          className="flex items-center gap-2 px-3 py-3 hover:bg-[#333] rounded-md cursor-pointer hover:text-yellow"
                        >
                          {category.icon}
                          <span className="text-left font-Inter">
                            {category.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                href={item.url ?? "#"}
                className="cursor-pointer hover:text-yellow hover:underline"
              >
                <div className="flex gap-1 items-center justify-center">
                  {item.icon} {item.label}
                </div>
              </Link>
            )
          )}
      </div>

      {/* for mobile  */}
      {isMobile && (
        <div>
          {/* Mobile Menu */}
          <div className="fixed top-0 left-0 h-full w-[95%] bg-[#151515] p-6 flex flex-col gap-4 shadow-lg overflow-y-auto scrollbar-custom">
            {navItemsData &&
              navItemsData.map((item, index) =>
                item.label === "Catelog" ? (
                  <div key={index} className="w-full">
                    <div
                      className="text-white cursor-pointer hover:text-yellow flex items-center gap-1"
                      onClick={() => setIsCatelogOpen(!isCatelogOpen)}
                    >
                      {item.icon} {item.label} <ChevronDown size={16} />
                    </div>
                    {isCatelogOpen && (
                      <div className="mt-2 bg-[#222] text-white rounded-lg shadow-lg p-4 gap-2 transition-all duration-300">
                        <h3 className="text-purple-400 text-lg font-semibold mb-3 px-3 border-b border-gray-600 pb-2">
                          Courses
                        </h3>
                        <div>
                          <div className="grid grid-cols-2 gap-3">
                            {categories &&
                              categories.map((category, i) => (
                                <Link
                                  key={i}
                                  href={category.url}
                                  className="flex items-center gap-2 px-3 py-2 hover:bg-[#333] rounded-md cursor-pointer hover:text-yellow"
                                >
                                  {category.icon}
                                  <span className="text-left">
                                    {category.name}
                                  </span>
                                </Link>
                              ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={index}
                    href={item.url ?? "#"}
                    className="text-white cursor-pointer hover:text-yellow hover:underline "
                  >
                    <div className="w-1/3 flex gap-1 items-center ">
                      {item.icon} {item.label}
                    </div>
                  </Link>
                )
              )}
            <button
              className="w-1/3 bg-[#1ef397] rounded-xl font-bold px-5 py-1 text-black hover:bg-[#48eea6]"
              onClick={() => {
                setRoute("Login");
                setOpen(true);
              }}
            >
              Login
            </button>
            <button
              className="w-1/3 bg-[#1ef397] text-black rounded-tl-2xl rounded-br-2xl font-bold px-5 py-1 hover:bg-[#48eea6]"
              onClick={() => {
                setRoute("Sign-Up");
                setOpen(true);
              }}
            >
              Signup
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavItems;
