import React from "react";
import LabelStyles from "./styles";

const Label = props => {
    const { children } = props;
    return <LabelStyles {...props}>{children}</LabelStyles>;
};

export default Label;
