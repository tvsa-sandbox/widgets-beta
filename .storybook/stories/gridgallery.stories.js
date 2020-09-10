import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import GridGallery from "../../lib/widgets/GridGallery";

export default {
    decorators: [withKnobs],
    title: "Desing System/enhancement/GridGallery",
};

export const GRIDGALLERY = () => {
    const props = () => ({
        title: text("Titulo", "Titulo de test"),
    });
    return <GridGallery {...props} />;
};
