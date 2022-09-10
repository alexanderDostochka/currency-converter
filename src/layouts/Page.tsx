import React from "react";
import Header from "../components/Header";

interface PageLayoutInterface {
  children: React.ReactNode;
  header?: boolean;
  name?: string;
}

const PageLayout = ({
  children,
  header = true,
  name = "page-layout",
}: PageLayoutInterface) => (
  <>
    {header && <Header />}
    <div className="background-gradient" />
    <main id={name}>{children}</main>
  </>
);

export default PageLayout;
