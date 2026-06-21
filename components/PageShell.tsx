import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * Shared page layout: renders the Navbar and Footer around page content
 * so every route satisfies the "Navbar + Footer on each page" requirement.
 * @prop children - the page's main content
 */
export default function PageShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
