import React, { Component } from "react";
import Logic from "../Carousel/Logic";
import SupercardItem from "./SuperCard_Item";
import SupercardItem2 from "./SuperCard_Item2";


class SuperCard extends Component {
    componentDidMount() {
        const LOGIC = new Logic();
        LOGIC.init = {
            id: "ucy0snoq1tocns",
            isMixed: false,
            moveItems: 1,
        };
    }

  render() {
      return (
            <section className="SuperCard WhiteLabel">
                <div className="SuperCard__Container WhiteLabel">
                    <div className="SuperCard__CarouselArrow-Previous WhiteLabel" id="Previous-ucy0snoq1tocns">
                        <button id="ArrowPrevious-ucy0snoq1tocns" className="SuperCard__CarouselButton Icn_ArrowLeft WhiteLabel" type="button">
                            <span className="Display">
                                Arrow Previous
                            </span>
                        </button>
                    </div>

                    <div className="SuperCard__Carousel WhiteLabel" id="Carousel-ucy0snoq1tocns">

                        <div className="SuperCard__CarouselTrack WhiteLabel" id="Track-ucy0snoq1tocns">
                            <div className="SuperCard__CarouselThumbnails WhiteLabel" id="ItemList-ucy0snoq1tocns">
                                <SupercardItem id="item-ucy0snoq1tocn1"/>
                                <SupercardItem2 id="item-ucy0snoq1tocn2"/>
                                <SupercardItem id="item-ucy0snoq1tocn3"/>
                            </div>
                        </div>

                    </div>
                    <div className="SuperCard__CarouselArrow-Next WhiteLabel"  id="Next-ucy0snoq1tocns">
                        <button className="SuperCard__CarouselButton Icn_ArrowRight WhiteLabel" type="button" id="ArrowNext-ucy0snoq1tocns" >
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

export default SuperCard;
