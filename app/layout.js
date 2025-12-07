import { Exo_2 } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Cancer Awareness & Support",
  description: "A platform focused on cancer awareness and support",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={exo2.className}
      >
        {children}
      </body>
    </html>
  );
}
