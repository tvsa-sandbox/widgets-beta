import React from "react";
import HighImpactCenteredLeftItems from "./HighImpactCentered_LeftItems/HighImpactCentered_LeftItems";
import HighImpactCenteredSlider from "./HighImpactCentered_Slider/HighImpactCentered_Slider";
import HighImpactCenteredRightItems from "./HighImpactCentered_RightItems/HighImpactCentered_RightItems";

const HighImpactCentered = () => (
    <section className="HighImpactCentered WhiteLabel">
        <HighImpactCenteredLeftItems />
        <HighImpactCenteredSlider />
        <HighImpactCenteredRightItems />
    </section>
);

export default HighImpactCentered;
