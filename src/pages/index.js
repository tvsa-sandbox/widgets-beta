import React from "react";
import Layout from "../layouts";
//import { withPrefix } from "gatsby";

// Components

import Privacy from "../components/Privacy/Privacy";
import Share from "../components/Share/Share";
import Mosaic from "../components/Mosaic";


const IndexPage = () => (
    <Layout>

        <Privacy />
        <Mosaic />
        <Share />


    </Layout>
);

export default IndexPage;
