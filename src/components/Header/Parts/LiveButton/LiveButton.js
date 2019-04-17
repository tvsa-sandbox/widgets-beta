import React from "react";
import Link from 'gatsby-link'

const LiveButton = () => (
    <div className="Header__LiveButton WhiteLabel">
        <Link className="Header__LiveButtonContainer WhiteLabel">
            <div className="Header__LiveButtonTextContainer WhiteLabel">
                <span className="Header__LiveButtonText WhiteLabel">
                    Link
                </span>
            </div>
        </Link>
    </div>
);

export default LiveButton;
