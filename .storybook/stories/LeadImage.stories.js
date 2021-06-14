import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";

import LeadImage from "../../lib/widgets/LeadImage";

import Mock from "./imageMock.json";

export default {
    title: "Desing System/Leads/LeadImage",
};

export const LEADIMAGE = args => {
    const { aspect = "aspect16x9", bsp = "medium" } = args;
    const SOURCES = [
        {
            aspect,
            query: "(min-width: 0px)",
            size: bsp,
        },
    ];
    const IMG = Utils.getSources(Mock.renditions, SOURCES);
    const SRC = {
        desktop: {},
        mobile: IMG[0],
    };

    return (
        <div>
            <Title variant="h2">Lead Image</Title>
            <LeadImage ratio={aspect} src={SRC} />
        </div>
    );
};
