import React from "react";
import layoutStyles from "@/styles/Layout.module.css";
import Nav from "@/components/Nav";
import Header from "./Header";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={layoutStyles.container}>
        <main className={layoutStyles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
