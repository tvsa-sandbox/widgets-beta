import React from "react";
import PropTypes from "prop-types";
import { PlaceholderStyles, IconsStyles } from "./styles";

const Placeholder = (props) => {
    const { children, size, ratio } = props;
    return (
        <PlaceholderStyles ratio={ratio} {...props}>
            <IconsStyles size={size} name="LasEstrellas" variant="Transparent" />
            {children}
        </PlaceholderStyles>
    );
};

Placeholder.propTypes = {
    variant: PropTypes.string,
    ratio: PropTypes.string,
    size: PropTypes.string,
};

Placeholder.defaultProps = {
    variant: "Solid",
    ratio: "aspect16x9",
    size: "50",
};

export default Placeholder;
