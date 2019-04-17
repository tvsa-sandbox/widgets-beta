import React from "react";
import { Link } from "gatsby";

const RelatedContent__Share = (props) => (

    <Link className="RelatedContent__ShareBar WhiteLabel" to="/" >
        <div className="RelatedContent__ShareBarDesktop WhiteLabel">
            <Link className="RelatedContent__ShareBarLink Icn_Facebook WhiteLabel" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" title="">
                <p className="Display">
                    facebook
                </p>
            </Link>
            <Link className="RelatedContent__ShareBarLink Icn_Instagram WhiteLabel" href="https://www.instagram.com/"  target="_blank" rel="noopener noreferrer" title="">
                <p className="Display">
                    instagram
                </p>
            </Link>
            <Link className="RelatedContent__ShareBarLink Icn_Twitter WhiteLabel" href="https://twitter.com/" target="_blank" rel="noopener noreferrer" title="">
                <p className="Display">
                    twitter
                </p>
            </Link>
        </div>
    </Link>
);

export default RelatedContent__Share;
