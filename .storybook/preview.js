import React from "react";
import { addParameters, addDecorator } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ThemeProvider } from "styled-components";
import * as whiteLabel from "../lib/themes/whiteLabel";
import * as lasEstrellas from "../lib/themes/lasEstrelllas";
import * as TUDN from "../lib/themes/tudn";
import GlobalStyle from "../lib/accessories/GlobalStyles";
import { themes } from "@storybook/theming";
import merge from "lodash.merge";
import get from "lodash.get";

const wl = whiteLabel;
const le = lasEstrellas;
const tudn = TUDN;

const modes = ["light", "dark"];

const getTheme = (mode, btheme) =>
    merge({}, btheme, {
        colors: get(btheme.colors.modes, mode, btheme.colors),
    });

// const [mode, setMode] = useState(modes[0]);

const THEMES = {
    TUDN: getTheme(modes[0], tudn),
    "TUDN Dark": getTheme(modes[1], tudn),
    "las Estrellas": getTheme(modes[1], le),
    "Las Estrellas Light": getTheme(modes[0], le),
    "White Label": getTheme(modes[0], wl),
    "White Label Darks": getTheme(modes[1], wl),
};
console.log("tema", THEMES["las Estrellas"].ui.name);
addDecorator(withA11y);
addParameters({
    backgrounds: [
        { name: "Light", value: "#f5f5f5", default: true },
        { name: "Dark", value: "#000" },
    ],
    options: {
        theme: themes.dark,
    },
    parameters: {
        a11y: {
            element: "#root",
            config: {},
            options: {},
        },
    },
    viewport: {
        viewports: INITIAL_VIEWPORTS,
        defaultViewport: "iphone6",
    },
});
addDecorator(storyFn => (
    <ThemeProvider theme={select("Theme", THEMES, THEMES["TUDN"])}>
        <GlobalStyle />
        {storyFn()}
    </ThemeProvider>
));
