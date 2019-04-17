import React from "react";
import Menu from "../../components/Menu";
import Navegation from "../../components/Navegation";
import VideoContainerCounter from "./VideoContainer_Counter/VideoContainer_Counter";
import VideoContainerCaption from "./VideoContainer_Caption/VideoContainer_Caption";
import VideoContainerPlayer from "./VideoContainer_Player/VideoContainer_Player";
import VideoContainerComments from "./VideoContainer_Comments/VideoContainer_Comments";
import VideoContainerRightItem from "./VideoContainer_RightItem/VideoContainer_RightItem";
import EndCard from "./EndCard/EndCard";
import LiveToolBar from "../../components/LiveToolBar";
import Footer from "../../components/Footer";

const Page = () => (
    <section className="Page WhiteLabel">
        <Menu />
        <Navegation />
        <section className="PageContent__Lead WhiteLabel">
            <section className="VideoContainer WhiteLabel">
                <VideoContainerCounter />
                <section className="VideoContainer__Container WhiteLabel">
                    <section className="VideoContainer__Body WhiteLabel">
                        <EndCard />
                        <VideoContainerPlayer />
                        <VideoContainerCaption />
                    </section>
                    <section className="VideoContainer__Aside WhiteLabel">
                        <div className="VideoContainer__CarouselContainer WhiteLabel">
                            <div className="VideoContainer__Carousel WhiteLabel"  id="Carousel-ucy0snoq1toiv" >
                                <div className="VideoContainer__CarouselArrow-Previous WhiteLabel"  id="Previous-ucy0snoq1toiv" >
                                    <button id="ArrowPrevious-ucy0snoq1toiv" className="VideoContainer__CarouselButton Icn_ArrowLeft WhiteLabel" type="button">
                                        <span className="Display">Arrow Previous</span>
                                    </button>
                                </div>
                                <div className="VideoContainer__CarouselTrack WhiteLabel" id="Track-ucy0snoq1toiv" >
                                    <div className="VideoContainer__CarouselThumbnails WhiteLabel" id="ItemList-ucy0snoq1toiv" >
                                        <VideoContainerRightItem  id="item-ucy0snoq1toiv1" />
                                        <VideoContainerRightItem  id="item-ucy0snoq1toiv2" />
                                        <VideoContainerRightItem  id="item-ucy0snoq1toiv3" />
                                        <VideoContainerRightItem  id="item-ucy0snoq1toiv4" />
                                        <VideoContainerRightItem  id="item-ucy0snoq1toiv5" />
                                        <VideoContainerRightItem  id="item-ucy0snoq1toiv6" />
                                    </div>
                                </div>
                                <div className="VideoContainer__CarouselArrow-Next WhiteLabel" id="Next-ucy0snoq1toiv" >
                                    <button className="VideoContainer__CarouselButton Icn_ArrowRight WhiteLabel" type="button" id="ArrowNext-ucy0snoq1toiv" >
                                        <span className="Display">Arrow Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <VideoContainerComments />
            </section>
        </section>
        <LiveToolBar />
        <Footer />
    </section>
);

export default Page;
