// Importing required components and styles
import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer/Footer';

import "./globals.css";

import "../assets/css/fontawesome.min.css";

import { FC, ReactNode } from 'react';

// Metadata for the application
export const metadata = {
  title: 'Niotech',
  description: 'Generated by pnpm create next-app --typescript Developed by 3rudit3',  // Website description
}

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
export default RootLayout;