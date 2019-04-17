import React from "react";
import { Link } from "gatsby";

const ContentCarouselB_Item = (props) => (
    <div className="ContentCarouselB__ThumbContainer WhiteLabel" id={props.id}>
        <Link className="ContentCarouselB__CarouselItem WhiteLabel" to="/">
            <div className="ContentCarouselB__CarouselItemThumbnail WhiteLabel">
                <div className="ContentCarouselB__CarouselItemImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px) and (max-width: 414px)" srcSet="./static/aspect-ratio-images/4x3-268x202.jpg" />
                        <source media="(min-width: 415px)" srcSet="./static/aspect-ratio-images/4x3-414x311.jpg" />
                        <img className="ContentCarouselB__CarouselItemImage WhiteLabel" src="./static/aspect-ratio-images/4x3-414x311.jpg" alt="Test" />
                    </picture>
                </div>
                <div className="ContentCarouselB__CarouselItemIconContainer WhiteLabel">
                    <div className="ContentCarouselB__CarouselItemIcon Icn_Video WhiteLabel">
                        <span className="Display">
                            Icono de Play
                        </span>
                    </div>
                </div>
            </div>
            <div className="ContentCarouselB__CarouselItemCaption WhiteLabel">
                <div className="ContentCarouselB__CarouselItemLabelContainer WhiteLabel">
                    <span className="ContentCarouselB__CarouselItemLabel WhiteLabel">
                        Hoy
                    </span>
                </div>
                <div className="ContentCarouselB__CarouselItemInfoContainer WhiteLabel">
                    <div className="ContentCarouselB__CarouselItemInfo WhiteLabel">
                        <span className="ContentCarouselB__CarouselItemInfoType-Modifier WhiteLabel">
                            Artículo -
                        </span>
                        <time className="ContentCarouselB__CarouselItemInfoDate WhiteLabel" dateTime="2018-06-22T00:07:40.346Z">
                            25 JUN. 2018
                        </time>
                        <time className="ContentCarouselB__CarouselItemInfoTime WhiteLabel">
                            10:10
                        </time>
                    </div>
                </div>
                <div className="ContentCarouselB__CarouselItemDurationContainer WhiteLabel">
                    <time className="ContentCarouselB__CarouselItemDuration WhiteLabel">
                        12:10
                    </time>
                </div>
                <div className="ContentCarouselB__CarouselItemTitleContainer WhiteLabel">
                    <h3 className="ContentCarouselB__CarouselItemTitle WhiteLabel">
                        Mandzukic marca el gol de la ventaja en tiempo extra,Francia-Croacia Final Rusia
                    </h3>
                </div>
            </div>
        </Link>
    </div>
);

export default ContentCarouselB_Item;
