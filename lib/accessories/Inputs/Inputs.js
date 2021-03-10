import React from "react";
import PropTypes from "prop-types";
import InputsStyles from "./styles";
import { Info, Box, Icons } from "../index";

const Inputs = props => {
    const { icon, iconcolor, iconsize, error } = props;
    return (
        <Box variant="Auto">
            <InputsStyles type="search" aria-label="Search" />
            {icon ? <Icons name={icon} color={iconcolor} size={iconsize} /> : null}
            {error ? <Info variant="Error">*Error In Caption</Info> : null}
        </Box>
    );
};

Inputs.propTypes = {
    icon: PropTypes.string,
    error: PropTypes.bool,
};

Inputs.defaultProps = {
    icon: "Buscar",
    error: false,
};

export default Inputs;
