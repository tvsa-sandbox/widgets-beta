import React from "react";
import Layout from "../layouts";
//import { withPrefix } from "gatsby";

// Components

import Privacy from "../components/Privacy/Privacy";
import NotesCarousel from "../components/NotesCarousel/NotesCarousel";


const IndexPage = () => (
    <Layout>

        <NotesCarousel />
        <Privacy />

    </Layout>
);

export default IndexPage;
