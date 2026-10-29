import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./fdfed_lab3.css";

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
  description: "Course Registration Application - FDFED Lab 3",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function FdfedLab3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.variable} ${manrope.variable} fdfed-lab3-root`}>
      {children}
    </div>
  );
}
