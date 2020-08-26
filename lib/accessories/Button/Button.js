import React from "react";
import PropTypes from "prop-types";
import ButtonStyles from "./styles";

const Button = (props) => {
    const { children } = props;
    return <ButtonStyles {...props}>{children}</ButtonStyles>;
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.string,
};

Button.defaultProps = {
    variant: "Solid",
};

export default Button;
