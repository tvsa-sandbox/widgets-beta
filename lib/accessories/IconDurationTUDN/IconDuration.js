import React from "react";
import PropTypes from "prop-types";
import { IconDurationStyles, TimeStyles } from "./styles";
import { Icons } from "..";

const IconDuration = props => {
    const { children, name, size } = props;
    return (
        <IconDurationStyles {...props}>
            <Icons name="Gallery" size={size} variant="Transparent" color="white" />
            <TimeStyles variant="Duration">{children}</TimeStyles>
        </IconDurationStyles>
    );
};

IconDuration.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.string,
};

IconDuration.defaultProps = {
    children: null,
    variant: "Transparent",
    name: "Video",
    size: "26",
};

export default IconDuration;
