import React from "react";
import { Link } from "gatsby";
import { withPrefix } from "gatsby";

const Thumblist = () => (
    <section className="Thumblist WhiteLabel">
        <div className="Thumblist__BoxContainer WhiteLabel">
            <div className="Thumblist__TitleContainer WhiteLabel">
                <p className="Thumblist__Title WhiteLabel">
                    Contenido Multimedia
                </p>
            </div>
            <div className="Thumblist__HeadlinesContainer WhiteLabel">
                <Link to="/" className="Thumblist__Headlines WhiteLabel">
                    <div className="Thumblist__HeadlinesImageContainer WhiteLabel">
                        <picture>
                            <source media="(min-width: 0px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} />
                                <img className="Thumblist__HeadlinesImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} alt="Test" />
                        </picture>
                    </div>
                    <div className="Thumblist__HeadlinesTextContainer WhiteLabel">
                        <h3 className="Thumblist__HeadlinesText WhiteLabel">
                            Mandzukic marca el gol de la ventaja en tiempo extra, Francia-Croacia Final Rusia
                        </h3>
                    </div>
                </Link>
                <Link to="/" className="Thumblist__Headlines WhiteLabel">
                    <div className="Thumblist__HeadlinesImageContainer WhiteLabel">
                        <picture>
                            <source media="(min-width: 0px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} />
                                <img className="Thumblist__HeadlinesImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} alt="Test" />
                        </picture>
                    </div>
                    <div className="Thumblist__HeadlinesTextContainer WhiteLabel">
                        <h3 className="Thumblist__HeadlinesText WhiteLabel">
                            Mandzukic marca el gol de la ventaja en tiempo extra, Francia-Croacia Final Rusia
                        </h3>
                    </div>
                </Link>
                <Link to="/" className="Thumblist__Headlines WhiteLabel">
                    <div className="Thumblist__HeadlinesImageContainer WhiteLabel">
                        <picture>
                            <source media="(min-width: 0px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} />
                                <img className="Thumblist__HeadlinesImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} alt="Test" />
                        </picture>
                    </div>
                    <div className="Thumblist__HeadlinesTextContainer WhiteLabel">
                        <h3 className="Thumblist__HeadlinesText WhiteLabel">
                            Mandzukic marca el gol de la ventaja en tiempo extra, Francia-Croacia Final Rusia
                        </h3>
                    </div>
                </Link>
                <Link to="/" className="Thumblist__Headlines WhiteLabel">
                    <div className="Thumblist__HeadlinesImageContainer WhiteLabel">
                        <picture>
                            <source media="(min-width: 0px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} />
                                <img className="Thumblist__HeadlinesImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} alt="Test" />
                        </picture>
                    </div>
                    <div className="Thumblist__HeadlinesTextContainer WhiteLabel">
                        <h3 className="Thumblist__HeadlinesText WhiteLabel">
                            Mandzukic marca el gol de la ventaja en tiempo extra, Francia-Croacia Final Rusia
                        </h3>
                    </div>
                </Link>
                <Link to="/" className="Thumblist__Headlines WhiteLabel">
                    <div className="Thumblist__HeadlinesImageContainer WhiteLabel">
                        <picture>
                            <source media="(min-width: 0px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} />
                                <img className="Thumblist__HeadlinesImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} alt="Test" />
                        </picture>
                    </div>
                    <div className="Thumblist__HeadlinesTextContainer WhiteLabel">
                        <h3 className="Thumblist__HeadlinesText WhiteLabel">
                            Mandzukic marca el gol de la ventaja en tiempo extra, Francia-Croacia Final Rusia
                        </h3>
                    </div>
                </Link>
                <Link to="/" className="Thumblist__Headlines WhiteLabel">
                    <div className="Thumblist__HeadlinesImageContainer WhiteLabel">
                        <picture>
                            <source media="(min-width: 0px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} />
                                <img className="Thumblist__HeadlinesImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} alt="Test" />
                        </picture>
                    </div>
                    <div className="Thumblist__HeadlinesTextContainer WhiteLabel">
                        <h3 className="Thumblist__HeadlinesText WhiteLabel">
                            Mandzukic marca el gol de la ventaja en tiempo extra, Francia-Croacia Final Rusia
                        </h3>
                    </div>
                </Link>
            </div>
        </div>
    </section>
);

export default Thumblist;
