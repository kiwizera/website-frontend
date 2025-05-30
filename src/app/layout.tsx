import './globals.css'
import { Footer, Header } from "@/components";
import { baseURL } from "@/app/resources/config";
import { home } from "@/app/resources/content";

import { Meta } from "@/modules";

import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
});

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
  });
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={geist.className}>
      <head></head>
      <body>
        <div id="app" className="relative z-3">
          <Header />
          <main className='pt-20'>{children}</main>
          <Footer />
        </div>
        <div className="hero-background fixed z-1 w-full top-0"></div>
        <div className='hero-background-2 fixed z-2 w-full top-0'></div>
      </body>
    </html>
  );
}