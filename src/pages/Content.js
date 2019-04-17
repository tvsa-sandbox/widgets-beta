import React from "react";
import Header from "../components/Header/Header";
import MostViewed from "../components/MostViewed";
import FiveItems from "../components/FiveItems";
import HighImpactFull from "../components/HighImpact/HighImpactFull";
import HighImpactCentered from "../components/HighImpact/HighImpactCentered";
import HighImpactJustifiedLeft from "../components/HighImpact/HighImpactJustifiedLeft";
import HighImpactJustifiedLeftTypeC from "../components/HighImpact/HighImpactJustifiedLeftTypeC";
import InlineVideo from "../components/InlineVideo";
import InlineGallery from "../components/InlineGallery";
// import Items from "../components/Items";
import SocialFollow from "../components/SocialFollow";
import SixItems from "../components/SixItems";
import CardPerson from "../components/CardPerson";
import ContentCarousel from "../components/ContentCarousel";
import PromoCardsShow from "../components/PromoCards/PromoCardsShow";
import PromoCardsChapter from "../components/PromoCards/PromoCardsChapter";
import PromoCardsSection from "../components/PromoCards/PromoCardsSection";
import TvGuide from "../components/TvGuide";
import TvGuideFull from "../components/TvGuideFull";
import Stack from "../components/Stack";
import LiveToolBar from "../components/LiveToolBar";
import Footer from "../components/Footer";

const Page = () => (
    <section className="Page WhiteLabel">
        <Header />
        <section className="PageContent WhiteLabel">
            <section className="PageContent__Lead WhiteLabel">
                <HighImpactFull />
            </section>
        </section>
            <TvGuide />
        <section className="PageContent__Container WhiteLabel">
            <section className="PageContent__Body WhiteLabel">
                <h1>Page</h1>
                <FiveItems />
            </section>
            <section className="PageContent__Aside WhiteLabel">
                <MostViewed />
            </section>
        </section>
        <section className="PageContent__Container WhiteLabel">
            <section className="PageContent__BodyFull WhiteLabel">
                <h1>Page</h1>
                <HighImpactCentered />
            </section>
        </section>
        <section className="PageContent__Container WhiteLabel">
            <section className="PageContent__Body WhiteLabel">
                <FiveItems />
            </section>
            <section className="PageContent__Aside WhiteLabel">
                RichText
            </section>
        </section>
        <section className="PageContent__BodyFull WhiteLabel">
            <h1>Page</h1>
            <HighImpactJustifiedLeft />
        </section>
        <section className="PageContent__BodyFull WhiteLabel">
            <h1>Page</h1>
            <HighImpactJustifiedLeftTypeC />
        </section>
        <section className="PageContent__Container WhiteLabel">
            <section className="PageContent__Body WhiteLabel">
                <h1>Page</h1>
                <InlineVideo />
            </section>
            <section className="PageContent__Aside WhiteLabel">
                <SocialFollow />
            </section>
        </section>
        <section className="PageContent__Container-Left WhiteLabel">
            <section className="PageContent__Aside WhiteLabel">
                <h1>Page</h1>
                <SocialFollow />
            </section>
            <section className="PageContent__Body WhiteLabel">
                <InlineVideo />
            </section>
        </section>
        <section className="PageContent__BodyFull WhiteLabel">
            <h1>Page</h1>
            <Stack />
        </section>
        <section className="PageContent__BodyFull WhiteLabel">
            <h1>Page</h1>
            <InlineGallery />
        </section>
        <section className="PageContent__BodyFull WhiteLabel">
            <h1>Page</h1>
            <SixItems />
        </section>
        <section className="PageContent__BodyFull WhiteLabel">
            <h1>Page</h1>
            <CardPerson />
        </section>
        <section className="PageContent__BodyFull WhiteLabel">
            <h1>Page</h1>
            <ContentCarousel />
        </section>
        <section className="PageContent__BodyFull WhiteLabel">
            <h1>Page</h1>
            <PromoCardsShow />
        </section>
        <section className="PageContent__BodyFull WhiteLabel">
            <h1>Page</h1>
            <PromoCardsChapter />
        </section>
        <section className="PageContent__BodyFull WhiteLabel">
            <h1>Page</h1>
            <PromoCardsSection />
        </section>
        <section className="PageContent__Container WhiteLabel">
            <section className="PageContent__BodyFull WhiteLabel">
                <h1>Page</h1>
                <TvGuideFull />
            </section>
        </section>
        <LiveToolBar />
        <Footer />
    </section>
);

export default Page;
