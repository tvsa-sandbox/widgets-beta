import React from "react";
import { Link } from "gatsby";

const CarouselItem = (props) => (
    <div className="InlineGallery__CarouselThumbContainer WhiteLabel" id={props.id}>
        <Link to="/" className="InlineGallery__CarouselItem WhiteLabel">
            <div className="InlineGallery__CarouselItemThumbnail WhiteLabel">
                <div className="InlineGallery__CarouselItemImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px) and (max-width: 414px)" srcSet="./static/aspect-ratio-images/4x3-268x202.jpg" />
                        <source media="(min-width: 415px) and (max-width: 768px)" srcSet="./static/aspect-ratio-images/4x3-268x202.jpg" />
                        <source media="(min-width: 769px)" srcSet="./static/aspect-ratio-images/4x3-268x202.jpg" />
                         <img className="InlineGallery__CarouselItemImage WhiteLabel" src="./static/aspect-ratio-images/4x3-268x202.jpg" alt="Rihanna" />
                    </picture>
                </div>
                <div className="InlineGallery__CarouselItemLabelContainer WhiteLabel">
                    <span className="InlineGallery__CarouselItemLabel WhiteLabel">
                        Deportes
                    </span>
                </div>
                <div className="InlineGallery__CarouselItemTitleContainer WhiteLabel">
                    <h3 className="InlineGallery__CarouselItemTitle WhiteLabel">
                        This is a example of a H3 Title in Gallery Inline
                    </h3>
                </div>
            </div>
        </Link>
    </div>
);

export default CarouselItem;
