import React from "react";
import { Link } from "gatsby";

const FiveItems_BottomItem = () => (
    <Link className="FiveItems__ItemBottomItems WhiteLabel" to="/">
        <div className="FiveItems__ItemBottomItemsThumbnail WhiteLabel">
            <div className="FiveItems__ItemBottomItemsImageContainer WhiteLabel">
                <picture>
                    <source media="(min-width: 0px) and (max-width: 414px)" srcSet="./static/aspect-ratio-images/4x3-414x311.jpg" />
                    <source media="(min-width: 415px) and (max-width: 768px)" srcSet="./static/aspect-ratio-images/4x3-716x537.jpg" />
                    <source media="(min-width: 769px)" srcSet="./static/aspect-ratio-images/4x3-414x311.jpg" />
                    <img className="FiveItems__ItemBottomItemsImage WhiteLabel" src="./static/aspect-ratio-images/4x3-414x311.jpg" alt="Test" />
                </picture>
            </div>
            <div className="FiveItems__ItemBottomItemsIconContainer WhiteLabel">
                <div className="FiveItems__ItemBottomItemsIcon Icn_Gallery WhiteLabel">
                    <span className="Display">
                        Icono de Galería
                    </span>
                </div>
            </div>
            <div className="FiveItems__ItemBottomItemsDurationContainer WhiteLabel">
                <time className="FiveItems__ItemBottomItemsDuration WhiteLabel">
                    12:10
                </time>
            </div>
        </div>
        <div className="FiveItems__ItemBottomItemsCaption WhiteLabel">
            <div className="FiveItems__ItemBottomItemsLabelContainer WhiteLabel">
                <h4 className="FiveItems__ItemBottomItemsLabel WhiteLabel">
                    Las Estrellas
                </h4>
            </div>
            <div className="FiveItems__ItemBottomItemsTitleContainer WhiteLabel">
                <h3 className="FiveItems__ItemBottomItemsTitle WhiteLabel">
                    Mandzukic marca el gol de la ventaja en tiempo extra,Francia-Croacia Final Rusia
                </h3>
            </div>
        </div>
    </Link>
);


export default FiveItems_BottomItem;
