import React from "react";
import Layout from "../layouts";
//import { withPrefix } from "gatsby";

// Components

import Privacy from "../components/Privacy/Privacy";
import Calendar from "../components/Calendar/Calendar";


const IndexPage = () => (
    <Layout>
        <Privacy />
        <Calendar />
    </Layout>
);

export default IndexPage;
