import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { withHTML } from "@whitespace/storybook-addon-html/react";
// import { StoryContext, StoryGetter, StoryWrapper } from "@storybook/addons";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ThemeProvider } from "styled-components";
import * as whiteLabel from "../lib/themes/whiteLabel";
import * as lasEstrellas from "../lib/themes/lasEstrelllas";
import * as TUDN from "../lib/themes/tudn";
import * as Bandamax from "../lib/themes/bandamax";
import * as Canal5 from "../lib/themes/canal5";
import * as elnueve from "../lib/themes/elnueve";
import * as telehit from "../lib/themes/telehit";
import * as unicable from "../lib/themes/unicable";
import * as losplayers from "../lib/themes/pleyers";
import * as plumas from "../lib/themes/plumasatomicas";
import * as Erizos from "../lib/themes/erizos";
import * as Bitme from "../lib/themes/bitme";
import * as espagueti from "../lib/themes/codigoespagueti";
import * as frente from "../lib/themes/frentecreativo";
import * as news from "../lib/themes/televisanews";
import * as oink from "../lib/themes/oinkoink";
import * as viviendoencasa from "../lib/themes/viviendoencasa";
import * as distrito from "../lib/themes/distritocomedia";
import GlobalStyle from "../lib/accessories/GlobalStyles";
import desingsystem from "./desingsystem";
import merge from "lodash.merge";
import get from "lodash.get";

const wl = whiteLabel;
const le = lasEstrellas;
const tudn = TUDN;
const bmx = Bandamax;
const cinco = Canal5;
const c9 = elnueve;
const hit = telehit;
const uni = unicable;
const lp = losplayers;
const pa = plumas;
const ez = Erizos;
const bit = Bitme;
const ce = espagueti;
const fc = frente;
const tn = news;
const ok = oink;
const vc = viviendoencasa;
const dc = distrito;

const modes = ["light", "dark"];

const getTheme = (mode, btheme) =>
    merge({}, btheme, {
        colors: get(btheme.colors.modes, mode, btheme.colors),
    });

// const [mode, setMode] = useState(modes[0]);

const THEMES = {
    "Las Estrellas": getTheme(modes[1], le),
    "Las Estrellas Light": getTheme(modes[0], le),
    TUDN: getTheme(modes[0], tudn),
    "TUDN Dark": getTheme(modes[1], tudn),
    "Bandamax Light": getTheme(modes[0], bmx),
    "Bandamax Dark": getTheme(modes[1], bmx),
    "Canal5 Light": getTheme(modes[0], cinco),
    "Canal5 Dark": getTheme(modes[1], cinco),
    "ElNueve Light": getTheme(modes[0], c9),
    "ElNueve Dark": getTheme(modes[1], c9),
    "Telehit Light": getTheme(modes[0], hit),
    "Telehit Dark": getTheme(modes[1], hit),
    "Unicable Light": getTheme(modes[0], uni),
    "Unicable Dark": getTheme(modes[1], uni),
    "White Label": getTheme(modes[0], wl),
    "White Label Darks": getTheme(modes[1], wl),
    "Los Pleyers Light": getTheme(modes[0], lp),
    "Los Pleyers Dark": getTheme(modes[1], lp),
    "Plumas Atomicas Light": getTheme(modes[0], pa),
    "Plumas Atomicas Dark": getTheme(modes[1], pa),
    "Erizos Light": getTheme(modes[0], ez),
    "Erizos Dark": getTheme(modes[1], ez),
    "Bitme Light": getTheme(modes[0], bit),
    "Bitme Dark": getTheme(modes[1], bit),
    "Codigo Espagueti Light": getTheme(modes[0], ce),
    "Codigo Espagueti Dark": getTheme(modes[1], ce),
    "Frente Creativo Light": getTheme(modes[0], fc),
    "Frente Creativo Dark": getTheme(modes[1], fc),
    "Televisa News Light": getTheme(modes[0], tn),
    "Televisa News Dark": getTheme(modes[1], tn),
    "Oink Oink Light": getTheme(modes[0], ok),
    "Oink Oink Dark": getTheme(modes[1], ok),
    "Viviendo Casa Light": getTheme(modes[0], vc),
    "Viviendo Casa Dark": getTheme(modes[1], vc),
    "Distrito Comedia Light": getTheme(modes[0], dc),
    "Distrito Comedia Dark": getTheme(modes[1], dc),
};
// console.log("tema", THEMES["las Estrellas"].ui.name);

const withThemeProvider = (Story, context) => {
    return (
        <ThemeProvider theme={select("Theme", THEMES, THEMES["Las Estrellas Light"])}>
            <GlobalStyle />
            <Story {...context} />
        </ThemeProvider>
    );
};

export const parameters = {
    options: {
        theme: desingsystem,
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
        defaultViewport: "galaxys5",
    },
};

export const decorators = [withA11y, withHTML, withThemeProvider];
