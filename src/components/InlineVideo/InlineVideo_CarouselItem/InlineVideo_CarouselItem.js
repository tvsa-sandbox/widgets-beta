import React from "react";

const InlineVideo = (props) => (
    <div className="InlineVideo__ThumbContainer WhiteLabel" id={props.id}>
        <button className="InlineVideo__CarouselItem WhiteLabel" type="button">
            <div className="InlineVideo__CarouselItemThumbnail WhiteLabel">
                <div className="InlineVideo__CarouselItemImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px) and (max-width: 414px)" srcSet="./static/aspect-ratio-images/16x9-258x145.jpg" />
                        <source media="(min-width: 415px) and (max-width: 768px)" srcSet="./static/aspect-ratio-images/16x9-414x233.jpg" />
                        <source media="(min-width: 769px)" srcSet="./static/aspect-ratio-images/16x9-258x145.jpg" />
                        <img className="InlineVideo__CarouselItemImage WhiteLabel" src="./static/aspect-ratio-images/16x9-258x145.jpg" alt="Test" />
                    </picture>
                </div>
                <div className="InlineVideo__CarouselItemIconContainer WhiteLabel">
                    <div className="InlineVideo__CarouselItemIcon Icn_Video WhiteLabel">
                        <span className="Display">
                            Icn Play
                        </span>
                    </div>
                </div>
                <div className="InlineVideo__CarouselItemDurationContainer WhiteLabel">
                    <span className="InlineVideo__CarouselItemDuration WhiteLabel">
                        22:55
                    </span>
                </div>
            </div>
            <div className="InlineVideo__CarouselItemCaption WhiteLabel">
                <div className="InlineVideo__CarouselItemTitleContainer WhiteLabel">
                    <h3 className="InlineVideo__CarouselItemTitle WhiteLabel">
                        Mandzukic marca el gol de la ventaja en tiempo extra,Francia-Croacia Final Rusia
                    </h3>
                </div>
                <div className="InlineVideo__CarouselItemCaptionDurationContainer WhiteLabel">
                    <time className="InlineVideo__CarouselItemDuration WhiteLabel">
                        22:55
                    </time>
                </div>
            </div>
        </button>
    </div>
);

export default InlineVideo;
