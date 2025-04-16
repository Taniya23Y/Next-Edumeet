"use client";

// import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins, Josefin_Sans } from "next/font/google";
// import Cursor from "./UI/Cursor";
import { Providers } from "./Provider";
import { SessionProvider } from "next-auth/react";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import Loader from "./components/Loader/Loader";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import socketIO from "socket.io-client";
const ENDPOINT = process.env.NEXT_PUBLIC_SOCKET_SERVER_URI || "";
const socketId = socketIO(ENDPOINT, { transports: ["websocket"] });

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${josefin_sans.variable} bg-[#0A0A0A] scrollbar-custom antialiased`}
      >
        <Providers>
          <SessionProvider>
            {/* <Cursor /> */}
            <ToastContainer position="top-right" theme="colored" />
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

  useEffect(() => {
    socketId.on("connection", () => {});
  }, []);

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
