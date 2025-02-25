"use client";

// import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins, Josefin_Sans } from "next/font/google";
import Cursor from "./UI/Cursor";
import { Providers } from "./Provider";
import { SessionProvider } from "next-auth/react";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import Loader from "./components/Loader/Loader";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins",
  display: "swap",
});

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Josefin_Sans",
  display: "swap",
});

// export const metadata: Metadata = {
//   title: "Edumeet | Learning Hub",
//   description: "Edumeet provides structured coding courses from YouTube...",
//   keywords:
//     "Edumeet, coding courses, programming tutorials, free coding resources, structured learning, YouTube coding, web development, DSA, MERN stack, JavaScript, Python, React, software development",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${josefin_sans.variable} bg-[#0A0A0A] scrollbar-custom antialiased`}
      >
        <Providers>
          <SessionProvider>
            <Cursor />
            <Toaster position="top-right" reverseOrder={false} />
            <Custom>{children}</Custom>
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}

const Custom: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading } = useLoadUserQuery({});
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {isLoading || !showContent ? (
        <Loader onComplete={() => setShowContent(true)} />
      ) : (
        children
      )}
    </>
  );
};
