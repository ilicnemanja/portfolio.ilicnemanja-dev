import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { GridBackground } from "@/components/ui/grid-background";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ContentProvider } from "@/components/providers/content-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nemanja Ilić | Software Engineer Portfolio",
  authors: [
    {
      name: "Nemanja Ilić",
      url: "https://www.linkedin.com/in/nemanjailic1/",
    },
  ],
  description:
    "Welcome to my personal website. I'm a software engineer specializing in web development, with a focus on both frontend and backend technologies. Let’s build something amazing together!",
  keywords: [
    "Nemanja Ilić",
    "Nemanja",
    "Ilić",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GridBackground>
            <ContentProvider>{children}</ContentProvider>
          </GridBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}
