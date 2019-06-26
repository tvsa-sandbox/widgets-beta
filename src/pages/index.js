import React from "react";
import Layout from "../layouts";
//import { withPrefix } from "gatsby";

// Components

import Positions from "../components/Positions/Positions";
import Versus from "../components/Versus/Versus";


const IndexPage = () => (
    <Layout>

        <Positions />
        <Versus />

    </Layout>
);

export default IndexPage;
