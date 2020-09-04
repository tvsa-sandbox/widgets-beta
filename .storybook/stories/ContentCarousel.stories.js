import React, { Fragment } from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { ContentCarousel } from "widgets";
import { Title, Box } from "accessories";
export default {
    decorators: [withKnobs],
    title: "Widgets/ContentCarousel",
};

export const CONTENTCAROUSEL = () => {
    return (
        <div>
            <Title variant="h2">ContentCarousel </Title>
            <ContentCarousel />
        </div>
    );
};
