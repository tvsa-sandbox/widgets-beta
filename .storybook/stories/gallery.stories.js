import React, { Fragment } from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import Gallery from "../../lib/contentTypes/Gallery";

export default {
    decorators: [withKnobs],
    title: "Templete/CTGallery",
};

export const GALLERY = () => {
    return <Gallery />;
};
