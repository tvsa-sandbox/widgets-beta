import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import Utils from "@televisadigital/nxtv-utilities";

import ArticlePWA from "../../lib/contentTypes/PWA/ArticlePWA";

export default {
    decorators: [withKnobs],
    title: "Desing System/Template/ArticlePWA",
};

import Mock from "./imageMock.json";

export const ARTICLEPWA = args => {
    const { aspect = "aspect16x9", bsp = "medium" } = args;
    const SOURCES = [
        {
            aspect: aspect,
            query: "(min-width: 415px)",
            size: bsp,
        },
        {
            aspect: aspect,
            query: "(min-width: 415px)",
            size: "thumbnail",
        },
        {
            aspect: "aspect1x1",
            query: "(min-width: 0px)",
            size: "medium",
        },
    ];
    const IMG = Utils.getSources(Mock.renditions, SOURCES);
    const SRC = {
        imgenhancement: [
            {
                desktop: {},
                mobile: IMG[0],
            },
        ],
        gridgallery: [
            {
                desktop: {},
                mobile: IMG[2],
            },
        ],
        carousel: [
            {
                desktop: {},
                mobile: IMG[1],
            },
        ],
    };
    return (
        <ArticlePWA
            grid={SRC.gridgallery[0]}
            imgs={SRC.imgenhancement[0]}
            carrousel={SRC.carousel[0]}
            rel={SRC.imgenhancement[0]}
        />
    );
};
