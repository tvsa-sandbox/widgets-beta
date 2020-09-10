import React, { Fragment } from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { Title, Box, Image, Carousel } from "accessories";

export default {
    decorators: [withKnobs],
    title: "Desing System/Atoms/Carousel",
};

export const CAROUSEL = () => (
    <>
        <Title variant="h2">Carousel</Title>

        <Box my="lg">
            <Carousel>
                <Image />
                <Image />
                <Image />
                <Image />
                <Image />
            </Carousel>
        </Box>
    </>
);
