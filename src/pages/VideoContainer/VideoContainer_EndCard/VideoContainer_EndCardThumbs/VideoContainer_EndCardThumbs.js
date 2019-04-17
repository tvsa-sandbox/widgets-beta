import React from "react";
import { Link } from "gatsby";
import { withPrefix } from "gatsby";

const VideoContainer_EndCardThumbs = () => (
    <Link to="/" className="VideoContainer__EndCardItem WhiteLabel">
        <div className="VideoContainer__EndCardItemThumbnail WhiteLabel">
            <div className="VideoContainer__EndCardItemImageContainer WhiteLabel">
                <picture>
                    <img src={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} className="VideoContainer__EndCardItemImage WhiteLabel" alt="test" />
                </picture>
            </div>
            <div className="VideoContainer__EndCardItemIconContainer WhiteLabel">
                <div className="VideoContainer__EndCardItemIcon Icn_Video WhiteLabel">
                    <span className="Display">
                        Icn Play
                    </span>
                </div>
            </div>
            <div className="VideoContainer__EndCardItemTimeContainer WhiteLabel">
                <time className="VideoContainer__EndCardItemTime WhiteLabel">
                    22:55
                </time>
            </div>
        </div>
        <div className="VideoContainer__EndCardItemCaption WhiteLabel">
            <div className="VideoContainer__EndCardItemTitleContainer WhiteLabel">
                <h3 className="VideoContainer__EndCardItemTitle WhiteLabel">
                    Programas
                </h3>
            </div>
            <div className="VideoContainer__EndCardDescriptionContainer WhiteLabel">
                <p className="VideoContainer__EndCardDescription WhiteLabel">
                    La Selección Mexicana, con gol de Fernando Quirarte,
                    derrota a su similar de Irák durante la primera fase del
                    Mundial de México 1986,en Televisa
                </p>
            </div>
        </div>
    </Link>
);

export default VideoContainer_EndCardThumbs;
