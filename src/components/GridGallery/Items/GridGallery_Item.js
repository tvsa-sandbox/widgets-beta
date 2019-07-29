import React from "react";
import Link from "gatsby-link";
import { withPrefix } from "gatsby-link";

const GridGalleryt_Item = (props) => (
    <Link className="GridGalleryt__Item WhiteLabel" to="/" id={props.id}>
        <div className="GridGalleryt__Thumbnail WhiteLabel">
            <div className="GridGalleryt__ItemImageContainer WhiteLabel">
                <picture>
                    <source media="(min-width: 0px) and (max-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/1x1-158x158.jpg")} />
                    <source media="(min-width: 415px)" srcSet={withPrefix("/static/aspect-ratio-images/1x1-414x414.jpg")} />
                    <img className="GridGalleryt__CarouselItemImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/1x1-414x414.jpg")} alt="Test" />
                </picture>
            </div>
        </div>
        <div className="GridGalleryt__ItemCaption WhiteLabel">
            <div className="GridGalleryt__ItemTitleContainer WhiteLabel">
                <h3 className="GridGalleryt__ItemTitle WhiteLabel">
                    Aislinn Derbez Muestra la madre orgullosa que es con tierna foto junto a Kailani
                </h3>
            </div>
        </div>
    </Link>
);

export default GridGallery_Item;
