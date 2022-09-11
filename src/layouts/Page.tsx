import React from "react";
import Header from "../components/Header";

interface PageLayoutInterface {
  children: React.ReactNode;
  isUpdateRates?: boolean;
  header?: boolean;
  name?: string;
}

const PageLayout = ({
  children,
  header = true,
  isUpdateRates = false,
  name = "page-layout",
}: PageLayoutInterface) => (
  <>
    {header && <Header isUpdateRates={isUpdateRates} />}
    <div className="background-gradient" />
    <main id={name}>{children}</main>
  </>
);

export default PageLayout;
