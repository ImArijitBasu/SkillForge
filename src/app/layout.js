import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "SkillForge | Master New Skills, Shape Your Future",
  description:
    "SkillForge is a premium online learning platform offering expert-led courses in web development, data science, design, cloud computing, and more. Start your learning journey today.",
  keywords: "online courses, web development, data science, learning platform, skillforge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)] antialiased">
        <AuthProvider>
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 3000,
              style: {
                background: "#141420",
                color: "#f1f5f9",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                fontSize: "14px",
              },
              success: {
                iconTheme: {
                  primary: "#7c3aed",
                  secondary: "#f1f5f9",
                },
              },
              error: {
                iconTheme: {
                  primary: "#ef4444",
                  secondary: "#f1f5f9",
                },
              },
            }}
          />
          <Navbar />
          <main className="flex-1 pt-16 md:pt-18">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
