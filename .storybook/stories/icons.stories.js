import React, { Fragment } from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import { Icons, Title, IconDuration } from "accessories";

export default {
    decorators: [withKnobs],
    title: "Desing System/Atoms/Icons",
};

export const ICONS = () => (
    <Fragment>
        <Title variant="h2">Icons</Title>
        <Icons color="#ccc" name="Instagram" />
        <Icons color="#ccc" name="Twitter" />
        <Icons color="#ccc" name="Facebook" />
        <Icons color="#ccc" name="Televisa" />
        <Icons color="#ccc" name="WhatsApp" />
        <Icons color="#ccc" name="YouTube" />
        <Icons color="#ccc" name="Pinterest" />
        <Icons color="#ccc" name="LasEstrellas" />
        <Icons color="#ccc" name="Menu" />
        <Icons color="#ccc" name="Close" />
        <Icons color="#ccc" name="Logo" />
        <Icons color="#ccc" name="Email" />
        <Icons color="#ccc" name="TelevisaFull" />
        <Icons color="#ccc" name="CEA" />
        <Icons color="#ccc" name="Deportes" />
        <Icons color="#ccc" name="Nueve" />
        <Icons color="#ccc" name="News" />
        <Icons color="#ccc" name="ForoTV" />
        <Icons color="#ccc" name="CanalCinco" />
        <Icons color="#ccc" name="Search" />
        <Icons color="#ccc" name="Gallery" />
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
