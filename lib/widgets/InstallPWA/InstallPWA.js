import React from "react";
import PropTypes from "prop-types";

import {
    InstallPWAStyles,
    InstallButtonTextStyles,
    InstallButtonStyles,
    InstallTextStyles,
    InstallThumbStyles,
    InstallBoxStyles,
    InstallBoxCta,
    InstallIconStyles,
} from "./styles";

import Box from "../../accessories/Box";
import Icons from "../../accessories/Icons";

const InstallPWA = ({ url, text }) => {
    return (
        <InstallPWAStyles>
            <InstallBoxStyles variant="Transparent">
                <InstallThumbStyles variant="Transparent">
                    <InstallIconStyles name="LasEstrellas" />
                </InstallThumbStyles>
                <InstallBoxCta variant="Transparent">
                    <InstallTextStyles>{text}</InstallTextStyles>
                    <Box variant="Flex">
                        <InstallButtonTextStyles
                            variant="Focus"
                            href={url}
                            rel="noreferrer"
                            target="_blank"
                        >
                            No por ahora
                    </InstallButtonTextStyles>
                        <InstallButtonStyles>Agregar</InstallButtonStyles>
                    </Box>
                </InstallBoxCta>
            </InstallBoxStyles>
        </InstallPWAStyles>
    );
};

InstallPWA.propTypes = {
    text: PropTypes.string,
    url: PropTypes.string,
};

InstallPWA.defaultProps = {
    text:
        "Agréganos a tu pantalla de inicio para visitarnos más fácil y rápido",
    url: "",
};

export default InstallPWA;
