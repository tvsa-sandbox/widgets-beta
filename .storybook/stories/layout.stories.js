import React, { Fragment } from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import Layout from "../../lib/layout";

export default {
    decorators: [withKnobs],
    title: "Templete/Layout",
};

export const LAYOUT = () => {
    return (
        <div>
            <Layout />
        </div>
    );
};
