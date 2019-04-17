import React from "react";
import { Link } from "gatsby";
import MostViewed from "../../components/MostViewed";
import Image from "../../enhancements/Image/Image";
import Menu from "../../components/Menu";
import Navegation from "../../components/Navegation";
import Video from "../../enhancements/Video/Video";
import SlideShow from "../../enhancements/SlideShow/SlideShow";
import LiveToolBar from "../../components/LiveToolBar";
import Footer from "../../components/Footer";
import { withPrefix } from "gatsby";

const Page = () => (
    <section className="Page">
        <Menu />
        <Navegation />
        <section className="PageContent__Container WhiteLabel">
            <section className="PageContent__Body WhiteLabel">
                <section className="LiveBlog WhiteLabel">
                    <div className="LiveBlog__HeadContainer WhiteLabel">
                        <div className="LiveBlog__LogoContainer WhiteLabel">
                            <picture>
                                <source media="(min-width:0px) and (max-width:414px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic3-209x114.png")} />
                                <source media="(min-width:415px) and (max-width:768px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic3-258x145.png")} />
                                <source media="(min-width:769px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic3-209x114.png")} />
                                <img className="LiveBlog__Logo WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-Graphic3-209x114.png")} alt="" />
                            </picture>
                        </div>
                        <div className="LiveBlog__ShareBar WhiteLabel">
                            <div className="LiveBlog__ShareBarDesktop WhiteLabel">
                                <Link className="LiveBlog__ShareBarLink Icn_Facebook WhiteLabel" href="https://www.facebook.com/GameTimeOf/" target="_blank" rel="noopener noreferrer" title="">
                                    <p className="Display">
                                        facebook
                                    </p>
                                </Link>
                                <Link className="LiveBlog__ShareBarLink Icn_Instagram WhiteLabel" href="https://www.instagram.com/gametimeof/"  target="_blank" rel="noopener noreferrer" title="">
                                    <p className="Display">
                                        instagram
                                    </p>
                                </Link>
                                <Link className="LiveBlog__ShareBarLink Icn_Twitter WhiteLabel" href="https://twitter.com/@GameTimeOf" target="_blank" rel="noopener noreferrer" title="">
                                    <p className="Display">
                                        twitter
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="LiveBlog__DateContainer WhiteLabel">
                        <div className="LiveBlog__Date WhiteLabel">
                            Jul 18, 2018
                        </div>
                    </div>
                    <div className="LiveBlog__LeadContainer WhiteLabel">
                        <Image />
                        <div className="LiveBlog__TitleContainer WhiteLabel">
                            <h1 className="LiveBlog__Title WhiteLabel">
                                La rosa de guadalupe
                            </h1>
                        </div>
                        <div className="LiveBlog__SubTitleContainer WhiteLabel">
                            <h2 className="LiveBlog__SubTitle WhiteLabel">
                                vive los mejores capitulos
                            </h2>
                        </div>
                    </div>
                    <div className="LiveBlog__Body WhiteLabel">
                        <div className="LiveBlog__ChatPinned WhiteLabel">
                            <div className="LiveBlog__ChatContainerPinned WhiteLabel">
                                <div className="LiveBlog__ChatNameContainerPinned WhiteLabel">
                                    <span className="LiveBlog__ChatNamePinned WhiteLabel">
                                        Las Estrellas
                                    </span>
                                </div>
                                <div className="LiveBlog__ChatDateContainerPinned WhiteLabel">
                                    <span className="LiveBlog__ChatDatePinned WhiteLabel">
                                        julio 18, 2018 - 6:12 pm
                                    </span>
                                </div>
                                <div className="LiveBlog__ChatTextContainerPinned WhiteLabel">
                                    <p>
                                        Lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetti
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="LiveBlog__Chat WhiteLabel">
                            <div className="LiveBlog__ChatContainer WhiteLabel">
                                <div className="LiveBlog__ChatNameContainer WhiteLabel">
                                    <span className="LiveBlog__ChatName WhiteLabel">
                                        Las Estrellas
                                    </span>
                                </div>
                                <div className="LiveBlog__ChatDateContainer WhiteLabel">
                                    <span className="LiveBlog__ChatDate WhiteLabel">
                                        julio 18, 2018 - 6:12 pm
                                    </span>
                                </div>
                                <div className="LiveBlog__ChatTextContainer WhiteLabel">
                                    <p>
                                        Lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetti
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="LiveBlog__Chat WhiteLabel">
                            <div className="LiveBlog__ChatContainer WhiteLabel">
                                <div className="LiveBlog__ChatNameContainer WhiteLabel">
                                    <span className="LiveBlog__ChatName WhiteLabel">
                                        Las Estrellas
                                    </span>
                                </div>
                                <div className="LiveBlog__ChatDateContainer WhiteLabel">
                                    <span className="LiveBlog__ChatDate WhiteLabel">
                                        julio 18, 2018 - 6:12 pm
                                    </span>
                                </div>
                                <div className="LiveBlog__ChatTextContainer WhiteLabel">
                                    <Image />
                                </div>
                            </div>
                        </div>
                        <div className="LiveBlog__Chat WhiteLabel">
                            <div className="LiveBlog__ChatContainer WhiteLabel">
                                <div className="LiveBlog__ChatNameContainer WhiteLabel">
                                    <span className="LiveBlog__ChatName WhiteLabel">
                                        Las Estrellas
                                    </span>
                                </div>
                                <div className="LiveBlog__ChatDateContainer WhiteLabel">
                                    <span className="LiveBlog__ChatDate WhiteLabel">
                                        julio 18, 2018 - 6:12 pm
                                    </span>
                                </div>
                                <div className="LiveBlog__ChatTextContainer WhiteLabel">
                                    <Video />
                                </div>
                            </div>
                        </div>
                        <div className="LiveBlog__Chat WhiteLabel">
                            <div className="LiveBlog__ChatContainer WhiteLabel">
                                <div className="LiveBlog__ChatNameContainer WhiteLabel">
                                    <span className="LiveBlog__ChatName WhiteLabel">
                                        Las Estrellas
                                    </span>
                                </div>
                                <div className="LiveBlog__ChatDateContainer WhiteLabel">
                                    <span className="LiveBlog__ChatDate WhiteLabel">
                                        julio 18, 2018 - 6:12 pm
                                    </span>
                                </div>
                                <div className="LiveBlog__ChatTextContainer WhiteLabel">
                                    <SlideShow />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="PageContent__Aside WhiteLabel">
                <div className="LiveBlog__Aside WhiteLabel">
                    <MostViewed />
                    <div className="LiveBlog__Ads WhiteLabel">
            			<Link to ="/" className="Banner WhiteLabel" href="https://placeholder.com">
            				<img alt="test" src="http://via.placeholder.com/300x600" />
            			</Link>
            		</div>
                </div>
            </section>
        </section>
        <LiveToolBar />
        <Footer />
    </section>
);

export default Page;
