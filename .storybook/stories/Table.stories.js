import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";

import Table from "../../lib/widgets/Table";

import Mock from "./imageMock.json";

export default {
    title: "Desing System/TUDN/Table",
    component: Table,
};

export const TABLE = args => {
    const { aspect = "aspect1x1", bsp = "thumbnail" } = args;
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
            <Title variant="h2">Table</Title>
            <Table ratio={aspect} src={SRC}/>
        </div>
    );
};
