import React from "react";
import { Link } from "gatsby";

const PromoCardsChapterItem = (props) => (
    <div className="PromoCards__ThumbContainer WhiteLabel" id={props.id}>
        <div className="PromoCards__BoxContainer WhiteLabel">
            <div className="PromoCards__ItemContainer WhiteLabel">
                <Link to="/" className="PromoCards__CarouselItemChapter WhiteLabel">
                    <div className="PromoCards__CarouselItemChapterThumbnail WhiteLabel">
                        <div className="PromoCards__CarouselItemChapterImageContainer WhiteLabel">
                            <picture>
                                <source media="(min-width:0px) and (max-width:414px)" srcSet="./static/aspect-ratio-images/3x4-225x301.jpg" />
                                <source media="(min-width:415px) and (max-width:768px)" srcSet="./static/aspect-ratio-images/3x4-320x426.jpg" />
                                <source media="(min-width:769px)" srcSet="./static/aspect-ratio-images/3x4-225x301.jpg" />
                                <img src="./static/aspect-ratio-images/3x4-225x301.jpg" className="PromoCards__CarouselItemChapterImage WhiteLabel" alt="" />
                            </picture>
                        </div>
                        <div className="PromoCards__CarouselItemChapterIconContainer WhiteLabel">
                            <div className="PromoCards__CarouselItemChapterIcon Icn_Video WhiteLabel">
                                <span className="Display">
                                    Icn_Video Icon
                                </span>
                            </div>
                        </div>
                        <div className="PromoCards__CarouselItemChapterDateContainer WhiteLabel">
                            <time className="PromoCards__CarouselItemChapterDate WhiteLabel" dateTime="2018-06-22">
                                Capitulo 25 / 20 julio 2018
                            </time>
                        </div>
                        <div className="PromoCards__CarouselItemChapterTitleContainer WhiteLabel">
                            <h3 className="PromoCards__CarouselItemChapterTitle WhiteLabel">
                                Mandzukic marca el gol de la ventaja en tiempo extra,Francia
                            </h3>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="PromoCards__CarouselItemChapterGraphicContainer WhiteLabel">
                <picture>
                    <source media="(min-width:0px) and (max-width:414px)" srcSet="./static/aspect-ratio-images/16x9-209x114.jpg" />
                    <source media="(min-width:415px) and (max-width:768px)" srcSet="./static/aspect-ratio-images/16x9-258x145.jpg" />
                    <source media="(min-width:769px)" srcSet="./static/aspect-ratio-images/16x9-209x114.jpg" />
                    <img className="PromoCards__CarouselItemChapterGraphic WhiteLabel" src="./static/aspect-ratio-images/16x9-209x114.jpg" alt="" />
                </picture>
            </div>
        </div>
    </div>
);

export default PromoCardsChapterItem;
