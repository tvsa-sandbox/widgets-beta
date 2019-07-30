import React from "react";
import GridGalleryItem from "./Items/GridGallery_Item";
import GridGalleryItemFull from "./ItemsFull/GridGallery_ItemFull";

const toggleModal = () => {
        const SELECTOR = "#Modal";
        const CARD = document.querySelector(SELECTOR);
        CARD.classList.toggle("Modal");
        CARD.classList.toggle("ModalDisplay");
    };

const GridGallery = () => (
    <section className="GridGallery WhiteLabel">
        <GridGalleryItemFull toggleModal={toggleModal}/>
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
            <GridGalleryItem toggleModal={toggleModal}/> 
            <GridGalleryItem toggleModal={toggleModal}/>
            <GridGalleryItem toggleModal={toggleModal}/>
            <GridGalleryItem toggleModal={toggleModal}/>
            <GridGalleryItem toggleModal={toggleModal}/>
            <GridGalleryItem toggleModal={toggleModal}/>
        </div>
    </section>
);

export default GridGallery;
