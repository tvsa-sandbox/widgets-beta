import React, { Component } from "react";
// import  from "gatsby-link";
import Logic from "../Carousel/Logic";
import TvGuideBoldShow from "./TvGuideBoldShow";
import TvGuideBoldLiveShow from "./TvGuideBoldLiveShow";
import TvGuideBoldPostShow from "./TvGuideBoldPostShow";

class TvGuideBold extends Component {
    componentDidMount(){
        const LOGIC = new Logic();
        LOGIC.init = {
            id: "ucy0snoq1totv34",
            isMixed: false,
            moveItems: 1,
        };
    }

    render() {
        return (
            <section className="TvGuideBold WhiteLabel">
                <div className="TvGuideBold__Container WhiteLabel">
                    <div className="TvGuideBold__CarouselContainer WhiteLabel" id="Carousel-ucy0snoq1totv34">
                        <div className="TvGuideBold__Carousel WhiteLabel">
                            <div className="TvGuideBold__CarouselArrow-Previous WhiteLabel" id="Previous-ucy0snoq1totv34">
                                <button className="TvGuideBold__CarouselButton Icn_ArrowLeft WhiteLabel" id="ArrowPrevious-ucy0snoq1totv34">
                                    <span className="Display">
                                        Arrow Previous
                                    </span>
                                </button>
                            </div>
                                    <div className="TvGuideBold__CarouselTrack WhiteLabel" id="Track-ucy0snoq1totv34">
                                        <div className="TvGuideBold__CarouselThumbnails WhiteLabel" id="ItemList-ucy0snoq1totv34">
        									<div className="TvGuideBold__ThumbContainer WhiteLabel" >
        										<TvGuideBoldLiveShow />
        									</div>
                                            <div className="TvGuideBold__ThumbContainer WhiteLabel" id="item-ucy0snoq1totv341">
                                                <TvGuideBoldPostShow />
                                            </div>
                                            <div className="TvGuideBold__ThumbContainer WhiteLabel" id="item-ucy0snoq1totv342">
                                                <TvGuideBoldShow />
                                            </div>
                                            <div className="TvGuideBold__ThumbContainer WhiteLabel" id="item-ucy0snoq1totv343">
                                                <TvGuideBoldShow />
                                            </div>
                                            <div className="TvGuideBold__ThumbContainer WhiteLabel" id="item-ucy0snoq1totv344">
                                                <TvGuideBoldShow />
                                            </div>
                                            <div className="TvGuideBold__ThumbContainer WhiteLabel" id="item-ucy0snoq1totv345">
                                                <TvGuideBoldShow />
                                            </div>
                                            <div className="TvGuideBold__ThumbContainer WhiteLabel" id="item-ucy0snoq1totv346">
                                                <TvGuideBoldShow />
                                            </div>
                                            <div className="TvGuideBold__ThumbContainer WhiteLabel" id="item-ucy0snoq1totv347">
                                                <TvGuideBoldShow />
                                            </div>
                                            <div className="TvGuideBold__ThumbContainer WhiteLabel" id="item-ucy0snoq1totv348">
                                                <TvGuideBoldShow />
                                            </div>
                                            <div className="TvGuideBold__ThumbContainer WhiteLabel" id="item-ucy0snoq1totv349">
                                                <TvGuideBoldShow />
                                            </div>
                                            <div className="TvGuideBold__ThumbContainer WhiteLabel" id="item-ucy0snoq1totv3410">
                                                <TvGuideBoldShow />
                                            </div>
                                            <div className="TvGuideBold__ThumbContainer WhiteLabel" id="item-ucy0snoq1totv3411">
                                                <TvGuideBoldShow />
                                            </div>
                                            <div className="TvGuideBold__ThumbContainer WhiteLabel" id="item-ucy0snoq1totv3412">
                                                <TvGuideBoldShow />
                                            </div>
                                            <div className="TvGuideBold__ThumbContainer WhiteLabel" id="item-ucy0snoq1totv3413">
                                                <TvGuideBoldShow />
                                            </div>
                                            <div className="TvGuideBold__ThumbContainer WhiteLabel" id="item-ucy0snoq1totv3414">
                                                <TvGuideBoldShow />
                                            </div>
                                            <div className="TvGuideBold__ThumbContainer WhiteLabel" id="item-ucy0snoq1totv3415">
                                                <TvGuideBoldShow />
                                            </div>
                                        </div>
                                        <div className="TvGuideBold__CarouselArrow-Next WhiteLabel" id="Next-ucy0snoq1totv34" >
                                            <button className="TvGuideBold__CarouselButton Icn_ArrowRight WhiteLabel" id="ArrowNext-ucy0snoq1totv34">
                                                <span className="Display">
                                                    Arrow Next
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
        );
    }
}

export default TvGuideBold;
