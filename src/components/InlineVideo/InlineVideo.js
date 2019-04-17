import React, { Component } from "react";
import { Link } from "gatsby";
import Logic from "../Carousel/Logic";
import InlineVideoItemVideo from "./InlineVideo_ItemVideo";
import InlineVideoCarouselItem from "./InlineVideo_CarouselItem";

class InlineVideo  extends Component {
    componentDidMount(){
        const LOGIC = new Logic();
        LOGIC.init = {
            id: "ucy0snoq1toiv",
            isMixed: false,
            moveItems: 1,
        };
    }
    render() {
        return (
            <div className="InlineVideo WhiteLabel">
                <div className="InlineVideo__Box WhiteLabel">
                    <InlineVideoItemVideo />
                    <div className="InlineVideo__Caption WhiteLabel">
                        <div className="InlineVideo__Text WhiteLabel">
                            <h2 className="InlineVideo__Title">
                                roberta damián presenta: detras de camaras de este movimiento
                            </h2>
                            <time className="InlineVideo__Date" dateTime="1988-18-01">
                                July 12, 2018
                            </time>
                        </div>
                        <div className="InlineVideo__Share WhiteLabel">
                            <div className="InlineVideo__ShareBar WhiteLabel">
                                <div className="InlineVideo__ShareBarDesktop WhiteLabel">
                                    <Link to="/" className="InlineVideo__ShareBarLink Icn_Facebook WhiteLabel">
                                        <span className="Display">
                                            Facebook
                                        </span>
                                    </Link>
                                    <Link to="/" className="InlineVideo__ShareBarLink Icn_Twitter WhiteLabel">
                                        <span className="Display">
                                            Twitter
                                        </span>
                                    </Link>
                                    <Link to="/" className="InlineVideo__ShareBarLink Icn_Email WhiteLabel">
                                        <span className="Display">
                                            Email
                                        </span>
                                    </Link>
                                    <Link to="/" className="InlineVideo__ShareBarLink Icn_Instagram WhiteLabel">
                                        <span className="Display">
                                            Instagram
                                        </span>
                                    </Link>
                                </div>
                                <button className="InlineVideo__ShareBarTrigger Icn_ArrowShare WhiteLabel" type="button">
                                    <span className="InlineVideo__ShareBarTriggerText WhiteLabel" />
                                </button>
                                <div className="InlineVideo__ShareBarMobile WhiteLabel">
                                    <Link to="/" className="InlineVideo__ShareBarTap Icn_Twitter WhiteLabel">
                                        <span className="Display">
                                            Twitter
                                        </span>
                                    </Link>
                                    <Link to="/" className="InlineVideo__ShareBarTap Icn_Facebook WhiteLabel">
                                        <span className="Display">
                                            Facebook
                                        </span>
                                    </Link>
                                    <Link to="/" className="InlineVideo__ShareBarTap Icn_Email WhiteLabel">
                                        <span className="Display">
                                            Email
                                        </span>
                                    </Link>
                                    <Link to="/" className="InlineVideo__ShareBarTap Icn_WhatsApp WhiteLabel">
                                        <span className="Display">
                                            Whatsapp
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="InlineVideo__CarouselContainer WhiteLabel">
                    <div className="InlineVideo__Carousel WhiteLabel"  id="Carousel-ucy0snoq1toiv" >
                        <div className="InlineVideo__CarouselArrow-Previous WhiteLabel"  id="Previous-ucy0snoq1toiv" >
                            <button id="ArrowPrevious-ucy0snoq1toiv" className="InlineVideo__CarouselButton Icn_ArrowLeft WhiteLabel" type="button">
                                <span className="Display">Arrow Previous</span>
                            </button>
                        </div>
                        <div className="InlineVideo__CarouselTrack WhiteLabel" id="Track-ucy0snoq1toiv" >
                            <div className="InlineVideo__CarouselThumbnails WhiteLabel" id="ItemList-ucy0snoq1toiv" >
                                    <InlineVideoCarouselItem  id="item-ucy0snoq1toiv1" />
                                    <InlineVideoCarouselItem  id="item-ucy0snoq1toiv2" />
                                    <InlineVideoCarouselItem  id="item-ucy0snoq1toiv3" />
                                    <InlineVideoCarouselItem  id="item-ucy0snoq1toiv4" />
                                    <InlineVideoCarouselItem  id="item-ucy0snoq1toiv5" />
                                    <InlineVideoCarouselItem  id="item-ucy0snoq1toiv6" />
                                    <InlineVideoCarouselItem  id="item-ucy0snoq1toiv7" />
                                    <InlineVideoCarouselItem  id="item-ucy0snoq1toiv8" />
                                    <InlineVideoCarouselItem  id="item-ucy0snoq1toiv9" />
                                    <InlineVideoCarouselItem  id="item-ucy0snoq1toiv10" />
                                    <InlineVideoCarouselItem  id="item-ucy0snoq1toiv11" />
                                    <InlineVideoCarouselItem  id="item-ucy0snoq1toiv12" />
                                    <InlineVideoCarouselItem  id="item-ucy0snoq1toiv13" />
                                    <InlineVideoCarouselItem  id="item-ucy0snoq1toiv14" />
                                    <InlineVideoCarouselItem  id="item-ucy0snoq1toiv15" />
                                    <InlineVideoCarouselItem  id="item-ucy0snoq1toiv16" />
                                    <InlineVideoCarouselItem  id="item-ucy0snoq1toiv17" />
                                    <InlineVideoCarouselItem  id="item-ucy0snoq1toiv18" />
                            </div>
                        </div>
                        <div className="InlineVideo__CarouselArrow-Next WhiteLabel" id="Next-ucy0snoq1toiv" >
                            <button className="InlineVideo__CarouselButton Icn_ArrowRight WhiteLabel" type="button" id="ArrowNext-ucy0snoq1toiv" >
                                <span className="Display">Arrow Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InlineVideo;
