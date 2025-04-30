import { ReactNode } from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import { PromoBanner } from "../promo-banner";

interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <PromoBanner />
      <Header />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
