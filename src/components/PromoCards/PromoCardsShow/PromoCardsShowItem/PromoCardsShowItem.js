import React from "react";
import { Link } from "gatsby";
import { withPrefix } from "gatsby";

const PromoCardsShowItem = (props) => (
    <div className="PromoCards__ThumbContainer WhiteLabel" id={props.id}>
        <Link to="/" className="PromoCards__CarouselItemShow WhiteLabel">
            <div className="PromoCards__CarouselItemShowThumbnail WhiteLabel">
                <div className="PromoCards__CarouselItemShowImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width:0px) and (max-width:414px)" srcSet={withPrefix("/static/aspect-ratio-images/3x4-225x301.jpg")} />
                        <source media="(min-width:415px) and (max-width:768px)" srcSet={withPrefix("/static/aspect-ratio-images/3x4-320x426.jpg")} />
                        <source media="(min-width:769px)" srcSet={withPrefix("/static/aspect-ratio-images/3x4-225x301.jpg")} />
                        <img src={withPrefix("/static/aspect-ratio-images/3x4-225x301.jpg")} className="PromoCards__CarouselItemShowImage WhiteLabel" alt="" />
                    </picture>
                </div>
            </div>
            <div className="PromoCards__CarouselItemShowCaption WhiteLabel">
                <div className="PromoCards__CarouselItemShowGraphicContainer WhiteLabel">
                    <picture>
                        <source media="(min-width:0px) and (max-width:414px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic3-209x114.png")} />
                        <source media="(min-width:415px) and (max-width:768px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic3-209x114.png")} />
                        <source media="(min-width:769px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic3-209x114.png")} />
                        <img className="PromoCards__CarouselItemShowGraphic WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-Graphic3-209x114.png")} alt="" />
                    </picture>
                </div>
            </div>
        </Link>
    </div>
);

export default PromoCardsShowItem;
