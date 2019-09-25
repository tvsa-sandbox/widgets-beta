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

const GalleryMosaic = () => (
    <section className="GalleryMosaic WhiteLabel">
        <div className="GalleryMosaic__BoxContainer WhiteLabel">
            <div className="GalleryMosaic__TitleContainer WhiteLabel">
                <p className="GalleryMosaic__Title WhiteLabel">
                    México vs Argentina
                </p>
            </div>
            <div className="GalleryMosaic__SliderContainer WhiteLabel">
                <div className="GalleryMosaic__SliderImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-414x233.jpg")} />
                            <img className="GalleryMosaic__MiniImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-414x233.jpg")} alt="Test" />
                    </picture>
                </div>
            </div>
            <div className="GalleryMosaic__ListMiniContainer WhiteLabel">
                <div className="GalleryMosaic__MiniImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} />
                            <img className="GalleryMosaic__MiniImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} alt="Test" />
                    </picture>
                </div>
                <div className="GalleryMosaic__MiniImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} />
                            <img className="GalleryMosaic__MiniImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} alt="Test" />
                    </picture>
                </div>
                <div className="GalleryMosaic__MiniImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} />
                            <img className="GalleryMosaic__MiniImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} alt="Test" />
                    </picture>
                </div>
                <div className="GalleryMosaic__MiniImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} />
                            <img className="GalleryMosaic__MiniImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} alt="Test" />
                    </picture>
                </div>
                <div className="GalleryMosaic__MiniImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} />
                            <img className="GalleryMosaic__MiniImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} alt="Test" />
                    </picture>
                </div>
                <button className="GalleryMosaic__Mini WhiteLabel" onClick={() => toggleModal()} id="ModalButton">
                    <div className="GalleryMosaic__MiniCounterContainer WhiteLabel">
                        <span className="GalleryMosaic__MiniCounter WhiteLabel">
                            + 10
                        </span>
                    </div>
                    <div className="GalleryMosaic__MiniImageContainer WhiteLabel">
                        <picture>
                            <source media="(min-width: 0px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} />
                                <img className="GalleryMosaic__MiniImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} alt="Test" />
                        </picture>
                    </div>
                </button>
            </div>
        </div>
        <GridGalleryItemFull toggleModal={toggleModal} />
    </section>
);

export default GalleryMosaic;
