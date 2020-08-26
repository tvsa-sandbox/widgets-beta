import React from "react";
import TextStyles from "./styles";

const Text = props => {
    const { children } = props;
    return <TextStyles {...props}>{children}</TextStyles>;
};

export default Text;
