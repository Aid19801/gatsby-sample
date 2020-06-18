import React from "react";
import Header from '../components/header';
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Header>
    <SEO title="Home" />
    <h1>Funk Digital</h1>
    <p>This is a sample site for the Gatsby crash course</p>
  </Header>
);

export default IndexPage
