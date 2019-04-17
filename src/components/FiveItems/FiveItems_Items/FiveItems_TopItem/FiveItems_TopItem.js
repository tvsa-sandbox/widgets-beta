import React from "react";
import { Link } from "gatsby";

const FiveItems_TopItem = () => (
    <Link className="FiveItems__ItemTopItems WhiteLabel" to="/">
        <div className="FiveItems__ItemTopItemsThumbnail WhiteLabel">
            <div className="FiveItems__ItemTopItemsImageContainer WhiteLabel">
                <picture>
                    <source media="(min-width: 0px) and (max-width: 414px)" srcSet="./static/aspect-ratio-images/4x3-414x311.jpg" />
                    <source media="(min-width: 415px) and (max-width: 768px)" srcSet="./static/aspect-ratio-images/4x3-716x537.jpg" />
                    <source media="(min-width: 769px)" srcSet="./static/aspect-ratio-images/4x3-414x311.jpg" />
                    <img className="FiveItems__ItemTopItemsImage WhiteLabel" src="./static/aspect-ratio-images/4x3-414x311.jpg" alt="Test" />
                </picture>
            </div>
            <div className="FiveItems__ItemTopItemsIconContainer WhiteLabel">
                <div className="FiveItems__ItemTopItemsIcon Icn_Gallery WhiteLabel">
                    <span className="Display">
                        Icono de Galería
                    </span>
                </div>
            </div>
            <div className="FiveItems__ItemTopItemsDurationContainer WhiteLabel">
                <time className="FiveItems__ItemTopItemsDuration WhiteLabel">
                    12:10
                </time>
            </div>
            <div className="FiveItems__ItemTopItemsLabelContainer WhiteLabel">
                <h4 className="FiveItems__ItemTopItemsLabel WhiteLabel">
                    Las Estrellas
                </h4>
            </div>
            <div className="FiveItems__ItemTopItemsTitleContainer WhiteLabel">
                <h3 className="FiveItems__ItemTopItemsTitle WhiteLabel">
                    Mandzukic marca el gol de la ventaja en tiempo extra,Francia-Croacia Final Rusia
                </h3>
            </div>
        </div>
    </Link>
);

export default FiveItems_TopItem;
