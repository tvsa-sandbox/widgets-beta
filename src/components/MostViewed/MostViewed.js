import React from "react";
import { Link } from "gatsby";

const MostViewed = () => (
    <aside className="MostViewed WhiteLabel">
        <div className="MostViewed__AdsContainer WhiteLabel">
            <div className="Banner WhiteLabel">
                <img src="http://via.placeholder.com/300x240" alt="" />
            </div>
        </div>
        <div className="MostViewed__TitleContainer WhiteLabel">
            <h2 className="MostViewed__Title WhiteLabel">
                Lo Más Visto
            </h2>
        </div>
        <div className="MostViewed__ListContainer WhiteLabel">
            <ol className="MostViewed__List WhiteLabel">
                <li className="MostViewed__ListElement WhiteLabel">
                    <Link to="/" className="MostViewed__Link WhiteLabel" href="/item-1/">
                        <div className="MostViewed__LinkTextContainer WhiteLabel">
                            <h3 className="MostViewed__LinkText WhiteLabel">
                                Simón dice llega a Noche de buenas.
                                Raúl Araiza y sus besos con famosas!Entérate!
                            </h3>
                        </div>
                        <div className="LinkIconContainer WhiteLabel">
                            <div className="MostViewed__LinkIcon Icn_Video WhiteLabel">
                                <span className="Display">
                                    Icn_Video Icon
                                </span>
                            </div>
                        </div>
                    </Link>
                </li>
                <li className="MostViewed__ListElement WhiteLabel">
                    <Link to="/" className="MostViewed__Link WhiteLabel" href="/item-1/">
                        <div className="MostViewed__LinkTextContainer WhiteLabel">
                            <h3 className="MostViewed__LinkText WhiteLabel">
                                Simón dice llega a Noche de buenas.
                                Raúl Araiza y sus besos con famosas!Entérate!
                            </h3>
                        </div>
                        <div className="LinkIconContainer WhiteLabel">
                            <div className="MostViewed__LinkIcon Icn_Gallery WhiteLabel">
                                <span className="Display">
                                    Icn_Gallery
                                </span>
                            </div>
                        </div>
                    </Link>
                </li>
                <li className="MostViewed__ListElement WhiteLabel">
                    <Link to="/" className="MostViewed__Link WhiteLabel" href="/item-1/">
                        <div className="MostViewed__LinkTextContainer WhiteLabel">
                            <h3 className="MostViewed__LinkText WhiteLabel">
                                Simón dice llega a Noche de buenas. 
                                Raúl Araiza y sus besos con famosas!Entérate!
                            </h3>
                        </div>
                        <div className="LinkIconContainer WhiteLabel">
                            <div className="MostViewed__LinkIcon Icn_Note WhiteLabel">
                                <span className="Display">
                                    Icn_Video Note
                                </span>
                            </div>
                        </div>
                    </Link>
                </li>
                <li className="MostViewed__ListElement WhiteLabel">
                    <Link to="/" className="MostViewed__Link WhiteLabel" href="/item-1/">
                        <div className="MostViewed__LinkTextContainer WhiteLabel">
                            <h3 className="MostViewed__LinkText WhiteLabel">
                                Simón dice llega a Noche de buenas. 
                                Raúl Araiza y sus besos con famosas!Entérate!
                            </h3>
                        </div>
                        <div className="LinkIconContainer WhiteLabel">
                            <div className="MostViewed__LinkIcon Icn_Video WhiteLabel">
                                <span className="Display">
                                    Icn_Video Icon
                                </span>
                            </div>
                        </div>
                    </Link>
                </li>
            </ol>
        </div>
    </aside>
);

export default MostViewed;
