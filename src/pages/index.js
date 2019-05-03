import React from "react";
import Layout from "../layouts";
//import { withPrefix } from "gatsby";

// Components

import Privacy from "../components/Privacy/Privacy";
import Share from "../components/Share/Share";


const IndexPage = () => (
    <Layout>

        <Privacy />
        <Share />

    </Layout>
);

export default IndexPage;
