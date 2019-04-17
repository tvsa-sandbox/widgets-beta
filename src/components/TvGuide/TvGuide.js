import React, { Component } from "react";
import { Link } from "gatsby";
import Logic from "../Carousel/Logic";
import TvGuideItem from "./TvGuideItem";
import TvGuideItemActive from "./TvGuideItemActive";
import TvGuideItemActiveTv from "./TvGuideItemActiveTv";
import TvGuideItemLink from "./TvGuideItemLink";

class TvGuide extends Component {
    componentDidMount(){
        const LOGIC = new Logic();
        LOGIC.init = {
            id: "ucy0snoq1totv",
            isMixed: false,
            moveItems: 1,
        };
    }
    render () {
        return (
            <section className="TvGuide WhiteLabel">
                <div className="TvGuide__Container WhiteLabel">
                    <div className="TvGuide__TitleContainer WhiteLabel">
                        <Link to="/" className="TvGuide__Title WhiteLabel">
                            Programación
                        </Link>
                    </div>
                    <div className="TvGuide__CarouselContainer WhiteLabel" id="Carousel-ucy0snoq1totv">
                        <div className="TvGuide__Carousel WhiteLabel">
                            <div className="TvGuide__CarouselArrow-Previous WhiteLabel" id="Previous-ucy0snoq1totv" >
                                <button id="ArrowPrevious-ucy0snoq1totv" className="TvGuide__CarouselButton Icn_ArrowLeft WhiteLabel" type="button">
                                    <span className="Display">
                                        Arrow Previous
                                    </span>
                                </button>
                            </div>
                            <div className="TvGuide__CarouselTrack WhiteLabel"  id="Track-ucy0snoq1totv" >
                                <div className="TvGuide__CarouselThumbnails WhiteLabel"  id="ItemList-ucy0snoq1totv" >
									<div className="TvGuide__ThumbContainer WhiteLabel"  id="item-ucy0snoq1totv1">
										<TvGuideItemActiveTv />
									</div>
                                    <div className="TvGuide__ThumbContainer WhiteLabel"  id="item-ucy0snoq1totv1">
                                        <TvGuideItemActive />
                                    </div>
                                    <div className="TvGuide__ThumbContainer WhiteLabel"  id="item-ucy0snoq1totv2">
                                        <TvGuideItem />
                                    </div>
                                    <div className="TvGuide__ThumbContainer WhiteLabel"  id="item-ucy0snoq1totv3">
                                        <TvGuideItemLink />
                                    </div>
                                    <div className="TvGuide__ThumbContainer WhiteLabel"  id="item-ucy0snoq1totv4">
                                        <TvGuideItem />
                                    </div>
                                    <div className="TvGuide__ThumbContainer WhiteLabel"  id="item-ucy0snoq1totv5">
                                        <TvGuideItemLink />
                                    </div>
                                    <div className="TvGuide__ThumbContainer WhiteLabel"  id="item-ucy0snoq1totv6">
                                        <TvGuideItem />
                                    </div>
                                    <div className="TvGuide__ThumbContainer WhiteLabel"  id="item-ucy0snoq1totv7">
                                        <TvGuideItemLink />
                                    </div>
                                    <div className="TvGuide__ThumbContainer WhiteLabel"  id="item-ucy0snoq1totv8">
                                        <TvGuideItemLink />
                                    </div>
                                    <div className="TvGuide__ThumbContainer WhiteLabel"  id="item-ucy0snoq1totv9">
                                        <TvGuideItemLink />
                                    </div>
                                    <div className="TvGuide__ThumbContainer WhiteLabel"  id="item-ucy0snoq1totv10">
                                        <TvGuideItem />
                                    </div>
                                    <div className="TvGuide__ThumbContainer WhiteLabel"  id="item-ucy0snoq1totv11">
                                        <TvGuideItem />
                                    </div>
                                    <div className="TvGuide__ThumbContainer WhiteLabel"  id="item-ucy0snoq1totv12">
                                        <TvGuideItemLink />
                                    </div>
                                    <div className="TvGuide__ThumbContainer WhiteLabel"  id="item-ucy0snoq1totv13">
                                        <TvGuideItem />
                                    </div>
                                    <div className="TvGuide__ThumbContainer WhiteLabel"  id="item-ucy0snoq1totv14">
                                        <TvGuideItemLink />
                                    </div>
                                    <div className="TvGuide__ThumbContainer WhiteLabel"  id="item-ucy0snoq1totv15">
                                        <TvGuideItem />
                                    </div>
                                </div>
                                <div className="TvGuide__CarouselArrow-Next WhiteLabel"  id="Next-ucy0snoq1totv" >
                                    <button className="TvGuide__CarouselButton Icn_ArrowRight WhiteLabel" type="button" id="ArrowNext-ucy0snoq1totv">
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

export default TvGuide;
