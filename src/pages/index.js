import React from "react";
import Layout from "../layouts";
//import { withPrefix } from "gatsby";

// Components

import Related1 from "../components/Related1/Related1";
import Related2 from "../components/Related2/Related2";
import Related3 from "../components/Related3/Related3";
import Related4 from "../components/Related4/Related4";


const IndexPage = () => (
    <Layout>

        <Related1 />
        <Related2 />
        <Related3 />
        <Related4 />

    </Layout>
);

export default IndexPage;
