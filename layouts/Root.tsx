import { ReactNode } from "react";
import MainNavbar from "../components/Navbar/MainNavbar";

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
      <footer className="app-footer">Coded by Ronny Endara</footer>
    </div>
  );
}

export default Root;
