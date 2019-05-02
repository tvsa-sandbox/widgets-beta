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
                    <img className="Calendar__CurrentImage WhiteLabel" src="https://static.vix.com/es/sites/default/files/styles/1x1/public/imj/imujer/5/522035185.jpg?itok=SyAk9fOK" alt="Evento"/>
                </div>
                <div className="Calendar__CurrentDateContainer WhiteLabel">
                    <h2 className="Calendar__CurrentDateDay WhiteLabel">
                        Martes
                    </h2>
                    <h2 className="Calendar__CurrentDateNumber WhiteLabel">
                        30
                    </h2>
                    <h2 className="Calendar__CurrentDateMonth WhiteLabel">
                        Abril
                    </h2>
                </div>
                <div className="Calendar__CurrentDateTimeContainer WhiteLabel">
                    <h2 className="Calendar__CurrentDateTimeHour WhiteLabel">
                        1
                    </h2>
                    <h2 className="Calendar__CurrentDateTimeMinutes WhiteLabel">
                        48
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
                        <Link to="/" className="Calendar__EventAdressLink WhiteLabel">
                            Curva 4, autódromo hermanos rodríguez, CDMX, México
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
                        <Link to="/" className="Calendar__EventAdressLink WhiteLabel">
                            Curva 4, autódromo hermanos rodríguez, CDMX, México
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
                        <Link to="/" className="Calendar__EventAdressLink WhiteLabel">
                            Ángel de la Independencia, CDMX, México
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Calendar;
