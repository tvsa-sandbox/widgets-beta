import React, { Fragment } from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import Layout from "../../lib/layout";

export default {
    decorators: [withKnobs],
    title: "Layout",
};

export const LAYOUT = () => {
    return (
        <div>
            <Layout />
        </div>
    );
};
