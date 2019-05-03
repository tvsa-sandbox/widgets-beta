import React from "react";
import { Link } from "gatsby";

const Calendar = () => (
    <section className="Calendar WhiteLabel">
        <div className="Calendar__Container WhiteLabel">
            <div className="Calendar__CurrentContainer WhiteLabel">
                <div className="Calendar__CurrentImageContainer WhiteLabel">
                    <picture>
                        <img className="Calendar__CurrentImage WhiteLabel" src="./static/aspect-ratio-images/16x9-414x233.jpg" alt="ImageEvent" />
                    </picture>
                </div>
                <div className="Calendar__CurrentDateContainer WhiteLabel">
                    <h2 className="Calendar__CurrentDateDay WhiteLabel">
                        Viernes
                    </h2>
                    <h2 className="Calendar__CurrentDateNumber WhiteLabel">
                        03
                    </h2>
                    <h2 className="Calendar__CurrentDateMonth WhiteLabel">
                        Mayo
                    </h2>
                </div>
                <div className="Calendar__CurrentDateTimeContainer WhiteLabel">
                    <h2 className="Calendar__CurrentDateTimeHour WhiteLabel">
                        12
                    </h2>
                    <h2 className="Calendar__CurrentDateTimeMinutes WhiteLabel">
                        10
                    </h2>
                </div>
            </div>
            <div className="Calendar__EventsContainer WhiteLabel">
                <div className="Calendar__EventContainer WhiteLabel">
                    <div className="Calendar__EventDateContainer WhiteLabel">
                        <h2 className="Calendar__EventDateDay WhiteLabel">
                            Sábado
                        </h2>
                        <h2 className="Calendar__EventDateNumber WhiteLabel">
                            16
                        </h2>
                        <h2 className="Calendar__EventDateMonth WhiteLabel">
                            NOV
                        </h2>
                    </div>
                    <div className="Calendar__EventDescriptionContainer WhiteLabel">
                        <Link to="/" className="Calendar__EventDescriptionLink WhiteLabel">
                            Corona Capital 2019
                        </Link>
                        <p className="Calendar__EventDescriptionTime WhiteLabel">
                            14:00 - 00:30
                        </p>
                        <Link to="/" className="Calendar__EventAdressLinkContainer WhiteLabel">
                            <div className="Calendar__EventAdressLinkIconContainer Icn_WhiteLabel WhiteLabel">
                                <span className="Display">
                                    Icono Marker
                                </span>
                            </div>
                            <div className="Calendar__EventAdressLinkTextContainer WhiteLabel">
                                <p className="Calendar__EventAdressLinkText WhiteLabel">Curva 4, autódromo hermanos rodríguez, CDMX, México</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="Calendar__EventContainer WhiteLabel">
                    <div className="Calendar__EventDateContainer WhiteLabel">
                        <h2 className="Calendar__EventDateDay WhiteLabel">
                            Domingo
                        </h2>
                        <h2 className="Calendar__EventDateNumber WhiteLabel">
                            17
                        </h2>
                        <h2 className="Calendar__EventDateMonth WhiteLabel">
                            NOV
                        </h2>
                    </div>
                    <div className="Calendar__EventDescriptionContainer WhiteLabel">
                        <Link to="/" className="Calendar__EventDescriptionLink WhiteLabel">
                            Corona Capital 2019
                        </Link>
                        <p className="Calendar__EventDescriptionTime WhiteLabel">
                            14:00 - 00:30
                        </p>
                        <Link to="/" className="Calendar__EventAdressLinkContainer WhiteLabel">
                            <div className="Calendar__EventAdressLinkIconContainer Icn_WhiteLabel WhiteLabel">
                                <span className="Display">
                                    Icono Marker
                                </span>
                            </div>
                            <div className="Calendar__EventAdressLinkTextContainer WhiteLabel">
                                <p className="Calendar__EventAdressLinkText WhiteLabel">Curva 4, autódromo hermanos rodríguez, CDMX, México</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="Calendar__EventContainer WhiteLabel">
                    <div className="Calendar__EventDateContainer WhiteLabel">
                        <h2 className="Calendar__EventDateDay WhiteLabel">
                            Lunes
                        </h2>
                        <h2 className="Calendar__EventDateNumber WhiteLabel">
                            18
                        </h2>
                        <h2 className="Calendar__EventDateMonth WhiteLabel">
                            NOV
                        </h2>
                    </div>
                    <div className="Calendar__EventDescriptionContainer WhiteLabel">
                        <Link to="/" className="Calendar__EventDescriptionLink WhiteLabel">
                            Aniversario de la Revolución Mexicana
                        </Link>
                        <p className="Calendar__EventDescriptionTime WhiteLabel">
                            14:00 - 00:30
                        </p>
                        <Link to="/" className="Calendar__EventAdressLinkContainer WhiteLabel">
                            <div className="Calendar__EventAdressLinkIconContainer Icn_WhiteLabel WhiteLabel">
                                <span className="Display">
                                    Icono Marker
                                </span>
                            </div>
                            <div className="Calendar__EventAdressLinkTextContainer WhiteLabel">
                                <p className="Calendar__EventAdressLinkText WhiteLabel">Ángel de la Independencia, CDMX, México</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Calendar;
