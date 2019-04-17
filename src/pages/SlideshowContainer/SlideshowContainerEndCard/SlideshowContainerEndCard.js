import React from "react";
import SlideshowContainerEndThumbs from "./SlideshowContainerEndThumbs";

const SlideshowContainerEndCard = () => (
    <div className="SlideshowContainer__EndCard WhiteLabel">
        <div className="SlideshowContainer__EndCardContainer WhiteLabel">
            <div className="SlideshowContainer__EndCardTitleContainer WhiteLabel">
                <h2 className="SlideshowContainer__EndCardTitle WhiteLabel">
                    Cargando Siguiente galería
                </h2>
            </div>
            <div className="SlideshowContainer__EndCardThumbsContainer WhiteLabel">
                <SlideshowContainerEndThumbs />
                <SlideshowContainerEndThumbs />
                <SlideshowContainerEndThumbs />
            </div>
        </div>
    </div>
);

export default SlideshowContainerEndCard;
