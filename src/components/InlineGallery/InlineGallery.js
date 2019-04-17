import React, { Component } from "react";
import { Link } from "gatsby";
import Orca from "orcaslide";
import Logic from "../Carousel/Logic";
import SliderItem from "./SliderItems/SliderItem";
import SliderItemB from "./SliderItems/SliderItemB";
import CarouselItem from "./CarouselItems/CarouselItem";
import CarouselItemActive from "./CarouselItems/CarouselItemActive";

class InlineGallery extends Component {
    componentDidMount() {
        Orca.config = {
            arrowPrevious: "#arrow_previous3",
            arrowNext: "#arrow_next3",
            contentItem: "#swipe3",
            time: 1,
            jump: 16,
        };

        const LOGIC = new Logic();
        LOGIC.init = {
            id: "ucy0snoq1toig",
            isMixed: false,
            moveItems: 1,
        };
    }
    render() {
        return (
            <section className="InlineGallery WhiteLabel">
                <div className="InlineGallery__MixSliderContainer WhiteLabel">
                    <div className="InlineGallery__Slider WhiteLabel">
                        <div className="InlineGallery__SliderArrow-Previous WhiteLabel">
                            <button className="InlineGallery__SliderButton Icn_ArrowLeft WhiteLabel" id="arrow_previous3">
                                <span className="Display">
                                    Arrow Previous
                                </span>
                            </button>
                        </div>
                        <div className="InlineGallery__SliderTrack WhiteLabel">
                            <div className="InlineGallery__SliderAdsContainer WhiteLabel">
                                <div className="InlineGallery__SliderAds WhiteLabel">
                                    <span className="InlineGallery__SliderAdsText WhiteLabel">
                                        Publicidad
                                    </span>
                                    <div className="Banner WhiteLabel">
                                    <img src="http://via.placeholder.com/300x250" alt=""/>
                                    </div>
                                </div>
                                <div className="InlineGallery__SliderAdsCounterContainer WhiteLabel">
                                    <span className="InlineGallery__SliderAdsCounter WhiteLabel">
                                        00:01
                                    </span>
                                </div>
                                <div className="InlineGallery__SliderAdsButtonContainer WhiteLabel">
                                    <button className="InlineGallery__SliderAdsButton WhiteLabel">
                                        Saltar Publicidad
                                    </button>
                                </div>
                            </div>
                            <div className="InlineGallery__SliderCounterContainer WhiteLabel">
                                <div className="InlineGallery__SliderCounter WhiteLabel">
                                    <span className="InlineGallery__SliderCounterNumber WhiteLabel">
                                        1 / 13
                                    </span>
                                </div>
                        </div>
                        <div className="InlineGallery__SliderThumbnails WhiteLabel" id="swipe3">
                            <SliderItem />
                            <SliderItemB />
                            <SliderItem />
                            <SliderItemB />
                            <SliderItem />
                            <SliderItemB />
                            <SliderItem />
                            <SliderItemB />
                            <SliderItem />
                            <SliderItemB />
                            <SliderItem />
                            <SliderItemB />
                            <SliderItem />
                        </div>
                    </div>
                        <div className="InlineGallery__SliderArrow-Next WhiteLabel">
                            <button className="InlineGallery__SliderButton Icn_ArrowRight WhiteLabel"  id="arrow_next3">
                                <span className="Display">
                                    Arrow Next
                                </span>
                            </button>
                        </div>
                </div>
                <section className="InlineGallery__AsideContainer WhiteLabel">
                    <div className="InlineGallery__Aside WhiteLabel">
                        <div className="InlineGallery__AsideTitleContainer WhiteLabel">
                            <h3 className="InlineGallery__AsideTitle WhiteLabel">
                                This is a example of a H3 Title in InlineGallery
                                Got 65 characters.InlineGallery
                            </h3>
                        </div>
                    <div className="InlineGallery__AsideInfoContainer WhiteLabel">
                        <span className="InlineGallery__AsideInfo WhiteLabel">
                            Instagram, Cathia Cinthia
                        </span>
                    </div>
                            <div className="InlineGallery__AsideDescriptionContainer WhiteLabel">
                                <p className="InlineGallery__AsideDescription WhiteLabel">
                                    The pop singer, who is on the cover of the September 2018
                                    issue of British Vogue, opened up about why she thinks
                                    she is  considered a crush.
                                </p>
                            </div>
                            <div className="InlineGallery__AsideShareBarContainer WhiteLabel">
                                <div className="InlineGallery__ShareContainer WhiteLabel">
                                    <span className="InlineGallery__ShareCopy WhiteLabel">
                                        Te invitamos a seguirnos en nuestras redes
                                    </span>
                                    <div className="InlineGallery__ShareBar WhiteLabel">
                                        <div className="InlineGallery__ShareBarDesktop WhiteLabel">
                                            <Link className="InlineGallery__ShareBarLink Icn_Facebook WhiteLabel" to="https://www.facebook.com/GameTimeOf/" target="_blank" rel="noopener noreferrer" title="">
                                                <p className="Display">Facebook</p>
                                            </Link>
                                            <Link className="InlineGallery__ShareBarLink Icn_Instagram WhiteLabel" to="https://www.instagram.com/gametimeof/" target="_blank" rel="noopener noreferrer" title="">
                                                <p className="Display">Instagram</p>
                                            </Link>
                                            <Link className="InlineGallery__ShareBarLink Icn_Twitter WhiteLabel" to="https://twitter.com/@GameTimeOf" title="">
                                                <p className="Display">
                                                    Twitter
                                                </p>
                                            </Link>
                                        </div>
                                        <button className="InlineGallery__ShareBarTrigger Icn_ArrowShare WhiteLabel" type="button">
                                            <span className="InlineGallery__ShareBarTriggerText WhiteLabel">
                                                Comparte
                                            </span>
                                        </button>
                                        <div className="InlineGallery__ShareBarMobile WhiteLabel">
                                            <Link to="/" className="InlineGallery__ShareBarTap Icn_Twitter WhiteLabel">
                                                <span className="Display">
                                                    Twitter
                                                </span>
                                            </Link>
                                            <Link to="/" className="InlineGallery__ShareBarTap Icn_Facebook WhiteLabel">
                                                <span className="Display">
                                                    Facebook
                                                </span>
                                            </Link>
                                            <Link to="/" className="InlineGallery__ShareBarTap Icn_Email WhiteLabel">
                                                <span className="Display">
                                                    Email
                                                </span>
                                            </Link>
                                            <Link to="/" className="InlineGallery__ShareBarTap Icn_WhatsApp WhiteLabel">
                                                <span className="Display">
                                                    Whatsapp
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="InlineGallery__AsideAdsContainer WhiteLabel">
                                Publicidad
                                <div className="Banner WhiteLabel">
                                <img src="http://via.placeholder.com/300x250" alt=""/>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="InlineGallery__CarouselContainer WhiteLabel">
                    <div className="InlineGallery__Carousel WhiteLabel"  id="Carousel-ucy0snoq1toig" >
                        <div className="InlineGallery__CarouselArrow-Previous WhiteLabel" id="Previous-ucy0snoq1toig" >
                            <button className="InlineGallery__CarouselButton Icn_ArrowLeft WhiteLabel" id="ArrowPrevious-ucy0snoq1toig">
                                <span className="Display">
                                    Arrow Left
                                </span>
                            </button>
                        </div>
                        <div className="InlineGallery__CarouselTrack WhiteLabel"  id="Track-ucy0snoq1toig" >
                            <div className="InlineGallery__CarouselThumbnails WhiteLabel" id="ItemList-ucy0snoq1toig" >
                                    <CarouselItemActive  id="item-ucy0snoq1toig1" />
                                    <CarouselItem  id="item-ucy0snoq1toig2" />
                                    <CarouselItem  id="item-ucy0snoq1toig3" />
                                    <CarouselItem  id="item-ucy0snoq1toig4" />
                                    <CarouselItem  id="item-ucy0snoq1toig5" />
                                    <CarouselItem  id="item-ucy0snoq1toig6" />
                                    <CarouselItem  id="item-ucy0snoq1toig7" />
                                    <CarouselItem  id="item-ucy0snoq1toig8" />
                                    <CarouselItem  id="item-ucy0snoq1toig9" />
                                    <CarouselItem  id="item-ucy0snoq1toig10" />
                                    <CarouselItem  id="item-ucy0snoq1toig11" />
                                    <CarouselItem  id="item-ucy0snoq1toig12" />
                                    <CarouselItem  id="item-ucy0snoq1toig13" />
                                    <CarouselItem  id="item-ucy0snoq1toig14" />
                                    <CarouselItem  id="item-ucy0snoq1toig15" />
                                    <CarouselItem  id="item-ucy0snoq1toig16" />
                            </div>
                        </div>
                        <div className="InlineGallery__CarouselArrow-Next WhiteLabel"  id="Next-ucy0snoq1toig" >
                            <button className="InlineGallery__CarouselButton Icn_ArrowRight WhiteLabel"  id="ArrowNext-ucy0snoq1toig">
                                <span className="Display">
                                    Arrow Next
                                </span>
                            </button>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

export default InlineGallery;
