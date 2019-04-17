import React, { Component } from "react";
import Logic from "../../Carousel/Logic";
import PromoCardsSectionItem from "./PromoCardsSectionItem";

class PromoCardsSection extends Component {
    componentDidMount(){
        const LOGIC = new Logic();
        LOGIC.init = {
            id: "ucy0snoq1topcs",
            isMixed: false,
            moveItems: 1,
        };
    }

    render () {
        return (
            <section className="PromoCards WhiteLabel">
                <nav className="PromoCards__Navigation WhiteLabel">
                    <div className="PromoCards__TitleContainer WhiteLabel">
                        <h2 className="PromoCards__Title WhiteLabel">
                            Section Title
                        </h2>
                    </div>
                </nav>
                <div className="PromoCards__Carousel WhiteLabel"  id="Carousel-ucy0snoq1topcs">
                    <div className="PromoCards__CarouselArrow-Previous WhiteLabel"  id="Previous-ucy0snoq1topcs" >
                        <button id="ArrowPrevious-ucy0snoq1topcs" className="PromoCards__CarouselButton Icn_ArrowLeft WhiteLabel" type="button">
                            <span className="Display">
                                Arrow Previous
                            </span>
                        </button>
                    </div>
                    <div className="PromoCards__CarouselTrack WhiteLabel" id="Track-ucy0snoq1topcs" >
                        <div className="PromoCards__CarouselThumbnails WhiteLabel" id="ItemList-ucy0snoq1topcs" >
                            <PromoCardsSectionItem id="item-ucy0snoq1topcs1" />
                            <PromoCardsSectionItem id="item-ucy0snoq1topcs2" />
                            <PromoCardsSectionItem id="item-ucy0snoq1topcs3" />
                            <PromoCardsSectionItem id="item-ucy0snoq1topcs4" />
                            <PromoCardsSectionItem id="item-ucy0snoq1topcs5" />
                            <PromoCardsSectionItem id="item-ucy0snoq1topcs6" />
                            <PromoCardsSectionItem id="item-ucy0snoq1topcs7" />
                            <PromoCardsSectionItem id="item-ucy0snoq1topcs8" />
                            <PromoCardsSectionItem id="item-ucy0snoq1topcs9" />
                            <PromoCardsSectionItem id="item-ucy0snoq1topcs10" />
                            <PromoCardsSectionItem id="item-ucy0snoq1topcs11" />
                            <PromoCardsSectionItem id="item-ucy0snoq1topcs12" />
                            <PromoCardsSectionItem id="item-ucy0snoq1topcs13" />
                            <PromoCardsSectionItem id="item-ucy0snoq1topcs14" />
                            <PromoCardsSectionItem id="item-ucy0snoq1topcs15" />
                            <PromoCardsSectionItem id="item-ucy0snoq1topcs16" />
                            <PromoCardsSectionItem id="item-ucy0snoq1topcs17" />
                            <PromoCardsSectionItem id="item-ucy0snoq1topcs18" />
                            <PromoCardsSectionItem id="item-ucy0snoq1topcs19" />
                            <PromoCardsSectionItem id="item-ucy0snoq1topcs20" />
                            <PromoCardsSectionItem id="item-ucy0snoq1topcs21" />
                        </div>
                    </div>
                    <div className="PromoCards__CarouselArrow-Next WhiteLabel"  id="Next-ucy0snoq1topcs" >
                        <button className="PromoCards__CarouselButton Icn_ArrowRight WhiteLabel" type="button"  id="ArrowNext-ucy0snoq1topcs" >
                            <span className="Display">
                                Arrow Next
                            </span>
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}

export default PromoCardsSection;
