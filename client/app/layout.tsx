import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Edumeet",
  description: "Edumeet provides structured coding courses from YouTube...",
  keywords:
    "Edumeet, coding courses, programming tutorials, free coding resources, structured learning, YouTube coding, web development, DSA, MERN stack, JavaScript, Python, React, software development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Edumeet</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <body>{children}</body>
    </html>
  );
}
