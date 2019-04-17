import React from "react";
import { Link } from "gatsby";

const TvGuideItemActive = (props) => (
    <Link to="/" className="TvGuide__LiveShowContainer WhiteLabel" id={props.id}>
        <div className="TvGuide__LiveShow WhiteLabel">
            <time className="TvGuide__LiveShow-Time WhiteLabel">
                11:10
            </time>
            <h3 className="TvGuide__LiveShow-Title WhiteLabel">
                Noticieros Televisa Deportes
            </h3>
            <small className="TvGuide__LiveShow-Live WhiteLabel">
                Estás viendo
            </small>
        </div>
    </Link>
);

export default TvGuideItemActive;
