import React from "react";
import Layout from "../layouts";
//import { withPrefix } from "gatsby";

// Components

import Positions from "../components/Positions/Positions";
import Versus from "../components/Versus/Versus";
import GridGallery from "../components/GridGallery/GridGallery";


const IndexPage = () => (
    <Layout>

        <Positions />
        <Versus />
        <GridGallery />

    </Layout>
);

export default IndexPage;
