import React, { Fragment } from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { Image, Placeholder, Title, Box } from "accessories";

export default {
    decorators: [withKnobs],
    title: "Desing System/Atoms/Images",
};

export const PLACEHOLDER = () => (
    <>
        <Title variant="h2">Placeholders</Title>

        <Box my="lg">
            <Placeholder ratio="aspect1x1" />
            <Image ratio="aspect16x9" />
        </Box>

        <Box my="lg">
            <Placeholder ratio="aspect3x4" />
        </Box>

        <Box my="lg">
            <Placeholder ratio="aspect4x3" />
        </Box>

        <Box my="lg">
            <Placeholder ratio="aspect9x16" />
        </Box>

        <Box my="lg">
            <Placeholder ratio="aspect16x9" />
        </Box>

        <Box my="lg">
            <Placeholder ratio="aspect40x17" />
        </Box>

        <Box my="lg">
            <Placeholder ratio="aspect1x1" variant="Transparent" />
        </Box>

        <Box my="lg">
            <Placeholder ratio="aspect3x4" variant="Absolut" />
        </Box>
    </>
);

export const IMAGE = () => (
    <>
        <Title variant="h2">Aspect Images</Title>
        <Image ratio="aspect16x9" />
    </>
);
