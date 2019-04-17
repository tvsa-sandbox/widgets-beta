import React from "react";
import { Link } from "gatsby";

const TickerEventsLink = (props) => (
    <Link to="/" className="Ticker__ShowContainer WhiteLabel">
        <div className="Ticker__ShowTitleContainer WhiteLabel">
            <span className="Ticker__ShowTitle WhiteLabel">
                Próximo Estreno: Jurassic World
            </span>
        </div>
        <div className="Ticker__ShowDescriptionContainer WhiteLabel">
            <span className="Ticker__ShowDescription WhiteLabel">
                <b className="Ticker__ShowDescription-Bold">Domingo 23 de julio <i className="Ticker__ShowDescription-Italic">20:00 pm</i></b>
            </span>
        </div>
        <div className="Ticker__LinkIcon Icn_Blank WhiteLabel">
            <span className="Display">
                Blank Icon
            </span>
        </div>
    </Link>
);

export default TickerEventsLink;
