import React from "react";
import Layout from "../layouts";
//import { withPrefix } from "gatsby";

// Components

import DataLight from "../components/DataLight/DataLight";
import SuperCard from "../components/SuperCard/SuperCard";

const IndexPage = () => (
    <Layout>
        <section className="PageContent__Container WhiteLabel">
            <h1>Page</h1>
            <SuperCard />
            <section className="PageContent__Aside WhiteLabel">
                <DataLight />
            </section>
        </section>
    </Layout>
);

export default IndexPage;