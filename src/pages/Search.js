import React from "react";
import LiveToolBar from "../components/LiveToolBar";
import Menu from "../components/Menu";
import Navegation from "../components/Navegation";
import SixItems from "../components/SixItems";
import Footer from "../components/Footer";

const Page = () => (
    <section className="Page WhiteLabel">
        <Menu />
        <Navegation />
        <section className="PageContent__Container WhiteLabel">
            <section className="PageContent__BodyFull WhiteLabel">
                <div className="Search WhiteLabel">
                    <div className="Search__TitleContainer WhiteLabel">
                        <h2 className="Search__Title WhiteLabel">
                        Resultados de búsqueda relacionados con:
                        </h2>
                    </div>
                    <div className="Search__SubTitleContainer WhiteLabel">
                        <h3 className="Search__SubTitle WhiteLabel">
                            Nombre de la Busqueda
                        </h3>
                    </div>
                    <div className="Search__BoxContainer WhiteLabel">
                        <div className="Search__Box WhiteLabel">
                            <input type="search" name="q" placeholder="Puedes realizar otra búsqueda" className="Search__Input WhiteLabel" />
                        </div>
                        <div className="Search__IconContainer WhiteLabel">
                            <div className="Search__Icon Icn_Search WhiteLabel">
                                <span className="Display">
                                    Display
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="Search__NoResultsContainer WhiteLabel">
                        <p className="Search__NoResults WhiteLabel">
                            No se encontraron resultados
                        </p>
                    </div>
                </div>
                <SixItems />
            </section>
        </section>
        <LiveToolBar />
        <Footer />
    </section>
);

export default Page;
