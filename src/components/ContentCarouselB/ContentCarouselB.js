import React, { Component } from "react";
import { Link } from "gatsby";
import Logic from "../Carousel/Logic";
import ContentCarouselBItem from "./Items/ContentCarouselB_Item";

class ContentCarouselB extends Component {
    componentDidMount() {
        const LOGIC = new Logic();
        LOGIC.init = {
            id: "ucy0snoq1toccr",
            isMixed: false,
            moveItems: 1,
        };
    }

    render() {
        return (
            <section className="ContentCarouselB WhiteLabel">
                <div className="ContentCarouselB__TitleContainer WhiteLabel">
                    <h2 className="ContentCarouselB__Title WhiteLabel">
                        Content Carousel Item
                    </h2>
                </div>
                <section className="ContentCarouselB__Carousel WhiteLabel" id="Carousel-ucy0snoq1toccr">
                    <div className="ContentCarouselB__CarouselArrow-Previous WhiteLabel" id="Previous-ucy0snoq1toccr">
                        <button id="ArrowPrevious-ucy0snoq1toccr" className="ContentCarouselB__CarouselButton Icn_ArrowLeft WhiteLabel" type="button">
                            <span className="Display">
                                Arrow Previous
                            </span>
                        </button>
                    </div>
                    <div className="ContentCarouselB__CarouselTrack WhiteLabel" id="Track-ucy0snoq1toccr">
                        <div className="ContentCarouselB__CarouselThumbnails WhiteLabel"  id="ItemList-ucy0snoq1toccr" >
                                <ContentCarouselBItem id="item-ucy0snoq1toccr1" />
                                <ContentCarouselBItem id="item-ucy0snoq1toccr2" />
                                <ContentCarouselBItem id="item-ucy0snoq1toccr3" />
                                <ContentCarouselBItem id="item-ucy0snoq1toccr4" />
                                <ContentCarouselBItem id="item-ucy0snoq1toccr5" />
                                <ContentCarouselBItem id="item-ucy0snoq1toccr6" />
                                <ContentCarouselBItem id="item-ucy0snoq1toccr7" />
                                <ContentCarouselBItem id="item-ucy0snoq1toccr8" />
                                <ContentCarouselBItem id="item-ucy0snoq1toccr9" />
                                <ContentCarouselBItem id="item-ucy0snoq1toccr10" />
                                <ContentCarouselBItem id="item-ucy0snoq1toccr11" />
                                <ContentCarouselBItem id="item-ucy0snoq1toccr12" />
                                <ContentCarouselBItem id="item-ucy0snoq1toccr13" />
                                <ContentCarouselBItem id="item-ucy0snoq1toccr14" />
                                <ContentCarouselBItem id="item-ucy0snoq1toccr15" />
                                <ContentCarouselBItem id="item-ucy0snoq1toccr16" />
                        </div>
                    </div>
                    <div className="ContentCarouselB__CarouselArrow-Next WhiteLabel"  id="Next-ucy0snoq1toccr">
                        <button className="ContentCarouselB__CarouselButton Icn_ArrowRight WhiteLabel" type="button" id="ArrowNext-ucy0snoq1toccr" >
                            <span className="Display">
                                Arrow Next
                            </span>
                        </button>
                    </div>
                </section>
                <button className="ContentCarouselB__ButtonContainer WhiteLabel" type="button">
                    <Link className="ContentCarouselB__Button WhiteLabel" to="/">
                        Ver más avances
                    </Link>
                </button>
            </section>
        );
    }
}

export default ContentCarouselB;
