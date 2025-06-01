import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import { Mochiy_Pop_One } from "next/font/google";
import { Mitr } from "next/font/google";

export const fontMitr = Mitr({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["thai", "latin"],
  variable: "--font-mitr",
});

export const fontMochiy = Mochiy_Pop_One({
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-mochiy",
});

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
