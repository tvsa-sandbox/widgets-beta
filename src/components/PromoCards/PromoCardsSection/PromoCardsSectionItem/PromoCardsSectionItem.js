import React from "react";
import { Link } from "gatsby";

const PromoCardsSectionItem = (props) => (
    <div className="PromoCards__ThumbContainer WhiteLabel" id={props.id}>
        <Link to="/" className="PromoCards__CarouselItemSection WhiteLabel">
            <div className="PromoCards__CarouselItemSectionThumbnail WhiteLabel">
                <div className="PromoCards__CarouselItemSectionImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width:0px) and (max-width:414px)" srcSet="./static/aspect-ratio-images/3x4-225x301.jpg" />
                        <source media="(min-width:415px) and (max-width:768px)" srcSet="./static/aspect-ratio-images/3x4-320x426.jpg" />
                        <source media="(min-width:769px)" srcSet="./static/aspect-ratio-images/3x4-225x301.jpg" />
                        <img src="./static/aspect-ratio-images/3x4-225x301.jpg" className="PromoCards__CarouselItemSectionImage WhiteLabel" alt="" />
                    </picture>
                </div>
                <div className="PromoCards__CarouselItemSectionTitleContainer WhiteLabel">
                    <h3 className="PromoCards__CarouselItemSectionTitle WhiteLabel">
                        Telenovelas
                    </h3>
                </div>
            </div>
        </Link>
    </div>
);

export default PromoCardsSectionItem;
