// Importing required components and styles
import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer/Footer';

import "./globals.css";
import "./custom.css";

import "../assets/css/fontawesome.min.css";

import { FC, ReactNode } from 'react';
import Motion from '@/components/ui/Motion/Motion';

// Metadata for the application
export const metadata = {
  title: 'Niotech',
  description: 'Generated by npm create next-app --typescript Developed by 3rudit3',  // Website description
}

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body >
        <Header />
        <Motion>
          {children}
        </Motion>
        <Footer />
      </body>
    </html>
  )
}
export default RootLayout;