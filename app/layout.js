import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Moodboard",
  description: "Track your daily mood everyday"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins} antialiased w-full max-w-[1400px] text-sm sm:text-base flex flex-col m-auto`}
      >
        {children}
      </body>
    </html>
  );
}
