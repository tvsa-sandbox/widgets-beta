import React from "react";
import { Link } from "gatsby";

const HighImpactCentered_LeftItem = () => (
    <Link to="/" className="HighImpactCentered__LeftItem WhiteLabel">
        <div className="HighImpactCentered__LeftItemThumbnail WhiteLabel">
            <div className="HighImpactJustifiedLeft__RightItemImageContainer WhiteLabel">
                <source media="(min-width: 0px) and (max-width: 414px)" srcSet="./static/aspect-ratio-images/16x9-414x233.jpg" />
                <source media="(min-width: 415px)" srcSet="./static/aspect-ratio-images/16x9-716x403.jpg" />
                <img src="./static/aspect-ratio-images/16x9-716x403.jpg" className="HighImpactJustifiedLeft__RightItemImage WhiteLabel" alt="test"/>
            </div>
            <div className="HighImpactCentered__LeftItemLabelContainer WhiteLabel">
                <span className="HighImpactCentered__LeftItemLabel WhiteLabel">
                    Video
                </span>
            </div>
        </div>
        <div className="HighImpactCentered__LeftItemCaption WhiteLabel">
            <div className="HighImpactCentered__LeftItemTitleContainer WhiteLabel">
                <h3 className="HighImpactCentered__LeftItemTitle WhiteLabel">
                    Subcampeones croatas regresan a su país
                    felices por su desempeño en el campo !!!
                </h3>
            </div>
            <div className="HighImpactCentered__LeftItemDescriptionContainer WhiteLabel">
                <p className="HighImpactCentered__LeftItemDescription WhiteLabel">
                   Conoce más sobre el regreso de los subcampeones cro atas
                   regresan a su país felices por su desempeño en el
                   campo, solo aquí en Televisa Deportes
                </p>
            </div>
        </div>
    </Link>
);

export default HighImpactCentered_LeftItem;
