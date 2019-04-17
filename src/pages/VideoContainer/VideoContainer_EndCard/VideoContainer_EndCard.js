import React from "react";
import VideoContainerEndCardThumbs from "./VideoContainer_EndCardThumbs/VideoContainer_EndCardThumbs";
import { withPrefix } from "gatsby";

const VideoContainer_EndCard = () => (
    <div className="VideoContainer__EndCard WhiteLabel">
        <div className="VideoContainer__EndCardLabelContainer WhiteLabel">
            <span className="VideoContainer__EndCardLabel WhiteLabel">
                Label
            </span>
        </div>
        <div className="VideoContainer__EndCardTitleContainer WhiteLabel">
            <h3 className="VideoContainer__EndCardTitle WhiteLabel">
                    Titulo del Siguiente Video
            </h3>
        </div>
        <div className="VideoContainer__EndCardIconContainer WhiteLabel">
            <div className="VideoContainer__EndCardIcon Icn_Video WhiteLabel">
                <span className="Display">
                        Icon
                </span>
            </div>
        </div>
        <div className="VideoContainer__EndCardStopContainer WhiteLabel">
            <div className="VideoContainer__EndCardStop Icn_Close WhiteLabel">
                <span className="Display">
                    Close
                </span>
            </div>
        </div>
        <div className="VideoContainer__EndCardThumbsContainer WhiteLabel">
            <VideoContainerEndCardThumbs />
            <VideoContainerEndCardThumbs />
            <VideoContainerEndCardThumbs />
        </div>
        <div className="VideoContainer__EndCardImageContainer WhiteLabel">
            <picture>
                <source media="(min-width: 0px) and (max-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-414x233.jpg")} />
                <source media="(min-width: 415px) and (max-width: 768px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-716x403.jpg")} />
                <source media="(min-width: 769px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-820x461.jpg")} />
                <img className="VideoContainer__EndCardImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-820x461.jpg")} alt="" />
            </picture>
        </div>
    </div>
);

export default VideoContainer_EndCard;
