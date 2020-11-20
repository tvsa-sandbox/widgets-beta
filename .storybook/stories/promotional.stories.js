import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Utils from "@televisadigital/nxtv-utilities";
import Mock from "./imageMock-le.json";

import { Title } from "accessories";
import { Promotional } from "../../lib/widgets";

export default {
    decorators: [withKnobs],
    title: "Desing System/widgets/Promotional",
};

export const PROMOTIONAL = args => {
    const { aspect = "aspectpanoramic", bsp = "mobile-large" } = args;
    const SOURCES = [
        {
            aspect: aspect,
            query: "(min-width: 415px)",
            size: "x-large",
        },
        {
            aspect: "aspect3x4",
            query: "(min-width: 0px) and (max-width: 414px)",
            size: bsp,
        },
    ];
    const IMG = Utils.getSources(Mock.renditions, SOURCES);
    const SRC = {
        desktop: IMG[0],
        mobile: IMG[1],
    };
    return (
        <div>
            <Title variant="h2">Promotional</Title>
            <Promotional
                title="La Voz"
                date="Sábado 2:30 pm"
                btntext="Todo sobre episodio 10"
                imgsrc={SRC}
            />
        </div>
    );
};
