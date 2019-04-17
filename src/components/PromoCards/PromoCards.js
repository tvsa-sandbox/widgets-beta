import React from "react";
import PromoCardsChapter from "./PromoCardsChapter";
import PromoCardsSection from "./PromoCardsSection";
import PromoCardsShow from "./PromoCardsShow";
import PromoCardsButtonNavigation from "./PromoCardsButtonNavigation";

const PromoCards = () => (
    <section className="PromoCards">
        <PromoCardsShow />
        <PromoCardsChapter />
        <PromoCardsSection />
		<PromoCardsButtonNavigation />
    </section>
);

export default PromoCards;
