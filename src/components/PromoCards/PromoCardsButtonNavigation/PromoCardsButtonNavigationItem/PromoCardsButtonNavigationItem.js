import React from "react";
import { Link } from "gatsby";

const PromoCardsButtonNavigationItem = (props) => (
    <div className="PromoCards__ThumbContainer WhiteLabel" id={props.id}>
        <div className="PromoCards__NavigationBoxContainer WhiteLabel">
            <div className="PromoCards__ItemNavigationContainer WhiteLabel">
                <Link to="/" className="PromoCards__CarouselItemButtonNavigation WhiteLabel">
                    <div className="PromoCards__CarouselItemButtonNavigationThumbnail WhiteLabel">
                        <div className="PromoCards__CarouselItemButtonNavigationImageContainer WhiteLabel">
                            <picture>
                                <source media="(min-width:0px) and (max-width:414px)" srcSet="./static/aspect-ratio-images/3x4-225x301.jpg" />
                                <source media="(min-width:415px) and (max-width:768px)" srcSet="./static/aspect-ratio-images/3x4-320x426.jpg" />
                                <source media="(min-width:769px)" srcSet="./static/aspect-ratio-images/3x4-225x301.jpg" />
                                <img src="./static/aspect-ratio-images/3x4-225x301.jpg" className="PromoCards__CarouselItemButtonNavigationImage WhiteLabel" alt="" />
                            </picture>
                        </div>
                        <div className="PromoCards__CarouselItemButtonNavigationIconContainer WhiteLabel">
                            <div className="PromoCards__CarouselItemButtonNavigationIcon Icn_Video WhiteLabel">
                                <span className="Display">
                                    Icn_Video Icon
                                </span>
                            </div>
                        </div>
                        <div className="PromoCards__CarouselItemButtonNavigationDateContainer WhiteLabel">
                            <time className="PromoCards__CarouselItemButtonNavigationDate WhiteLabel" dateTime="2018-06-22">
                                Capitulo 25 / 20 julio 2018
                            </time>
                        </div>
                        <div className="PromoCards__CarouselItemButtonNavigationTitleContainer WhiteLabel">
                            <h3 className="PromoCards__CarouselItemButtonNavigationTitle WhiteLabel">
                                Mandzukic marca el gol de la ventaja en tiempo extra,Francia
                            </h3>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="PromoCards__CarouselItemButtonNavigationGraphicContainer WhiteLabel">
                <picture>
                    <source media="(min-width:0px) and (max-width:414px)" srcSet="./static/aspect-ratio-images/16x9-209x114.jpg" />
                    <source media="(min-width:415px) and (max-width:768px)" srcSet="./static/aspect-ratio-images/16x9-258x145.jpg" />
                    <source media="(min-width:769px)" srcSet="./static/aspect-ratio-images/16x9-209x114.jpg" />
                    <img className="PromoCards__CarouselItemButtonNavigationGraphic WhiteLabel" src="./static/aspect-ratio-images/16x9-209x114.jpg" alt="" />
                </picture>
            </div>
        </div>
    </div>
);

export default PromoCardsButtonNavigationItem;
