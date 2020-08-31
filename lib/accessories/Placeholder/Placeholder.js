import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import { PlaceholderStyles, IconsStyles } from "./styles";

const Placeholder = props => {
    const { children, size, ratio, name } = props;
    const themeContext = useContext(ThemeContext);
    return (
        <PlaceholderStyles ratio={ratio} {...props}>
            {themeContext.ui.name === "tudn" ? (
                <IconsStyles size="40" name="Deportes" variant="Transparent" />
            ) : (
                <IconsStyles size={size} name={name} variant="Transparent" />
            )}
            {children}
        </PlaceholderStyles>
    );
};

Placeholder.propTypes = {
    variant: PropTypes.string,
    ratio: PropTypes.string,
    size: PropTypes.string,
    name: PropTypes.string,
};

Placeholder.defaultProps = {
    variant: "Solid",
    ratio: "aspect16x9",
    size: "50",
    name: "LasEstrellas",
};

export default Placeholder;
