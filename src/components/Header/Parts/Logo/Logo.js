import React from "react";
import Link from 'gatsby-link'

const Logo = ({ siteTitle }) => (
    <Link className="Logo WhiteLabel">
        <h1 className="Logo__Icon Icn_WhiteLabel WhiteLabel">
            <span className="Display">
                {siteTitle}
            </span>
        </h1>
    </Link>
);

export default Logo;
