import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-6xl">
        {children}
      </div>
      <Footer />
    </>
  );
}
