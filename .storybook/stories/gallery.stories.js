import React, { Fragment } from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import Gallery from "../../lib/contentTypes/Gallery";

export default {
    decorators: [withKnobs],
    title: "CT Gallery",
};

export const GALLERY = () => {
    return <Gallery />;
};
