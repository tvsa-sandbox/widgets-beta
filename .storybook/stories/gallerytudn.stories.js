import React, { Fragment } from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import GalleryTUDN from "../../lib/contentTypes/GalleryTUDN";

export default {
    decorators: [withKnobs],
    title: "CT Gallery TUDN",
};

export const GALLERYTUDN = () => {
    return <GalleryTUDN />;
};
