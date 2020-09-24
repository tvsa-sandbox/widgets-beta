import React, { Fragment } from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import { Icons, Title, IconDuration, Box } from "accessories";

export default {
    decorators: [withKnobs],
    title: "Desing System/Atoms/Icons",
};

export const ICONS = () => (
    <Fragment>
        <Title variant="h2">Icons</Title>
        <Icons name="Instagram" />
        <Icons name="Twitter" />
        <Icons name="Facebook" />
        <Icons name="Televisa" />
        <Icons name="WhatsApp" />
        <Icons name="YouTube" />
        <Icons name="Pinterest" />
        <Icons name="LasEstrellas" />
        <Icons name="Menu" />
        <Icons name="Close" />
        <Icons name="Logo" />
        <Icons name="Email" />
        <Icons name="TelevisaFull" />
        <Icons name="CEA" />
        <Icons name="Deportes" />
        <Icons name="Nueve" />
        <Icons name="News" />
        <Icons name="ForoTV" />
        <Icons name="CanalCinco" />
        <Icons name="Search" />
        <Icons name="Gallery" />
        <Icons name="Search" />
    </Fragment>
);

export const ICONDURATION = () => {
    const name = text("Duration", "12:30");
    return (
        <Fragment>
            <Title variant="h2">Icon Duration</Title>
            <Box variant="Transparent" style={{ height: "30px" }}>
                <IconDuration>{name}</IconDuration>
            </Box>
        </Fragment>
    );
};
