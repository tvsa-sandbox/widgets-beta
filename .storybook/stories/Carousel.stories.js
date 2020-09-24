import React, { Fragment } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Utils from "@televisadigital/nxtv-utilities";

import { Title, Box, Image, Carousel } from "accessories";

export default {
    decorators: [withKnobs],
    title: "Desing System/Atoms/Carousel",
};

import Mock from "./imageMock.json";

export const CAROUSEL = args => {
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
        <>
            <Title variant="h2">Carousel</Title>

            <Box my="lg">
                <Carousel>
                    <Box style={{ width: "258px", marginRight: "4px", flex: "0 0 auto" }}>
                        <Image ratio={aspect} src={SRC} key="ejemplo" />
                    </Box>
                    <Box style={{ width: "258px", marginRight: "4px", flex: "0 0 auto" }}>
                        <Image ratio={aspect} src={SRC} key="ejemplo" />
                    </Box>
                    <Box style={{ width: "258px", marginRight: "4px", flex: "0 0 auto" }}>
                        <Image ratio={aspect} src={SRC} key="ejemplo" />
                    </Box>
                    <Box style={{ width: "258px", marginRight: "4px", flex: "0 0 auto" }}>
                        <Image ratio={aspect} src={SRC} key="ejemplo" />
                    </Box>
                    <Box style={{ width: "258px", marginRight: "4px", flex: "0 0 auto" }}>
                        <Image ratio={aspect} src={SRC} key="ejemplo" />
                    </Box>
                </Carousel>
            </Box>
        </>
    );
};
