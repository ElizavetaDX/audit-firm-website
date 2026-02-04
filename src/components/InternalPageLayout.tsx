import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

type InternalPageLayoutProps = {
  children: React.ReactNode;
};

export function InternalPageLayout({ children }: InternalPageLayoutProps) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
