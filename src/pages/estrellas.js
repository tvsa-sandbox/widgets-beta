import React from "react";
import Layout from "../layouts";
//import { withPrefix } from "gatsby";

// Components

import Calendar from "../components/Calendar/Calendar";
import NotesCarousel from "../components/NotesCarousel/NotesCarousel";

const IndexPage = () => (
    <Layout>

        <NotesCarousel />
        <Calendar />

    </Layout>
);

export default IndexPage;
