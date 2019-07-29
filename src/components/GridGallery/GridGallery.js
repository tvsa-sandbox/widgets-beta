import React from "react";
import GridGallery_Item from "./Items/GridGallery_Item";

const GridGallery = () => (
    <section className="GridGallery WhiteLabel">
        <div className="GridGallery__TitleContainer WhiteLabel">
            <h2 className="GridGallery__Title WhiteLabel">
                Messi y la Crisis en al Albiceleste
            </h2>
        </div>
        <div className="GridGallery__DescriptionContainer WhiteLabel">
            <h4 className="GridGallery__Description WhiteLabel">
                La Selección de Argentina y Leo Messi siguen atravesando 
                un mal momento futbolístico, que se confirma en la Copa América.
                La Copa América de Brasil 2019 puede ser la última oportunidad para 
                que los mejores jugadores de Conmebol consigan coronarse.
            </h4>
        </div>
        <div className="GridGallery__SourceContainer WhiteLabel">
            <span className="GridGallery__Source WhiteLabel">
                Redacción
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
