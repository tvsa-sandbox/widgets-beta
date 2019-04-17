import React from "react";
import { Link } from "gatsby";

const ProfileFollow_Item = (props) => (
    <div className="ProfileFollow__ThumbContainer WhiteLabel" id={props.id}>
        <Link to="/" className="ProfileFollow__CarouselItem WhiteLabel">
            <div className="ProfileFollow__CarouselItemThumbnail WhiteLabel">
                <div className="ProfileFollow__CarouselItemImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px)" srcSet="./static/aspect-ratio-images/1x1-220x220.jpg" />
                        <img className="ProfileFollow__CarouselItemImage WhiteLabel" src="./static/aspect-ratio-images/1x1-220x220.jpg" alt="Test"/>
                    </picture>
                </div>
            </div>
            <div className="ProfileFollow__CarouselItemCaption WhiteLabel">
                <div className="ProfileFollow__CarouselItemTitleContainer WhiteLabel">
                    <h3 className="ProfileFollow__CarouselItemTitle WhiteLabel">
                        Depeche Mode Tour 2018
                    </h3>
                </div>
            </div>
        </Link>
    </div>
);

export default ProfileFollow_Item;
