import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function CenterAligner({ children, className = "" }: Props) {
  return (
    <section
      className={`flex items-center justify-center pt-2 mb-16 rounded-xl ${className}`}
    >
      <div className="max-w-[1300px] w-full mx-auto px-4 rounded-xl">
        {children}
      </div>
    </section>
  );
}
