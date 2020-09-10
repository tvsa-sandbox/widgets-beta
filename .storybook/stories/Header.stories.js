import React, { Fragment } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Title } from "accessories";

import HeaderAMP from "../../lib/widgets/Header/HeaderAMP";
import Layout from "../../lib/layout";

export default {
    decorators: [withKnobs],
    title: "Desing System/Widgets/Header",
};

export const HEADERAMP = () => {
    return (
        <div>
            <Title variant="h2">Header AMP</Title>
            <HeaderAMP />
        </div>
    );
};

export const HEADER = () => {
    return (
        <div>
            <Layout foot={false} />
        </div>
    );
};
