import React from "react";
import PropTypes from "prop-types";
import IconStyles from "./styles";
import iconSet from "./selection.json";

const Icons = props => {
    const { name, size } = props;
    return <IconStyles iconSet={iconSet} icon={name} size={size} {...props} />;
};

Icons.propTypes = {
    name: PropTypes.string,
    size: PropTypes.string,
    variant: PropTypes.string,
};

Icons.defaultProps = {
    name: "",
    variant: "Solid",
    size: "40",
};

export default Icons;
