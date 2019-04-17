import React from "react";
import { Link } from "gatsby";
import { withPrefix } from "gatsby";

const RelatedContent__Item = (props) => (

    <Link className="RelatedContent__Item WhiteLabel" to="/" >
        <div className="RelatedContent__ItemThumbnail WhiteLabel">
            <div className="RelatedContent__ItemImageContainer WhiteLabel">
                <picture>
                    <source media="(min-width: 0px) and (max-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/4x3-268x202.jpg")} />
                    <source media="(min-width: 415px) and (max-width: 768px)" srcSet={withPrefix("/static/aspect-ratio-images/4x3-268x202.jpg")} />
                    <source media="(min-width: 769px)" srcSet={withPrefix("/static/aspect-ratio-images/4x3-414x311.jpg")} />
                    <img src={withPrefix("/static/aspect-ratio-images/4x3-268x202.jpg")} className="RelatedContent__ItemImage" alt="test"/>
                </picture>
            </div>
            </div>
        <div className="RelatedContent__ItemCaption WhiteLabel">
            <div className="RelatedContent__ItemTitleContainer WhiteLabel">
                <h2 className="RelatedContent__ItemTitle WhiteLabel">
                    CINCO VENTAJAS DE VIVIR CERCA DE LOS ABUELOS
                </h2>
            </div>
        </div>
    </Link>
);

export default RelatedContent__Item;
