import React from "react";
import Layout from "../layouts";
//import { withPrefix } from "gatsby";

// Components

import Privacy from "../components/Privacy/Privacy";
import Positions from "../components/Positions/Positions";


const IndexPage = () => (
    <Layout>
        
        <Privacy />
        <Positions />
        
    </Layout>
);

export default IndexPage;
