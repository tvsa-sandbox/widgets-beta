import React from "react";
import { Link } from "gatsby";

const Calendar = () => (
    <section className="Calendar WhiteLabel">
        <div className="Calendar__Container WhiteLabel">
            <div className="Calendar__TitleContainer WhiteLabel">
                <h2 className="Calendar__Title WhiteLabel">
                    Título
                </h2>
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
