import React from "react";
import Layout from "../layouts";
//import { withPrefix } from "gatsby";

// Components

import Privacy from "../components/Privacy/Privacy";
import Share from "../components/Share/Share";
import Mosaic from "../components/Mosaic";
import Calendar from "../components/Calendar/Calendar";
import NotesCarousel from "../components/NotesCarousel/NotesCarousel";
import Positions from "../components/Positions/Positions";
import Versus from "../components/Versus/Versus";



const IndexPage = () => (
    <Layout>

        <Positions />
        <Versus />
        <Privacy />
        <Mosaic />
        <Share />


    </Layout>
);

export default IndexPage;
