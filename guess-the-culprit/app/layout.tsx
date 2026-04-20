import type { Metadata } from "next";
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";
import UserRegistration from "@/components/UserRegistration";

export const metadata: Metadata = {
  title: "Guess the Culprit",
  description: "A Detective Conan-themed anime character guessing game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Special+Elite&family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#0a1429] text-[#f5eed5]">
        <SplashScreen />
        <UserRegistration />
        {children}
      </body>
    </html>
  );
}
