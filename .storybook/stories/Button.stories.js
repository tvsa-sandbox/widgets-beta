import React, { Fragment } from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import { Button, Title, Box, Icons } from "accessories";

export default {
    decorators: [withKnobs , (Story) => <div style={{ margin: '5rem 2rem'}}><Story/></div>],
    title: "Atoms/Buttons",
};

export const BUTTON = () => {
    const name = text("Name", "Click Me!");
    return (
        <div>
            <Box variant="Space">
                <Box variant="Space" />
                <Button disabled={boolean("Desactivado", false)}>{name}</Button>
            </Box>

            <Box variant="Space">
                <Button variant="Active" disabled={boolean("Desactivado", false)}>
                    {name}
                </Button>
            </Box>

            <Box variant="Space">
                <Button variant="Outline" disabled={boolean("Desactivado", false)}>
                    {name}
                </Button>
            </Box>

            <Box variant="Space">
                <Button variant="Inactive" disabled={boolean("Desactivado", false)}>
                    {name}
                </Button>
            </Box>

            <Box variant="Space">
                <Button variant="Transparent" disabled={boolean("Desactivado", false)}>
                    {name}
                </Button>
            </Box>
        </div>
    );
};

export const BUTTONICON = () => (
    <div>

        <Box variant="Space">
            <Button disabled={boolean("Desactivado", false)}>
                <Icons name="Instagram" variant="Active"/>
            </Button>
        </Box>

        <Box variant="Space">
            <Button variant="Active" disabled={boolean("Desactivado", false)}>
                <Icons name="Instagram" variant="Active" />
            </Button>
        </Box>

        <Box variant="Space">
            <Button variant="Outline" disabled={boolean("Desactivado", false)}>
                <Icons name="Instagram" variant="Outline" />
            </Button>
        </Box>

        <Box variant="Space">
            <Button variant="Inactive" disabled={boolean("Desactivado", false)}>
                <Icons name="Instagram" variant="Inactive" />
            </Button>
        </Box>

        <Box variant="Space">
            <Button variant="Transparent" disabled={boolean("Desactivado", false)}>
                <Icons name="Instagram" variant="Transparent" />
            </Button>
        </Box>
    </div>
);

export const BUTTONDOUBLE = () => {
    const name = text("Name", "Click Me!");
    return (
        <div>

            <Box variant="Space">
                <Button disabled={boolean("Desactivado", false)}>
                    <Icons name="Instagram" />
                    {name}
                </Button>
            </Box>

            <Box variant="Space">
                <Button variant="Active" disabled={boolean("Desactivado", false)}>
                    <Icons name="Instagram" variant="Active" />
                    {name}
                </Button>
            </Box>

            <Box variant="Space">
                <Button variant="Outline" disabled={boolean("Desactivado", false)}>
                    <Icons name="Instagram" variant="Outline" />
                    {name}
                </Button>
            </Box>

            <Box variant="Space">
                <Button variant="Inactive" disabled={boolean("Desactivado", false)}>
                    <Icons name="Instagram" variant="Inactive" />
                    {name}
                </Button>
            </Box>

            <Box variant="Space">
                <Button variant="Transparent" disabled={boolean("Desactivado", false)}>
                    <Icons name="Instagram" variant="Transparent" />
                    {name}
                </Button>
            </Box>
        </div>
    );
};
