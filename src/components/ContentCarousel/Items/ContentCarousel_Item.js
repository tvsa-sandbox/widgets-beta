import React from "react";
import { Link } from "gatsby";

const ContentCarousel_Item = (props) => (
    <div className="ContentCarousel__ThumbContainer WhiteLabel" id={props.id}>
        <Link className="ContentCarousel__CarouselItem WhiteLabel" to="/">
            <div className="ContentCarousel__CarouselItemThumbnail WhiteLabel">
                <div className="ContentCarousel__CarouselItemImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px) and (max-width: 414px)" srcSet="./static/aspect-ratio-images/4x3-268x202.jpg" />
                        <source media="(min-width: 415px)" srcSet="./static/aspect-ratio-images/4x3-414x311.jpg" />
                        <img className="ContentCarousel__CarouselItemImage WhiteLabel" src="./static/aspect-ratio-images/4x3-414x311.jpg" alt="Test" />
                    </picture>
                </div>
                <div className="ContentCarousel__CarouselItemLabelContainer WhiteLabel">
                    <span className="ContentCarousel__CarouselItemLabel WhiteLabel">
                        Hoy
                    </span>
                </div>
                <div className="ContentCarousel__CarouselItemIconContainer WhiteLabel">
                    <div className="ContentCarousel__CarouselItemIcon Icn_Video WhiteLabel">
                        <span className="Display">
                            Icono de Play
                        </span>
                    </div>
                </div>
                <div className="ContentCarousel__CarouselItemDurationContainer WhiteLabel">
                    <time className="ContentCarousel__CarouselItemDuration WhiteLabel">
                        12:10
                    </time>
                </div>
            </div>
            <div className="ContentCarousel__CarouselItemCaption WhiteLabel">
                <div className="ContentCarousel__CarouselItemInfoContainer WhiteLabel">
                    <div className="ContentCarousel__CarouselItemInfo WhiteLabel">
                        <span className="ContentCarousel__CarouselItemInfoType-Modifier WhiteLabel">
                            Artículo -
                        </span>
                        <time className="ContentCarousel__CarouselItemInfoDate WhiteLabel" dateTime="2018-06-22T00:07:40.346Z">
                            25 JUN. 2018
                        </time>
                        <time className="ContentCarousel__CarouselItemInfoTime WhiteLabel">
                            10:10
                        </time>
                    </div>
                </div>
                <div className="ContentCarousel__CarouselItemTitleContainer WhiteLabel">
                    <h3 className="ContentCarousel__CarouselItemTitle WhiteLabel">
                        Mandzukic marca el gol de la ventaja en tiempo extra,Francia-Croacia Final Rusia
                    </h3>
                </div>
            </div>
        </Link>
    </div>
);

export default ContentCarousel_Item;
