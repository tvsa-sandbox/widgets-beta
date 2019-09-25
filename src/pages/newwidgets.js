import React from "react";
import Layout from "../layouts";

// Components

import DataLight from "../components/DataLight/DataLight";
import SuperCard from "../components/SuperCard/SuperCard";
import Thumblist from "../components/Thumblist/Thumblist";
import GalleryMosaic from "../components/GalleryMosaic/GalleryMosaic";

const IndexPage = () => (
    <Layout>
        <section className="PageContent__Container WhiteLabel">
            <h1>Page</h1>
            <SuperCard />
            <section className="PageContent__Aside WhiteLabel">
                <DataLight />
            </section>
        </section>
        <section className="PageContent__Container WhiteLabel">
            <h1>Page</h1>
            <SuperCard />
            <section className="PageContent__Aside WhiteLabel">
                <Thumblist />
            </section>
        </section>
    </Layout>
);

export default IndexPage;