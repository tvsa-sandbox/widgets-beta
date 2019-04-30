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
            <div className="Calendar__EventContainer WhiteLabel">
                <div className="Calendar__EventDateContainer Whitelabel">
                    <h2 className="Calendar__EventDateMonth Whitelabel">
                        JUL
                    </h2>
                    <h2 className="Calendar__EventDateDay Whitelabel">
                        30
                    </h2>
                </div>
                <div className="Calendar__EventDescriptionContainer Whitelabel">
                    <Link to="/" className="CardPerson__EventDescriptionLink WhiteLabel">
                        Ver Más
                    </Link>
                    <p className="Calendar__DescriptionTime WhiteLabel">
                        20:30
                    </p>
                    <Link to="/" className="CardPerson__EventAdressLink WhiteLabel">
                        CDMX, México
                    </Link>
                </div>
            </div>
        </div>
    </section>
);

export default Calendar;
