import React from "react";
import { Link } from "gatsby";

const TvGuideItemLink = (props) => (
    <Link to="/" className="TvGuide__ShowContainer-Link WhiteLabel" id={props.id}>
        <div className="TvGuide__Show WhiteLabel">
            <time className="TvGuide__Show-Time WhiteLabel">
                19:30
            </time>
            <h3 className="TvGuide__Show-TitleUnderline WhiteLabel">
                La Rosa de Guadalupe
            </h3>
        </div>
    </Link>
);

export default TvGuideItemLink;
