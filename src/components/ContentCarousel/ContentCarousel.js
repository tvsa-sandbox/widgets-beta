import React, { Component } from "react";
import { Link } from "gatsby";
import Logic from "../Carousel/Logic";
import ContentCarouselItem from "./Items/ContentCarousel_Item";

class ContentCarousel extends Component {
    componentDidMount() {
        const LOGIC = new Logic();
        LOGIC.init = {
            id: "ucy0snoq1tocc",
            isMixed: false,
            moveItems: 1,
        };
    }

    render() {
        return (
            <section className="ContentCarousel WhiteLabel">
                <div className="ContentCarousel__TitleContainer WhiteLabel">
                    <h2 className="ContentCarousel__Title WhiteLabel">
                        Content Carousel Item
                    </h2>
                </div>
                <section className="ContentCarousel__Carousel WhiteLabel" id="Carousel-ucy0snoq1tocc">
                    <div className="ContentCarousel__CarouselArrow-Previous WhiteLabel" id="Previous-ucy0snoq1tocc">
                        <button id="ArrowPrevious-ucy0snoq1tocc" className="ContentCarousel__CarouselButton Icn_ArrowLeft WhiteLabel" type="button">
                            <span className="Display">
                                Arrow Previous
                            </span>
                        </button>
                    </div>
                    <div className="ContentCarousel__CarouselTrack WhiteLabel" id="Track-ucy0snoq1tocc">
                        <div className="ContentCarousel__CarouselThumbnails WhiteLabel"  id="ItemList-ucy0snoq1tocc" >
                                <ContentCarouselItem id="item-ucy0snoq1tocc1" />
                                <ContentCarouselItem id="item-ucy0snoq1tocc2" />
                                <ContentCarouselItem id="item-ucy0snoq1tocc3" />
                                <ContentCarouselItem id="item-ucy0snoq1tocc4" />
                                <ContentCarouselItem id="item-ucy0snoq1tocc5" />
                                <ContentCarouselItem id="item-ucy0snoq1tocc6" />
                                <ContentCarouselItem id="item-ucy0snoq1tocc7" />
                                <ContentCarouselItem id="item-ucy0snoq1tocc8" />
                                <ContentCarouselItem id="item-ucy0snoq1tocc9" />
                                <ContentCarouselItem id="item-ucy0snoq1tocc10" />
                                <ContentCarouselItem id="item-ucy0snoq1tocc11" />
                                <ContentCarouselItem id="item-ucy0snoq1tocc12" />
                                <ContentCarouselItem id="item-ucy0snoq1tocc13" />
                                <ContentCarouselItem id="item-ucy0snoq1tocc14" />
                                <ContentCarouselItem id="item-ucy0snoq1tocc15" />
                                <ContentCarouselItem id="item-ucy0snoq1tocc16" />
                        </div>
                    </div>
                    <div className="ContentCarousel__CarouselArrow-Next WhiteLabel"  id="Next-ucy0snoq1tocc">
                        <button className="ContentCarousel__CarouselButton Icn_ArrowRight WhiteLabel" type="button" id="ArrowNext-ucy0snoq1tocc" >
                            <span className="Display">
                                Arrow Next
                            </span>
                        </button>
                    </div>
                </section>
                <button className="ContentCarousel__ButtonContainer WhiteLabel" type="button">
                    <Link className="ContentCarousel__Button WhiteLabel" to="/">
                        Ver más avances
                    </Link>
                </button>
            </section>
        );
    }
}

export default ContentCarousel;
