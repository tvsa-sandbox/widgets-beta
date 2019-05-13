import React from "react";
import Layout from "../layouts";
//import { withPrefix } from "gatsby";

// Components

import Calendar from "../components/Calendar/Calendar";
import NotesCarousel from "../components/NotesCarousel/NotesCarousel";
import Positions from "../components/Positions/Positions";


const IndexPage = () => (
    <Layout>

        <NotesCarousel />
        <Calendar />
        <Positions />

    </Layout>
);

export default IndexPage;
