import React from "react";
import CardPerson from "../components/CardPerson";
import LiveToolBar from "../components/LiveToolBar";
import Footer from "../components/Footer";

const Page = () => (
    <section className="Page WhiteLabel">
        <section className="PageContent__Container WhiteLabel">
            <section className="PageContent__BodyFull WhiteLabel">
                <h1>CardPerson</h1>
                <CardPerson />
            </section>
        </section>
        <LiveToolBar />
        <Footer />
    </section>
);

export default Page;
