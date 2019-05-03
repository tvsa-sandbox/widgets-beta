import React, { Component } from "react";
import Logic from "../Carousel/Logic";
import NotesCarouselItem from "./Item/NotesCarousel_Item";

class NotesCarousel extends Component {
    componentDidMount() {
        const LOGIC = new Logic();
        LOGIC.init = {
            id: "ucy0snoq1tocn",
            isMixed: false,
            moveItems: 1,
        };
    }

  render() {
      return (
            <section className="NotesCarousel WhiteLabel">
                <div className="NotesCarousel__Carousel WhiteLabel" id="Carousel-ucy0snoq1tocn">

                    <div className="NotesCarousel__CarouselTrack WhiteLabel" id="Track-ucy0snoq1tocn">
                        <div className="NotesCarousel__CarouselThumbnails WhiteLabel" id="ItemList-ucy0snoq1tocn">
                            <NotesCarouselItem id="item-ucy0snoq1tocn1" />
                            <NotesCarouselItem id="item-ucy0snoq1tocn2" />
                            <NotesCarouselItem id="item-ucy0snoq1tocn3" />
                            <NotesCarouselItem id="item-ucy0snoq1tocn4" />
                            <NotesCarouselItem id="item-ucy0snoq1tocn5" />
                        </div>
                    </div>

                    <div className="NotesCarousel__CarouselArrowsContainer">
                        <div className="NotesCarousel__CarouselArrow-Previous WhiteLabel" id="Previous-ucy0snoq1tocn">
                            <button id="ArrowPrevious-ucy0snoq1tocn" className="NotesCarousel__CarouselButton Icn_ArrowLeft WhiteLabel" type="button">
                                <span className="Display">
                                    Arrow Previous
                                </span>
                            </button>
                        </div>
                        <div className="NotesCarousel__CarouselArrow-Next WhiteLabel"  id="Next-ucy0snoq1tocn">
                            <button className="NotesCarousel__CarouselButton Icn_ArrowRight WhiteLabel" type="button" id="ArrowNext-ucy0snoq1tocn" >
                                <span className="Display">
                                    Arrow Next
                                </span>
                            </button>
                        </div>
                    </div>

                </div>
          </section>

      );
  }
}

export default NotesCarousel;
