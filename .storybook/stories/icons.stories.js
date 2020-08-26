import React, { Fragment } from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import { Icons, Title, IconDuration } from "accessories";

export default {
    decorators: [withKnobs],
    title: "A Icons",
};

export const ICONS = () => (
    <Fragment>
        <Title variant="h2">Icons</Title>
        <Icons color="#fff" name="Instagram" />
        <Icons color="#fff" name="Twitter" />
        <Icons color="#fff" name="Facebook" />
        <Icons color="#fff" name="Televisa" />
        <Icons color="#fff" name="WhatsApp" />
        <Icons color="#fff" name="YouTube" />
        <Icons color="#fff" name="Pinterest" />
        <Icons color="#fff" name="LasEstrellas" />
        <Icons color="#fff" name="Menu" />
        <Icons color="#fff" name="Close" />
        <Icons color="#fff" name="Logo" />
        <Icons color="#fff" name="Email" />
        <Icons color="#fff" name="TelevisaFull" />
        <Icons color="#fff" name="CEA" />
        <Icons color="#fff" name="Deportes" />
        <Icons color="#fff" name="Nueve" />
        <Icons color="#fff" name="News" />
        <Icons color="#fff" name="ForoTV" />
        <Icons color="#fff" name="CanalCinco" />
        <Icons color="#fff" name="Search" />
        <Icons variant="Inactive" name="Search" />
    </Fragment>
);

export const ICONDURATION = () => {
    const name = text("Duration", "12:30");
    return (
        <Fragment>
            <Title variant="h2">Icons</Title>
            <IconDuration>{name}</IconDuration>
        </Fragment>
    );
};
