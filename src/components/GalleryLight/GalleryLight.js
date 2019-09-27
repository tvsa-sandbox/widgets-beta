import React from "react";
// import { Link } from "gatsby";
import { withPrefix } from "gatsby";
import GridGalleryItemFull from "../GridGallery/ItemsFull/GridGallery_ItemFull";

const toggleModal = () => {
        const SELECTOR = "#Modal";
        const CARD = document.querySelector(SELECTOR);
        CARD.classList.toggle("Modal");
        CARD.classList.toggle("ModalDisplay");
    };

const GalleryLight = () => (
    <section className="GalleryLight WhiteLabel">
        <div className="GalleryLight__BoxContainer WhiteLabel">
            <div className="GalleryLight__TitleContainer WhiteLabel">
                <h2 className="GalleryLight__Title WhiteLabel">
                    México vs Argentina
                </h2>
            </div>
            <div className="GalleryLight__SliderContainer WhiteLabel">
                <div className="GalleryLight__SliderImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-414x233.jpg")} />
                            <img className="GalleryLight__MiniImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-414x233.jpg")} alt="Test" />
                    </picture>
                </div>
            </div>
            <div className="GalleryLight__ListMiniContainer WhiteLabel">
                <div className="GalleryLight__MiniImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} />
                            <img className="GalleryLight__MiniImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} alt="Test" />
                    </picture>
                </div>
                <div className="GalleryLight__MiniImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} />
                            <img className="GalleryLight__MiniImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} alt="Test" />
                    </picture>
                </div>
                <div className="GalleryLight__MiniImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} />
                            <img className="GalleryLight__MiniImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} alt="Test" />
                    </picture>
                </div>
                <div className="GalleryLight__MiniImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} />
                            <img className="GalleryLight__MiniImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} alt="Test" />
                    </picture>
                </div>
                <div className="GalleryLight__MiniImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} />
                            <img className="GalleryLight__MiniImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} alt="Test" />
                    </picture>
                </div>
                <button className="GalleryLight__Mini WhiteLabel" onClick={() => toggleModal()} id="ModalButton">
                    <div className="GalleryLight__MiniCounterContainer WhiteLabel">
                        <span className="GalleryLight__MiniCounter WhiteLabel">
                            + 10
                        </span>
                    </div>
                    <div className="GalleryLight__MiniImageContainer WhiteLabel">
                        <picture>
                            <source media="(min-width: 0px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} />
                                <img className="GalleryLight__MiniImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} alt="Test" />
                        </picture>
                    </div>
                </button>
            </div>
        </div>
        <GridGalleryItemFull toggleModal={toggleModal} />
    </section>
);

export default GalleryLight;
