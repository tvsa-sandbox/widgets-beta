import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Utils from "@televisadigital/nxtv-utilities";
import { Video } from "../../lib/contentTypes";

import Mock from "./imageMock.json";
import social from "../../lib/items/SocialBox/social.json";

export default {
    decorators: [withKnobs],
    title: "Desing System/Template/Video",
};

const tablinks = [
    {
        tabid: "episodios",
        name: "A CONTINUACION",
    },
    {
        tabid: "clips",
        name: "CLIPS",
    },
    {
        tabid: "comentarios",
        name: "COMENTARIOS",
    },
];

export const VIDEO = args => {
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
    return <Video vidimg={SRC} tabs={tablinks} social={social} />;
};
