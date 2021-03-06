import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "../../lib/accessories";
import Ticker from "../../lib/widgets/Ticker";
import Mock from "./imageMock.json";

export default {
    title: "Desing System/TUDN/Ticker",
};

export const TICKER = args => {
    const { aspect = "aspect1x1", bsp = "medium" } = args;
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
            <Title variant="h2">Ticker</Title>
            <Ticker ratio={aspect} src={SRC} />
        </div>
    );
};