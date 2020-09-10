import React, { Fragment } from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import ItemCarousel from "../../lib/items/ItemCarousel";
import SkeletonCarousel from "../../lib/items/ItemCarousel/SkeletonCarousel";

export default {
    decorators: [withKnobs],
    title: "Desing System/Items/Carousel",
};

export const ITEMCAROUSEL = () => {
    return <ItemCarousel />;
};

export const CAROUSELITEMSKELETON = () => {
    return <SkeletonCarousel />;
};
