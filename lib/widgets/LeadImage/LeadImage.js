import React from "react";
import PropTypes from "prop-types";
import LeadImageStyles from "./styles";
import Image from "../../accessories/Image";

const LeadImage = props => {
    const { src, ratio } = props;
    return (
        <LeadImageStyles variant="Transparent">
            <Image alt="Lead" ratio={ratio} src={src} />
        </LeadImageStyles>
    );
};

LeadImage.propTypes = {
    src: PropTypes.node.isRequired,
    ratio: PropTypes.node.isRequired,
};

export default LeadImage;
