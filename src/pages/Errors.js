import React from "react";
import InlineVideo from "../components/InlineVideo";
import Menu from "../components/Menu";
import Navegation from "../components/Navegation";
import LiveToolBar from "../components/LiveToolBar";
import Footer from "../components/Footer";

const Page = () => (
    <section className="Page WhiteLabel">
        <Menu />
        <Navegation />
        <section className="PageContent__Container WhiteLabel">
            <section className="PageContent__BodyFull WhiteLabel">
                <div className="Errors WhiteLabel">
                    <div className="Errors__TitleContainer WhiteLabel">
                        <h2 className="Errors__Title WhiteLabel">
                            404
                        </h2>
                        <div className="Errors__IconContainer WhiteLabel">
                            <div className="Errors__Icon Icn_Video WhiteLabel">
                                <span className="Display">
                                    Display
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="Errors__SubTitleContainer WhiteLabel">
                        <h3 className="Errors__SubTitle WhiteLabel">
                            ¡UPS! No encontramos esta página
                        </h3>
                    </div>
                    <div className="Errors__DescriptionContainer WhiteLabel">
                        <p className="Errors__Description WhiteLabel">
                            La página que buscas ya no existe en nuestro sitio web. Para encontrarla puedes usar el buscador
                        </p>
                    </div>
                    <div className="Errors__SearchContainer WhiteLabel">
                        <div className="Errors__Search WhiteLabel">
                            <input type="search" name="q" placeholder="¿En qué podemos ayudarte?" className="Errors__Input WhiteLabel" />
                        </div>
                        <div className="Errors__IconContainer WhiteLabel">
                            <div className="Errors__Icon Icn_Search WhiteLabel">
                                <span className="Display">
                                    Display
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <InlineVideo />
            </section>
        </section>
        <LiveToolBar />
        <Footer />
    </section>
);

export default Page;
