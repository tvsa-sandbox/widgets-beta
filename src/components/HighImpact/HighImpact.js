import React from "react";
import HighImpactFull from "./HighImpactFull/HighImpactFull";
import HighImpactCentered from "./HighImpactCentered/HighImpactCentered";
import HighImpactJustifiedLeftTypeC from "./HighImpactJustifiedLeftTypeC/HighImpactJustifiedLeftTypeC";
import HighImpactJustifiedLeft from "./HighImpactJustifiedLeft/HighImpactJustifiedLeft";

const HighImpact = () => (
    <div className="HighImpactTest WhiteLabel">
        <HighImpactFull />
        <HighImpactCentered />
        <HighImpactJustifiedLeftTypeC />
        <HighImpactJustifiedLeft />
    </div>
);

export default HighImpact;
