import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./fdfef_lab.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Course Registration",
  description: "Course Registration Application - FDFEF Lab",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function FdfefLabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.variable} ${manrope.variable} fdfef-lab-root`}>
      {children}
    </div>
  );
}
