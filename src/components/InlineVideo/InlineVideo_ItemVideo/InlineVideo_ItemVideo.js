import React from "react";
import { Link } from "gatsby";

const InlineVideo__ItemVideo = ()=> (
    <Link to="/" className="InlineVideo__ItemPlayer WhiteLabel">
        <div className="InlineVideo__ItemPlayerThumbnail WhiteLabel">
            <div className="InlineVideo__ItemPlayerImageContainer WhiteLabel">
                <picture>
                    <source media="(min-width: 0px) and (max-width: 414px)" srcSet="./static/aspect-ratio-images/16x9-414x233.jpg" />
					<source media="(min-width: 415px)" srcSet="./static/aspect-ratio-images/16x9-414x233.jpg" />
					<img className="InlineVideo__ItemPlayerImage WhiteLabel" src="./static/aspect-ratio-images/16x9-414x233.jpg" alt="Test"/>
				</picture>
            </div>
            <div className="InlineVideo__ItemPlayerVideoContainer WhiteLabel">
                <div className="InlineVideo__ItemPlayerVideo WhiteLabel">
                    {/* Video Player */}
                </div>
            </div>
            <div className="InlineVideo__ItemPlayerIconContainer WhiteLabel">
                <div className="InlineVideo__ItemPlayerIcon Icn_Video WhiteLabel">
                    <span className="Display">
                        Icn Play
                    </span>
                </div>
            </div>
            <div className="InlineVideo__ItemPlayerTimeContainer WhiteLabel">
                <time className="InlineVideo__ItemPlayerTime WhiteLabel">
                    22:55
                </time>
            </div>
            <div className="InlineVideo__ItemPlayerInfoContainer WhiteLabel">
                <span className="InlineVideo__ItemPlayerInfo WhiteLabel">
                    Video
                </span>
            </div>
        </div>
    </Link>
);

export default InlineVideo__ItemVideo;
