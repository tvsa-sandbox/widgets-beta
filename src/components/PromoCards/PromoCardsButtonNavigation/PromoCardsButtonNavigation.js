import React, { Component } from "react";
import Logic from "../../Carousel/Logic";
import PromoCardsButtonNavigationItem from "./PromoCardsButtonNavigationItem";

class PromoCardsButtonNavigation extends Component {
    componentDidMount() {
        const LOGIC = new Logic();
        LOGIC.init = {
            id: "ucy0snoq1totv35",
            isMixed: false,
            moveItems: 1,
        };
    }

    render() {
        return (
            <section className="PromoCards WhiteLabel">
                <div className="PromoCards__CarouselButtonNavigation WhiteLabel">
                    <div className="PromoCards__CarouselButtonNavigationTrack WhiteLabel">
                        <div className="PromoCards__CarouselButtonNavigationThumbnails WhiteLabel">
                            <div className="PromoCards__CarouselButtonNavigationThumbContainer WhiteLabel">
                                <nav className="PromoCards__CarouselNavigation WhiteLabel">
                                    <div className="PromoCards__CarouselButtonNavigationContainer WhiteLabel">
                                        <button className="PromoCards__CarouselButton-Active WhiteLabel" type="button">
                                            <h2 className="PromoCards__CarouselButtonText-Active WhiteLabel">
                                                Telenovelas
                                            </h2>
                                        </button>
                                        <button className="PromoCards__ButtonNavigation WhiteLabel" type="button">
                                            <h2 className="PromoCards__ButtonNavigationText WhiteLabel">
                                                Programas
                                            </h2>
                                        </button>
                                        <button className="PromoCards__ButtonNavigation WhiteLabel" type="button">
                                            <h2 className="PromoCards__ButtonNavigationText WhiteLabel">
                                                Noticias
                                            </h2>
                                        </button>
                                        <button className="PromoCards__ButtonNavigation WhiteLabel" type="button">
                                            <h2 className="PromoCards__ButtonNavigationText WhiteLabel">
                                                Espectáculos
                                            </h2>
                                        </button>
                                        <button className="PromoCards__ButtonNavigation WhiteLabel" type="button">
                                            <h2 className="PromoCards__ButtonNavigationText WhiteLabel">
                                               Realities
                                            </h2>
                                        </button>
                                        <button className="PromoCards__ButtonNavigation WhiteLabel" type="button">
                                            <h2 className="PromoCards__ButtonNavigationText WhiteLabel">
                                                Clima
                                            </h2>
                                        </button>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="PromoCards__Carousel WhiteLabel" id="Carousel-ucy0snoq1totv35">
                    <div className="PromoCards__CarouselArrow-Previous WhiteLabel" id="Previous-ucy0snoq1totv35">
                        <button className="PromoCards__CarouselButton Icn_ArrowLeft WhiteLabel" type="button" id="ArrowPrevious-ucy0snoq1totv35">
                            <span className="Display">
                                Arrow Previous
                            </span>
                        </button>
                    </div>
                    <div className="PromoCards__CarouselTrack WhiteLabel" id="Track-ucy0snoq1totv35">
                        <div className="PromoCards__CarouselThumbnails WhiteLabel" id="ItemList-ucy0snoq1totv35">
                            <PromoCardsButtonNavigationItem id="item-ucy0snoq1totv351" />
                            <PromoCardsButtonNavigationItem id="item-ucy0snoq1totv352" />
                            <PromoCardsButtonNavigationItem id="item-ucy0snoq1totv353" />
                            <PromoCardsButtonNavigationItem id="item-ucy0snoq1totv354" />
                            <PromoCardsButtonNavigationItem id="item-ucy0snoq1totv355" />
                            <PromoCardsButtonNavigationItem id="item-ucy0snoq1totv356" />
                            <PromoCardsButtonNavigationItem id="item-ucy0snoq1totv357" />
                            <PromoCardsButtonNavigationItem id="item-ucy0snoq1totv358" />
                            <PromoCardsButtonNavigationItem id="item-ucy0snoq1totv359" />
                            <PromoCardsButtonNavigationItem id="item-ucy0snoq1totv3510" />
                            <PromoCardsButtonNavigationItem id="item-ucy0snoq1totv3511" />
                            <PromoCardsButtonNavigationItem id="item-ucy0snoq1totv3512" />
                            <PromoCardsButtonNavigationItem id="item-ucy0snoq1totv3513" />
                            <PromoCardsButtonNavigationItem id="item-ucy0snoq1totv3514" />
                            <PromoCardsButtonNavigationItem id="item-ucy0snoq1totv3515" />
                        </div>
                    </div>
                    <div className="PromoCards__CarouselArrow-Next WhiteLabel" id="Next-ucy0snoq1totv35">
                        <button className="PromoCards__CarouselButton Icn_ArrowRight WhiteLabel" type="button" id="ArrowNext-ucy0snoq1totv35">
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

export default PromoCardsButtonNavigation;
