import "./globals.css";
import styles from "./layout.module.css"; // Import the CSS module
import ClientWrapper from "./ClientWrapper";
import { Manrope } from "next/font/google";

// Manrope font setup
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={styles.rootBody}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}