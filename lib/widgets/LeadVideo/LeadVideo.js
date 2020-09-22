import React from "react";
import { LeadVideoStyles, LeadVideoIcon, BoxVideoIcon, BoxVideoPlayer } from "./styles";
import Image from "../../accessories/Image";

const LeadVideo = props => {
    const { src, ratio, size } = props;
    return (
        <LeadVideoStyles variant="Transparent">
            <BoxVideoIcon variant="Transparent">
                <LeadVideoIcon name="Video" size={size} />
            </BoxVideoIcon>
            <Image alt="Lead" ratio={ratio} src={src} />
            <BoxVideoPlayer>Ver video</BoxVideoPlayer>
        </LeadVideoStyles>
    );
};

export default LeadVideo;
