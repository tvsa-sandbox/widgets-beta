import React from "react";
import Layout from "../layouts";
//import { withPrefix } from "gatsby";

// Components

import Calendar from "../components/Calendar/Calendar";
import NotesCarousel from "../components/NotesCarousel/NotesCarousel";
import Positions from "../components/Positions/Positions";
import Versus from "../components/Versus/Versus";
import SuperCard from "../components/SuperCard/SuperCard";


const IndexPage = () => (
    <Layout>

        <NotesCarousel />
        <Calendar />
        <Positions />
        <Versus />
        <SuperCard />

    </Layout>
);

export default IndexPage;
