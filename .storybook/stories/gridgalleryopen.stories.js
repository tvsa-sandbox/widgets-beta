import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import GridGalleryOpen from "../../lib/widgets/GridGalleryOpen";

export default {
    decorators: [withKnobs],
    title: "Desing System/enhancement/GridGalleryOpen",
};

export const GRIDGALLERYOPEN = () => {
    const props = () => ({
        title: text("Titulo", "Titulo de test"),
    });
    return <GridGalleryOpen {...props} />;
};
