import React, { Component } from "react";
import Logic from "../../Carousel/Logic";
import PromoCardsShowItem from "./PromoCardsShowItem";

class PromoCardsShow extends Component {
    componentDidMount(){
        const LOGIC = new Logic();
        LOGIC.init = {
            id: "ucy0snoq1topcsh",
            isMixed: false,
            moveItems: 1,
        };
    }

    render () {
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
                <div className="PromoCards__Carousel WhiteLabel" id="Carousel-ucy0snoq1topcsh">
                    <div className="PromoCards__CarouselArrow-Previous WhiteLabel" id="Previous-ucy0snoq1topcsh" >
                        <button id="ArrowPrevious-ucy0snoq1topcsh" className="PromoCards__CarouselButton Icn_ArrowLeft WhiteLabel" type="button">
                            <span className="Display">
                                Arrow Previous
                            </span>
                        </button>
                    </div>
                    <div className="PromoCards__CarouselTrack WhiteLabel"  id="Track-ucy0snoq1topcsh" >
                        <div className="PromoCards__CarouselThumbnails WhiteLabel"  id="ItemList-ucy0snoq1topcsh" >
                            <PromoCardsShowItem id="item-ucy0snoq1topcsh1" />
                            <PromoCardsShowItem id="item-ucy0snoq1topcsh2" />
                            <PromoCardsShowItem id="item-ucy0snoq1topcsh3" />
                            <PromoCardsShowItem id="item-ucy0snoq1topcsh4" />
                            <PromoCardsShowItem id="item-ucy0snoq1topcsh5" />
                            <PromoCardsShowItem id="item-ucy0snoq1topcsh6" />
                            <PromoCardsShowItem id="item-ucy0snoq1topcsh7" />
                            <PromoCardsShowItem id="item-ucy0snoq1topcsh8" />
                            <PromoCardsShowItem id="item-ucy0snoq1topcsh9" />
                            <PromoCardsShowItem id="item-ucy0snoq1topcsh10" />
                            <PromoCardsShowItem id="item-ucy0snoq1topcsh11" />
                            <PromoCardsShowItem id="item-ucy0snoq1topcsh13" />
                            <PromoCardsShowItem id="item-ucy0snoq1topcsh14" />
                            <PromoCardsShowItem id="item-ucy0snoq1topcsh15" />
                            <PromoCardsShowItem id="item-ucy0snoq1topcsh16" />
                        </div>
                    </div>
                    <div className="PromoCards__CarouselArrow-Next WhiteLabel"  id="Next-ucy0snoq1topcsh" >
                        <button className="PromoCards__CarouselButton Icn_ArrowRight WhiteLabel" type="button"  id="ArrowNext-ucy0snoq1topcsh">
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

export default PromoCardsShow;
