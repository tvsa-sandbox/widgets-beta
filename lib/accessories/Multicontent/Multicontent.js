import React from "react";
import PropTypes from "prop-types";

import {
    MulticontentStyles,
    MulticontentTrack,
    MulticontentThumbnails,
    MulticontentImageStyles,
} from "./styles";

const Multicontent = props => {
    const { children } = props;
    return (
        <MulticontentStyles {...props}>
            <MulticontentTrack>
                <MulticontentThumbnails>{children}</MulticontentThumbnails>
            </MulticontentTrack>
        </MulticontentStyles>
    );
};

export default Multicontent;
