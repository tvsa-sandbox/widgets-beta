import React from "react";
import { Link } from "gatsby";

const TvGuideItemActiveTv = (props) => (
    <Link to="/" className="TvGuide__LiveTvShowContainer WhiteLabel" id={props.id}>
        <div className="TvGuide__LiveTvShow WhiteLabel">
            <time className="TvGuide__LiveTvShow-Time WhiteLabel">
                11:10
            </time>
            <h3 className="TvGuide__LiveTvShow-Title WhiteLabel">
                Noticieros Televisa Deportes
            </h3>
            <small className="TvGuide__LiveTvShow-Live WhiteLabel">
                Ahora en TV
            </small>
        </div>
    </Link>
);

export default TvGuideItemActiveTv;
