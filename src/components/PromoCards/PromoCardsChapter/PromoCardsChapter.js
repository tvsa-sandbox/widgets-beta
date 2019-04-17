import React, { Component } from "react";
import Logic from "../../Carousel/Logic";
import PromoCardsChapterItem from "./PromoCardsChapterItem";

class PromoCardsChapter extends Component{
    componentDidMount(){
        const LOGIC = new Logic();
        LOGIC.init = {
            id: "ucy0snoq1to",
            isMixed: false,
            moveItems: 1,
        };
    }
    render() {
        return (
            <section className="PromoCards WhiteLabel">
                <nav className="PromoCards__Navigation WhiteLabel">
                    <div className="PromoCards__ButtonsContainer WhiteLabel">
                        <button className="PromoCards__Button-Active WhiteLabel" type="button">
                            <h2 className="PromoCards__ButtonText WhiteLabel">
                                Telenovelas
                            </h2>
                        </button>
                        <button className="PromoCards__Button WhiteLabel" type="button">
                            <h2 className="PromoCards__ButtonText WhiteLabel">
                                Programas
                            </h2>
                        </button>
                        <button className="PromoCards__Button WhiteLabel" type="button">
                            <h2 className="PromoCards__ButtonText WhiteLabel">
                                Noticias
                            </h2>
                        </button>
                        <button className="PromoCards__Button WhiteLabel" type="button">
                            <h2 className="PromoCards__ButtonText WhiteLabel">
                                Espectáculos
                            </h2>
                        </button>
                        <button className="PromoCards__Button WhiteLabel" type="button">
                            <h2 className="PromoCards__ButtonText WhiteLabel">
                                Realities
                            </h2>
                        </button>
                        <button className="PromoCards__Button WhiteLabel" type="button">
                            <h2 className="PromoCards__ButtonText WhiteLabel">
                                Clima
                            </h2>
                        </button>
                    </div>
                    <div className="PromoCards__SelectContainer WhiteLabel">
                        <select className="PromoCards__Select WhiteLabel">
                            <option value="http://www.televisa.com/">
                                Telenovelas
                            </option>
                            <option value="http://www.televisa.com/">
                                Programas
                            </option>
                            <option value="http://www.televisa.com/">
                                Noticias
                            </option>
                            <option value="http://www.televisa.com/">
                                Espectáculos
                            </option>
                            <option value="http://www.televisa.com/">
                                Realities
                            </option>
                            <option value="http://www.televisa.com/">
                                Clima
                            </option>
                        </select>
                    </div>
                </nav>
                <div className="PromoCards__Carousel WhiteLabel" id="Carousel-ucy0snoq1to">
                    <div className="PromoCards__CarouselArrow-Previous WhiteLabel" id="Previous-ucy0snoq1to">
                        <button id="ArrowPrevious-ucy0snoq1to" className="PromoCards__CarouselButton Icn_ArrowLeft WhiteLabel" type="button">
                            <span className="Display">
                                Arrow Previous
                            </span>
                        </button>
                    </div>
                    <div className="PromoCards__CarouselTrack WhiteLabel" id="Track-ucy0snoq1to">
                        <div className="PromoCards__CarouselThumbnails WhiteLabel" id="ItemList-ucy0snoq1to">
                            <PromoCardsChapterItem id="item-ucy0snoq1to1"/>
                            <PromoCardsChapterItem id="item-ucy0snoq1to2"/>
                            <PromoCardsChapterItem id="item-ucy0snoq1to3"/>
                            <PromoCardsChapterItem id="item-ucy0snoq1to4"/>
                            <PromoCardsChapterItem id="item-ucy0snoq1to5"/>
                            <PromoCardsChapterItem id="item-ucy0snoq1to6"/>
                            <PromoCardsChapterItem id="item-ucy0snoq1to7"/>
                            <PromoCardsChapterItem id="item-ucy0snoq1to8"/>
                            <PromoCardsChapterItem id="item-ucy0snoq1to9"/>
                            <PromoCardsChapterItem id="item-ucy0snoq1to10"/>
                            <PromoCardsChapterItem id="item-ucy0snoq1to11"/>
                            <PromoCardsChapterItem id="item-ucy0snoq1to12"/>
                            <PromoCardsChapterItem id="item-ucy0snoq1to13"/>
                            <PromoCardsChapterItem id="item-ucy0snoq1to14"/>
                            <PromoCardsChapterItem id="item-ucy0snoq1to15"/>
                        </div>
                    </div>
                    <div className="PromoCards__CarouselArrow-Next WhiteLabel" id="Next-ucy0snoq1to">
                        <button className="PromoCards__CarouselButton Icn_ArrowRight WhiteLabel" id="ArrowNext-ucy0snoq1to" type="button" >
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

export default PromoCardsChapter;
