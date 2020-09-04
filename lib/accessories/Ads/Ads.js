import React from "react";
import AdsStyles from "./styles";

const Ads = props => {
    const { children } = props;
    return <AdsStyles {...props}>{children}</AdsStyles>;
};

export default Ads;
