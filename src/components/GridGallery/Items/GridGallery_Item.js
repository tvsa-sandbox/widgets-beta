import React from "react";
import Link from "gatsby-link";
import { withPrefix } from "gatsby-link";

const GridGallery_Item = (props) => (
    <Link className="GridGallery__Item WhiteLabel" to="/">
        <div className="GridGallery__Thumbnail WhiteLabel">
            <div className="GridGallery__ItemImageContainer WhiteLabel">
                <picture>
                    <source media="(min-width: 0px) and (max-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-209x114.jpg")} />
                    <source media="(min-width: 415px) and (max-width: 768px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-258x145.jpg")} />
                    <source media="(min-width: 769px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-258x145.jpg")} />
                    <img className="GridGallery__ItemImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-209x114.jpg")} alt="Test" />
                </picture>
            </div>
        </div>
    </Link>
);

export default GridGallery_Item;
