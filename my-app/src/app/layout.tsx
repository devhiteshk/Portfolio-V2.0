import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hitesh Kumar - Software Engineer",
  description:
    "Elevate your projects with Hitesh Kumar, a distinguished professional with a Masters in Automotive Engineering and a silver medalist. Combining a profound understanding of automotive systems with a passion for computer science, Hitesh is currently a leading Software Engineer at a dynamic Tech Startup. With a stellar track record, Hitesh has spearheaded numerous successful projects including SaaS implementations, multi-tenancy solutions, and cutting-edge architecture designs. His extensive skill set encompasses NodeJs, ReactJs, NextJs, Python, C++, C, and GoLang, making him a versatile force in the world of software development. As a proficient MERN stack developer, Hitesh brings a unique blend of expertise in frontend and backend technologies. This proficiency allows him to craft seamless and responsive applications that cater to diverse user needs. In his role, Hitesh leads a dedicated team of 5 developers, driving innovation and excellence in every project. His leadership skills, combined with technical prowess, ensure the seamless execution of projects from conception to delivery. Discover Hitesh's commitment to excellence in both automotive engineering and software development. With his unique blend of skills, he's poised to take your projects to the next level. Contact him now for collaborations that promise innovation, efficiency, and quality. https://hiteshk.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
