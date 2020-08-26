import React, { Fragment } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Title, Box } from "accessories";

import HeaderAMP from "../../lib/widgets/Header/HeaderAMP";

export default {
    decorators: [withKnobs],
    title: "Header",
};

export const HEADERAMP = () => {
    return (
        <div>
            <Title variant="h2">Header AMP</Title>
            <HeaderAMP />
        </div>
    );
};
