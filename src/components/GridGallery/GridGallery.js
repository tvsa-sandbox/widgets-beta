import React from "react";
import Link from "gatsby-link";
import GridGallery_Item from "./Items/GridGallery_Item";

const GridGallery = () => (
    <section className="GridGallery WhiteLabel">
        <div className="GridGallery__TitleContainer WhiteLabel">
            <h2 className="GridGallery__Title WhiteLabel">
                GP Alemania
            </h2>
        </div>
        <div className="GridGallery__DescriptionContainer WhiteLabel">
            <h4 className="GridGallery__Description WhiteLabel">
                En accidentada carrera Max Verstappen se adjudica el GP de Alemania
            </h4>
        </div>
        <div className="GridGallery__SourceContainer WhiteLabel">
            <span className="GridGallery__Source WhiteLabel">
                AP
            </span>
        </div>
        <div className="GridGallery__ItemsContainer WhiteLabel">
            <GridGallery_Item />
            <GridGallery_Item />
            <GridGallery_Item />
            <GridGallery_Item />
            <GridGallery_Item />
            <GridGallery_Item />
        </div>
    </section>
);

export default GridGallery;
