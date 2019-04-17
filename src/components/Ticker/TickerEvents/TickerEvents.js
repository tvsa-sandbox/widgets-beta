import React from "react";

const TickerEvents = (props) => (
    <div className="Ticker__ShowContainer WhiteLabel">
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
    </div>
);

export default TickerEvents;
