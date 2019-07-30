import React from "react";
import Layout from "../layouts";
//import { withPrefix } from "gatsby";

// Components

import Positions from "../components/Positions/Positions";
import Versus from "../components/Versus/Versus";
import SuperCard from "../components/SuperCard/SuperCard";
import Related1 from "../components/Related1/";
import Related2 from "../components/Related2/";
import Related3 from "../components/Related3/";
import Related4 from "../components/Related4/";
import Calendar from "../components/Calendar/";
import NotesCarousel from "../components/NotesCarousel/";


const IndexPage = () => (
    <Layout>

        <Positions />
        <Versus />
        <SuperCard />
        <Related1 />
        <Related2 />
        <Related3 />
        <Related4 />
        <Calendar />
        <NotesCarousel />

    </Layout>
);

export default IndexPage;
