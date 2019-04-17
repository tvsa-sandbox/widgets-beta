import React from "react";
import { Link } from "gatsby";

const HighImpactCentered_LeftItem = () => (
    <Link to="/" className="HighImpactCentered__RightItem WhiteLabel">
        <div className="HighImpactCentered__RightItemThumbnail WhiteLabel">
            <div className="HighImpactCentered__RightItemImageContainer WhiteLabel">
                <picture>
                    <source media="(min-width: 0px) and (max-width: 414px)" srcSet="./static/aspect-ratio-images/1x1-220x220.jpg" />
                    <source media="(min-width: 415px) and (max-width: 768px)" srcSet="./static/aspect-ratio-images/1x1-414x414.jpg" />
                    <source media="(min-width: 769px) and (max-width: 1280px)"  srcSet="./static/aspect-ratio-images/1x1-220x220.jpg" />
                    <img src="./static/aspect-ratio-images/1x1-220x220.jpg" className="HighImpactCentered__RightItemImage WhiteLabel" alt="test"/>
                </picture>
            </div>
        </div>
        <div className="HighImpactCentered__RightItemCaption WhiteLabel">
            <div className="HighImpactCentered__RightItemTitleContainer WhiteLabel">
                <h3 className="HighImpactCentered__RightItemTitle WhiteLabel">
                    Mandzukic marca el gol de la ventaja en
                    tiempo extra,Francia-Croacia Final Rusia
                </h3>
            </div>
            <div className="HighImpactCentered__RightItemDescriptionContainer WhiteLabel">
                <p className="HighImpactCentered__RightItemDescription WhiteLabel">
                    La Selección Mexicana, con gol de Fernando Quirarte,
                    derrota a su similar de Irák durante la primera fase del
                    Mundial de México 1986,en Televisa
                </p>
            </div>
        </div>
    </Link>
);

export default HighImpactCentered_LeftItem;
