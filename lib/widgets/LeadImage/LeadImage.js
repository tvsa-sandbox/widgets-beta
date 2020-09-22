import React from "react";
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

export default LeadImage;
