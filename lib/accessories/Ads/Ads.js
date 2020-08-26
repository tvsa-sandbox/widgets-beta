import React from "react";
import AdsStyles from "./styles";
import Box from "../Box";

const Ads = props => {
    const { children } = props;
    return (
        <AdsStyles {...props}>
            <Box>{children}</Box>
        </AdsStyles>
    );
};

export default Ads;
