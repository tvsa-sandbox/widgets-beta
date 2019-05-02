import React from "react";
import { Link } from "gatsby";

const Calendar = () => (
    <section className="Calendar LasEstrellas">
        <div className="Calendar__Container LasEstrellas">
            <div className="Calendar__CurrentContainer LasEstrellas">
                <div className="Calendar__CurrentImageContainer LasEstrellas">
                    <picture>
                        <img className="Calendar__CurrentImage LasEstrellas" src="./static/aspect-ratio-images/16x9-414x233.jpg" alt="ImageEvent" />
                    </picture>
                    <img className="Calendar__CurrentImage LasEstrellas" src="https://static.vix.com/es/sites/default/files/styles/1x1/public/imj/imujer/5/522035185.jpg?itok=SyAk9fOK" alt="Evento"/>
                </div>
                <div className="Calendar__CurrentDateContainer LasEstrellas">
                    <h2 className="Calendar__CurrentDateDay LasEstrellas">
                        Viernes
                    </h2>
                    <h2 className="Calendar__CurrentDateNumber LasEstrellas">
                        03
                    </h2>
                    <h2 className="Calendar__CurrentDateMonth LasEstrellas">
                        Mayo
                    </h2>
                </div>
                <div className="Calendar__CurrentDateTimeContainer LasEstrellas">
                    <h2 className="Calendar__CurrentDateTimeHour LasEstrellas">
                        12
                    </h2>
                    <h2 className="Calendar__CurrentDateTimeMinutes LasEstrellas">
                        10
                    </h2>
                </div>
            </div>
            <div className="Calendar__EventsContainer LasEstrellas">
                <div className="Calendar__EventContainer LasEstrellas">
                    <div className="Calendar__EventDateContainer LasEstrellas">
                        <h2 className="Calendar__EventDateDay LasEstrellas">
                            Sábado
                        </h2>
                        <h2 className="Calendar__EventDateNumber LasEstrellas">
                            16
                        </h2>
                        <h2 className="Calendar__EventDateMonth LasEstrellas">
                            NOV
                        </h2>
                    </div>
                    <div className="Calendar__EventDescriptionContainer LasEstrellas">
                        <Link to="/" className="Calendar__EventDescriptionLink LasEstrellas">
                            Corona Capital 2019
                        </Link>
                        <p className="Calendar__EventDescriptionTime LasEstrellas">
                            14:00 - 00:30
                        </p>
                        <Link to="/" className="Calendar__EventAdressLinkContainer LasEstrellas">
                            <div className="Calendar__EventAdressLinkIconContainer LasEstrellas">
                                <img className="Calendar__EventAdressLinkIcon" src="http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-Picture.png" alt="Map Marker"/>
                            </div>
                            <div className="Calendar__EventAdressLinkTextContainer LasEstrellas">
                                <p className="Calendar__EventAdressLinkText LasEstrellas">Curva 4, autódromo hermanos rodríguez, CDMX, México</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="Calendar__EventContainer LasEstrellas">
                    <div className="Calendar__EventDateContainer LasEstrellas">
                        <h2 className="Calendar__EventDateDay LasEstrellas">
                            Domingo
                        </h2>
                        <h2 className="Calendar__EventDateNumber LasEstrellas">
                            17
                        </h2>
                        <h2 className="Calendar__EventDateMonth LasEstrellas">
                            NOV
                        </h2>
                    </div>
                    <div className="Calendar__EventDescriptionContainer LasEstrellas">
                        <Link to="/" className="Calendar__EventDescriptionLink LasEstrellas">
                            Corona Capital 2019
                        </Link>
                        <p className="Calendar__EventDescriptionTime LasEstrellas">
                            14:00 - 00:30
                        </p>
                        <Link to="/" className="Calendar__EventAdressLinkContainer LasEstrellas">
                            <div className="Calendar__EventAdressLinkIconContainer LasEstrellas">
                                <img className="Calendar__EventAdressLinkIcon" src="http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-Picture.png" alt="Map Marker"/>
                            </div>
                            <div className="Calendar__EventAdressLinkTextContainer LasEstrellas">
                                <p className="Calendar__EventAdressLinkText LasEstrellas">Curva 4, autódromo hermanos rodríguez, CDMX, México</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="Calendar__EventContainer LasEstrellas">
                    <div className="Calendar__EventDateContainer LasEstrellas">
                        <h2 className="Calendar__EventDateDay LasEstrellas">
                            Lunes
                        </h2>
                        <h2 className="Calendar__EventDateNumber LasEstrellas">
                            18
                        </h2>
                        <h2 className="Calendar__EventDateMonth LasEstrellas">
                            NOV
                        </h2>
                    </div>
                    <div className="Calendar__EventDescriptionContainer LasEstrellas">
                        <Link to="/" className="Calendar__EventDescriptionLink LasEstrellas">
                            Aniversario de la Revolución Mexicana
                        </Link>
                        <p className="Calendar__EventDescriptionTime LasEstrellas">
                            14:00 - 00:30
                        </p>
                        <Link to="/" className="Calendar__EventAdressLinkContainer LasEstrellas">
                            <div className="Calendar__EventAdressLinkIconContainer LasEstrellas">
                                <img className="Calendar__EventAdressLinkIcon" src="http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-Picture.png" alt="Map Marker"/>
                            </div>
                            <div className="Calendar__EventAdressLinkTextContainer LasEstrellas">
                                <p className="Calendar__EventAdressLinkText LasEstrellas">Ángel de la Independencia, CDMX, México</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Calendar;
