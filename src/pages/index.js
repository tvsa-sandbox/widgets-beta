import React from "react";
import Layout from "../layouts";
//import { withPrefix } from "gatsby";

// Components

import Calendar from "../components/Calendar/Calendar";
import Privacy from "../components/Privacy/Privacy";


const IndexPage = () => (
    <Layout>
        <Calendar />
        <Privacy />
    </Layout>
);

export default IndexPage;
