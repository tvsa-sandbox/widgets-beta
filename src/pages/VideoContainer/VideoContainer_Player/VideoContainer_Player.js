import React from "react";
import Link from "gatsby-link";
import { withPrefix } from "gatsby-link";

const VideoContainer_Player = () => (
    <Link to="/" className="VideoContainer__ItemPlayer WhiteLabel">
        <div className="VideoContainer__ItemPlayerThumbnail WhiteLabel">
            <div className="VideoContainer__ItemPlayerImageContainer WhiteLabel">
                <picture>
                    <source media="(min-width: 0px) and (max-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-414x233.jpg")} />
                    <source media="(min-width: 415px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-820x461.jpg")} />
                    <img className="VideoContainer__ItemPlayerImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-414x233.jpg")} alt="Test"/>
                </picture>
            </div>
            <div className="VideoContainer__ItemPlayerVideoContainer WhiteLabel">
                <div className="VideoContainer__ItemPlayerVideo WhiteLabel">
                    {/* Video Player */}
                </div>
            </div>
            <div className="VideoContainer__ItemPlayerIconContainer WhiteLabel">
                <div className="VideoContainer__ItemPlayerIcon Icn_Video WhiteLabel">
                    <span className="Display">
                        Icn Play
                    </span>
                </div>
            </div>
            <div className="VideoContainer__ItemPlayerTimeContainer WhiteLabel">
                <time className="VideoContainer__ItemPlayerTime WhiteLabel">
                    22:55
                </time>
            </div>
            <div className="VideoContainer__ItemPlayerInfoContainer WhiteLabel">
                <span className="VideoContainer__ItemPlayerInfo WhiteLabel">
                    Video
                </span>
            </div>
        </div>
    </Link>
);

export default VideoContainer_Player;
