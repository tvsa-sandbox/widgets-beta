import React from "react";
import { Link }from "gatsby";
import { withPrefix } from "gatsby";

const VideoContainer__RightItem = () => (
    <div className="VideoContainer__CarouselThumbContainer WhiteLabel">
        <Link to="/" className="VideoContainer__RightItem WhiteLabel">
            <div className="VideoContainer__RightItemThumbnail WhiteLabel">
                <div className="VideoContainer__RightItemImageContainer WhiteLabel">
                    <picture>
                        <img src={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} className="VideoContainer__EndCardItemImage WhiteLabel" alt="test" />
                    </picture>
                </div>
                <div className="VideoContainer__RightItemIconContainer WhiteLabel">
                    <div className="VideoContainer__RightItemIcon Icn_Video WhiteLabel">
                        <span className="Display">
                            Icn Play
                        </span>
                    </div>
                </div>
                <div className="VideoContainer__RightItemTimeContainer WhiteLabel">
                    <time className="VideoContainer__RightItemTime WhiteLabel">
                        22:55
                    </time>
                </div>
            </div>
            <div className="VideoContainer__RightItemCaption WhiteLabel">
                <div className="VideoContainer__RightItemTitleContainer WhiteLabel">
                    <h3 className="VideoContainer__RightItemTitle WhiteLabel">
                        Mandzukic marca el gol de la ventaja en
                        tiempo extra,Francia-Croacia Final Rusia
                    </h3>
                </div>
                <div className="VideoContainer__RightItemDescriptionContainer WhiteLabel">
                    <p className="VideoContainer__RightItemDescription WhiteLabel">
                        La Selección Mexicana, con gol de Fernando Quirarte,
                        derrota a su similar de Irák durante la primera fase del
                        Mundial de México 1986,en Televisa
                    </p>
                </div>
            </div>
        </Link>
    </div>
);

export default VideoContainer__RightItem;
