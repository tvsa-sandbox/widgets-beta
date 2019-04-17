import React from "react";
import MostViewed from "../../components/MostViewed/MostViewed";
import Image from "../../enhancements/Image";
import Menu from "../../components/Menu";
import Navegation from "../../components/Navegation";
import Quote from "../../enhancements/Quote";
import SlideShow from "../../enhancements/SlideShow";
import Video from "../../enhancements/Video";
import RelatedContent from "../../enhancements/RelatedContent";
import UniversalRichText from "../../enhancements/UniversalRichText";
import { Link } from "gatsby";
import LiveToolBar from "../../components/LiveToolBar";
import Footer from "../../components/Footer";

const Article = () => (
    <section className="Page">
        <Menu />
        <Navegation />
        <section className="PageContent__Container WhiteLabel">
            <section className="PageContent__Body WhiteLabel">
                <div className="Article WhiteLabel">
                    <div className="Article__TagContainer WhiteLabel">
                        <span className="Article__Tag WhiteLabel">Etiqueta Seccion</span>
                    </div>
                    <div className="Article__TitleContainer WhiteLabel">
                        <h1 className="Article__Title WhiteLabel">Titulo de Articulo</h1>
                    </div>
                    <div className="Article__SubTitleContainer WhiteLabel">
                        <h2 className="Article__SubTitle WhiteLabel">SubTitulo de Articulo</h2>
                    </div>
                    <div className="Article__CreditsContainer WhiteLabel">
                        <span>Por: </span>
                        <span className="Article__Author WhiteLabel">Autor de Articulo </span>
                        <span className="Article__Date WhiteLabel">octubre 10, 2018 - 9:53</span>
                        <div className="Article__ShareBar WhiteLabel">
                            <div className="Article__ShareBarDesktop WhiteLabel">
                                <Link className="Article__ShareBarLink Icn_Facebook WhiteLabel" href="https://www.facebook.com/GameTimeOf/" target="_blank" rel="noopener noreferrer" title="">
                                    <p className="Display">
                                        facebook
                                    </p>
                                </Link>
                                <Link className="Article__ShareBarLink Icn_Instagram WhiteLabel" href="https://www.instagram.com/gametimeof/"  target="_blank" rel="noopener noreferrer" title="">
                                    <p className="Display">
                                        instagram
                                    </p>
                                </Link>
                                <Link className="Article__ShareBarLink Icn_Twitter WhiteLabel" href="https://twitter.com/@GameTimeOf" target="_blank" rel="noopener noreferrer" title="">
                                    <p className="Display">
                                        twitter
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <p>
                        Unde reiciendis enim iste et sunt non distinctio neque. Tempora error perspiciatis quidem in eos. Incidunt molestiae recusandae ullam vel. Ex sequi iusto sapiente vero qui earum asperiores.
                    </p>
                    <Image />
                    <p>
                        Unde reiciendis enim iste et sunt non distinctio neque. Tempora error perspiciatis quidem in eos. Incidunt molestiae recusandae ullam vel. Ex sequi iusto sapiente vero qui earum asperiores.
                    </p>
                    <Quote />
                    <p>
                        Unde reiciendis enim iste et sunt non distinctio neque. Tempora error perspiciatis quidem in eos. Incidunt molestiae recusandae ullam vel. Ex sequi iusto sapiente vero qui earum asperiores.
                    </p>
                    <RelatedContent />
                    <p>
                        Unde reiciendis enim iste et sunt non distinctio neque. Tempora error perspiciatis quidem in eos. Incidunt molestiae recusandae ullam vel. Ex sequi iusto sapiente vero qui earum asperiores.
                    </p>
                    <Video />
                    <p>
                        Unde reiciendis enim iste et sunt non distinctio neque. Tempora error perspiciatis quidem in eos. Incidunt molestiae recusandae ullam vel. Ex sequi iusto sapiente vero qui earum asperiores.
                    </p>
                    <SlideShow />
                    <p>
                        Unde reiciendis enim iste et sunt non distinctio neque. Tempora error perspiciatis quidem in eos. Incidunt molestiae recusandae ullam vel. Ex sequi iusto sapiente vero qui earum asperiores.
                    </p>
                    <UniversalRichText />
                </div>
            </section>
            <section className="PageContent__Aside WhiteLabel">
                <div className="Article__Aside WhiteLabel">
                    <MostViewed />
                    <div className="Article__Ads WhiteLabel">
            			<Link to ="/" className="Banner WhiteLabel" href="https://placeholder.com">
            				<img src="http://via.placeholder.com/300x600" alt="test" />
            			</Link>
            		</div>
                </div>
            </section>
        </section>
        <LiveToolBar />
        <Footer />
    </section>
);

export default Article;
