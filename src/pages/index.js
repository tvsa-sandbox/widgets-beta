import React from "react";
import Layout from "../layouts";
//import { withPrefix } from "gatsby";

// Components

import Privacy from "../components/Privacy/Privacy";
import SuperCard from "../components/SuperCard/SuperCard";


const IndexPage = () => (
    <Layout>
    
        <SuperCard />
        <Privacy />

    </Layout>
);

export default IndexPage;
