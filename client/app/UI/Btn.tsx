import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  active: boolean;
  linkto: string;
}

const Btn: React.FC<ButtonProps> = ({ children, active, linkto }) => {
  return (
    <Link href={linkto}>
      <div
        className={`relative text-center underline text-[13px] sm:text-[16px] px-6 py-3 rounded-tl-2xl rounded-br-2xl rounded-tr-2xl font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]
        ${active ? "bg-yellow text-black" : "bg-purple-400 text-white"}
        hover:scale-95 transition-all duration-200 hover:shadow-none
        before:content-[''] before:absolute before:bottom-0 before:right-0 before:rounded-2xl before:w-full before:h-full before:bg-[rgba(255,255,255,0.1)] before:backdrop-blur-sm before:transition-transform before:duration-300 before:translate-x-2 before:translate-y-2 before:z-[-1]
        after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[25px] after:h-[25px] after:rounded-full after:bg-[rgba(255,255,255,0.08)] after:backdrop-blur-md after:transition-transform after:duration-300 after:translate-x-3 after:translate-y-3 after:z-[-1]
        hover:before:translate-x-0 hover:before:translate-y-0 hover:after:translate-x-0 hover:after:translate-y-0
        `}
      >
        {children}
      </div>
    </Link>
  );
};

export default Btn;
