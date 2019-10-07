import React from "react";
import Layout from "../layouts";

// Components

import DataLight from "../components/DataLight/DataLight";
import SuperCard from "../components/SuperCard/SuperCard";
import Thumblist from "../components/Thumblist/Thumblist";
import EventList from "../components/EventList/EventList";
import MiniCard from "../components/MiniCard/MiniCard";

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
        <section className="PageContent__Container WhiteLabel">
            <h1>Page</h1>
            <SuperCard />
            <section className="PageContent__Aside WhiteLabel">
                <EventList />
            </section>
        </section>
        <section className="PageContent__Container WhiteLabel">
            <h1>Page</h1>
            <SuperCard />
            <section className="PageContent__Aside WhiteLabel">
                <MiniCard />
            </section>
        </section>
    </Layout>
);

export default IndexPage;
