import React from "react";
import { Link } from "gatsby";

const LiveToolBarBarContainer = () => (
    <Link to="/" className="LiveToolBar__InfoContainer WhiteLabel">
        <div className="LiveToolBar__InfoTop WhiteLabel">
            <small className="LiveToolBar__Label WhiteLabel">
                Ver en vivo
            </small>
            <time className="LiveToolBar__Time WhiteLabel">
                19:30
            </time>
        </div>
        <div className="LiveToolBar__InfoBottom WhiteLabel">
            <small className="LiveToolBar__Show WhiteLabel">
                La Rosa de Guadalupe
            </small>
        </div>
    </Link>
);

export default LiveToolBarBarContainer;
