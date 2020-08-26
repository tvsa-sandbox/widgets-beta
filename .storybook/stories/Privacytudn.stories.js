import React, { Fragment } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { PrivacyTUDN } from "widgets";
import { Title, Box } from "accessories";

export default {
    decorators: [withKnobs],
    title: "Privacy",
};

export const PRIVACYTUDN = () => {
    return (
        <div>
            <Title variant="h2">Privacy</Title>
            <PrivacyTUDN />
        </div>
    );
};
