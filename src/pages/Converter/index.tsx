import React from "react";
import Box from "../../components/Box";
import translate from "../../constants/translate";
import PageLayout from "../../layouts/Page";
import FormConverter from "./Form";

const Converter = () => {
  return (
    <PageLayout name="home-page">
      <div className="container">
        <div className="application-name">
          <h1>{translate.home.title}</h1>
          <p>{translate.home.description}</p>
        </div>
        <div className="converter">
          <Box>
            <FormConverter />
          </Box>
        </div>
      </div>
    </PageLayout>
  );
};

export default Converter;
