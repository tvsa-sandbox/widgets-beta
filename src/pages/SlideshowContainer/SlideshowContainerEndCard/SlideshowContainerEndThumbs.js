import React from "react";
import { Link } from "gatsby";
import { withPrefix } from "gatsby";

const SlideshowContainerEndThumbs = () => (
    <Link to="/" className="SlideshowContainer__EndCardItem WhiteLabel">
        <div className="SlideshowContainer__EndCardItemThumbnail WhiteLabel">
            <div className="SlideshowContainer__EndCardItemImageContainer WhiteLabel">
                <picture>
                    <img src={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} className="SlideshowContainer__EndCardItemImage WhiteLabel" alt="test"/>
                </picture>
            </div>
            <div className="SlideshowContainer__EndCardItemIconContainer WhiteLabel">
                <div className="SlideshowContainer__EndCardItemIcon Icn_Gallery WhiteLabel">
                    <span className="Display">
                        Icn Play
                    </span>
                </div>
            </div>
            <div className="SlideshowContainer__EndCardItemPhotoContainer WhiteLabel">
                <span className="SlideshowContainer__EndCardItemPhoto WhiteLabel">
                    4 fotos
                </span>
            </div>
        </div>
        <div className="SlideshowContainer__EndCardItemCaption WhiteLabel">
            <div className="SlideshowContainer__EndCardDescriptionContainer WhiteLabel">
                <p className="SlideshowContainer__EndCardDescription WhiteLabel">
                    La Selección Mexicana, con gol de Fernando Quirarte,
                    derrota a su similar de Irák durante la primera fase del
                    Mundial de México 1986,en Televisa
                </p>
            </div>
        </div>
    </Link>
);

export default SlideshowContainerEndThumbs;
