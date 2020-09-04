import React, { Fragment } from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import ArticlePWA from "../../lib/contentTypes/PWA/ArticlePWA";

export default {
    decorators: [withKnobs],
    title: "ArticlePWA",
};

export const ARTICLEPWA = () => {
    return (
        <div>
            <ArticlePWA>casa</ArticlePWA>
        </div>
    );
};
