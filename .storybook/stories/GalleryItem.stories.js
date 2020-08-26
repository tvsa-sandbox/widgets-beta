import React, { Fragment } from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import GalleryItem from "../../lib/items/GalleryItem";
import Skeleton from "../../lib/items/GalleryItem/Skeleton";

export default {
    decorators: [withKnobs],
    title: "Gallery Item",
};

export const GALLERYITEM = () => {
    return <GalleryItem />;
};

export const GALLERYITEMSKELETON = () => {
    return <Skeleton />;
};
