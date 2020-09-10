import React, { Fragment } from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import Gallery from "../../lib/contentTypes/Gallery";

export default {
    decorators: [withKnobs],
    title: "Desing System/Template/CTGallery",
};

export const GALLERY = () => {
    return <Gallery />;
};
