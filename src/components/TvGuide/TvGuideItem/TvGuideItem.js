import React from "react";
import { Link } from "gatsby";

const TvGuideItem = (props) => (
    <Link to="/" className="TvGuide__ShowContainer WhiteLabel" id={props.id}>
        <div className="TvGuide__Show WhiteLabel">
            <time className="TvGuide__Show-Time WhiteLabel">
                19:30
            </time>
            <h3 className="TvGuide__Show-Title WhiteLabel">
                La Rosa de Guadalupe
            </h3>
        </div>
    </Link>
);

export default TvGuideItem;
