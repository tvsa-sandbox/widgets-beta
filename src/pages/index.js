import React from "react";
import Layout from "../layouts";
//import { withPrefix } from "gatsby";

// Components

import Calendar from "../components/Calendar/Calendar";
import NotesCarousel from "../components/NotesCarousel/NotesCarousel";
import Privacy from "../components/Privacy/Privacy";


const IndexPage = () => (
    <Layout>

        <NotesCarousel />
        <Calendar />
        <Privacy />


    </Layout>
);

export default IndexPage;
