import React from "react";
import Layout from "../layouts";
//import { withPrefix } from "gatsby";

// Components

import Related1 from "../components/Related1/";
import Related2 from "../components/Related2/";
import Related3 from "../components/Related3/";
import Related4 from "../components/Related4/";
import Calendar from "../components/Calendar/";
import NotesCarousel from "../components/NotesCarousel/";
import GridGallery from "../components/GridGallery/GridGallery";


const IndexPage = () => (
    <Layout>

        <Related1 />
        <Related2 />
        <Related3 />
        <Related4 />
        <Calendar />
        <NotesCarousel />
        <GridGallery />

    </Layout>
);

export default IndexPage;
