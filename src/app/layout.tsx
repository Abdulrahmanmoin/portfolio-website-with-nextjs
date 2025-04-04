import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="p64ptPPywsCdA2cJUovk8QR2mS3x1NJMUHO5hm5-Ep8"
        />
        <title>Abdul Rahman Dev | Full Stack Developer Portfolio</title>
        <meta
          name="description"
          content="I'm Abdul Rahman Moin, a passionate Full Stack Developer who builds modern, responsive websites using Next.js, TypeScript, MongoDB, and Tailwind CSS. Explore my latest projects and skills."
        />
      </head>
      <body
        className={`bg-gray-200 text-black ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
