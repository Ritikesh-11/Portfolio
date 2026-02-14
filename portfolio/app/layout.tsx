import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Ritikesh Machhewar | Ritikesh Portfolio | AI & Data Science Enthusiast",
  description: "Portfolio of Ritikesh Shankar Machhewar - AI & Data Science Enthusiist. View projects in Machine Learning, Python, React, Next.js, and software development. Ritikesh Portfolio showcasing AI, Data Science, and innovative tech solutions.",
  keywords: [
    "Ritikesh",
    "Ritikesh Machhewar", 
    "Ritikesh Portfolio",
    "Ritikesh shankar machhewar",
    "ritikesh shankar machhewar portfolio",
    "Ritikesh Shankar Machhewar",
    "AI Portfolio",
    "Data Science Portfolio",
    "Machine Learning Developer",
    "AI Engineer",
    "Data Scientist",
    "Python Developer",
    "React Developer",
    "Next.js Developer",
    "Software Developer",
    "Artificial Intelligence",
    "Portfolio Website",
    "Personal Portfolio"
  ],
  authors: [{ name: "Ritikesh Shankar Machhewar" }],
  creator: "Ritikesh Shankar Machhewar",
  publisher: "Ritikesh Shankar Machhewar",
  icons: {
    icon: [
      {
        url: "/favicon.png",
        sizes: "any",
      },
    ],
  },
  openGraph: {
    title: "Ritikesh Machhewar - AI & Data Science Enthusiast",
    description: "Personal portfolio showcasing AI and Data Science projects",
    type: "website",
    siteName: "Ritikesh Machhewar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritikesh Machhewar - AI & Data Science Enthusiast",
    description: "Personal portfolio showcasing AI and Data Science projects",
creator: "@Ritikesh-11",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'B2m9gonpsjWhoVlWMOYclpQP8JzoV1dimjIbx26PM2I',
  },
  other: {
    'google-site-verification': 'B2m9gonpsjWhoVlWMOYclpQP8JzoV1dimjIbx26PM2I'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
