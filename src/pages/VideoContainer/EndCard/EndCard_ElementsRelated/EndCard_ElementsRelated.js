import React from "react";
import Link from "gatsby-link";
import { withPrefix } from "gatsby-link";

const EndCard_ElementsRelated = () => (
    <Link to="/" className="EndCard__ElementsRelatedItemContainer WhiteLabel">
        <div className="EndCard__ElementsRelatedItemOverlayContainer WhiteLabel">
            <div className="EndCard__ElementsRelatedItemOverlayImageContainer WhiteLabel">
                <picture>
                    <source media="(min-width: 0px) and (max-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} />
                    <source media="(min-width: 415px) and (max-width: 768px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} />
                    <source media="(min-width: 769px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} />
                    <img className="EndCard__ElementsRelatedItemOverlayImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} alt="" />
                </picture>
            </div>
        </div>
        <div className="EndCard__ElementsRelatedItemTextContainer WhiteLabel">
            <h3 className="EndCard__ElementsRelatedItemText WhiteLabel">
                ¿Qué hará juliantina con este amor?
            </h3>
        </div>
    </Link>
);

export default EndCard_ElementsRelated;
