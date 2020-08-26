import React from "react";
import TimeStyles from "./styles";

const Time = props => {
    const { children } = props;
    return <TimeStyles {...props}>{children}</TimeStyles>;
};

export default Time;
