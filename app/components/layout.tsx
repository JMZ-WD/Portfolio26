import FloatingDots from "../components/FloatingDots";
import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "Full Stack Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative bg-black text-white">
        <FloatingDots /> {/* always visible behind content */}
        {children}
      </body>
    </html>
  );
}