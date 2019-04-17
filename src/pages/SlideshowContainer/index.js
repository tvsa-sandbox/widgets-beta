import React from "react";
import { Link } from "gatsby";
import Menu from "../../components/Menu";
import Navegation from "../../components/Navegation";
import SlideshowContainerEndCard from "./SlideshowContainerEndCard/SlideshowContainerEndCard";
import SlideshowContainerItem from "./SlideshowContainerItem/SlideshowContainerItem";
import SlideshowContainerItemVertical from "./SlideshowContainerItem/SlideshowContainerItemVertical";
import Footer from "../../components/Footer";

const Page = () => (
    <section className="Page">
        <Menu />
        <Navegation />
        <section className="SlideshowContainer WhiteLabel">
            <section className="PageContent__Container WhiteLabel">
                <section className="PageContent__BodyFull WhiteLabel">
                    <section className="SlideshowContainer__TitleContainer WhiteLabel">
                        <h1 className="SlideshowContainer__Title WhiteLabel">Titulo SlideshowContainer</h1>
                    </section>
                </section>
            </section>
            <section className="PageContent__Container WhiteLabel">
                <section className="PageContent__Body WhiteLabel">
                    <SlideshowContainerEndCard />
                    <div className="SlideshowContainer__Slider WhiteLabel">
                        <div className="SlideshowContainer__SliderArrow-Previous WhiteLabel">
                            <button className="SlideshowContainer__SliderButton Icn_ArrowLeft WhiteLabel" id="arrow_previous4">
                                <span className="Display">
                                    Arrow Previous
                                </span>
                            </button>
                        </div>
                        <div className="SlideshowContainer__SliderTrack WhiteLabel">
                            <div className="SlideshowContainer__SliderThumbnails WhiteLabel" id="swipe3">
                                    <SlideshowContainerItemVertical />
                                    <SlideshowContainerItem />
                                    <SlideshowContainerItemVertical />
                                    <SlideshowContainerItem />
                            </div>
                        </div>
                        <div className="SlideshowContainer__SliderArrow-Next WhiteLabel">
                            <button className="SlideshowContainer__SliderButton Icn_ArrowRight WhiteLabel"  id="arrow_next4">
                                <span className="Display">
                                    Arrow Next
                                </span>
                            </button>
                        </div>
                    </div>
                </section>
                <section className="PageContent__Aside WhiteLabel">
                    <section className="SlideshowContainer__AsideContainer WhiteLabel">
                        <div className="SlideshowContainer__AsideTitleContainer WhiteLabel">
                            <h3 className="SlideshowContainer__AsideTitle WhiteLabel">
                                This is a example of a H3 Title in SlideshowContainer
                                Got 65 characters.SlideshowContainer
                            </h3>
                        </div>
                        <div className="SlideshowContainer__AsideInfoContainer WhiteLabel">
                            <span className="SlideshowContainer__AsideInfo WhiteLabel">
                                Instagram, Cathia Cinthia
                            </span>
                        </div>
                        <div className="SlideshowContainer__AsideDescriptionContainer WhiteLabel">
                            <p className="SlideshowContainer__AsideDescription WhiteLabel">
                                The pop singer, who is on the cover of the September 2018
                                issue of British Vogue, opened up about why she thinks
                                she is  considered a crush.
                            </p>
                        </div>
                        <div className="SlideshowContainer__AsideShareBarContainer WhiteLabel">
                            <div className="SlideshowContainer__ShareContainer WhiteLabel">
                                <span className="SlideshowContainer__ShareCopy WhiteLabel">
                                    Te invitamos a seguirnos en nuestras redes
                                </span>
                                <div className="SlideshowContainer__ShareBar WhiteLabel">
                                    <div className="SlideshowContainer__ShareBarDesktop WhiteLabel">
                                        <Link className="SlideshowContainer__ShareBarLink Icn_Facebook WhiteLabel" href="https://www.facebook.com/GameTimeOf/" target="_blank" rel="noopener noreferrer" title="">
                                            <p className="Display">Facebook</p>
                                        </Link>
                                        <Link className="SlideshowContainer__ShareBarLink Icn_Instagram WhiteLabel" href="https://www.instagram.com/gametimeof/" target="_blank" rel="noopener noreferrer" title="">
                                            <p className="Display">Instagram</p>
                                        </Link>
                                        <Link className="SlideshowContainer__ShareBarLink Icn_Twitter WhiteLabel" href="https://twitter.com/@GameTimeOf" title="">
                                            <p className="Display">
                                                Twitter
                                            </p>
                                        </Link>
                                    </div>
                                    <button className="SlideshowContainer__ShareBarTrigger Icn_ArrowShare WhiteLabel" type="button">
                                        <span className="SlideshowContainer__ShareBarTriggerText WhiteLabel">
                                            Compartir
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="SlideshowContainer__AsideAdsContainer WhiteLabel">
                            <img src="http://via.placeholder.com/300x240" alt="" />
                        </div>
                    </section>
                </section>
            </section>
        </section>
        <Footer />
    </section>
);

export default Page;
