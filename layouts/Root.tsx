import { ReactNode } from "react";
import MainNavbar from "../components/Navbar/MainNavbar";
import Footer from "../components/Footer";

interface Props {
  children?: ReactNode;
}

function Root({ children }: Props) {
  return (
    <div className="app">
      <header className="app-header">
        <MainNavbar />
      </header>
      <main className="app-main">{children}</main>
      <Footer className="app-footer" />
    </div>
  );
}

export default Root;
