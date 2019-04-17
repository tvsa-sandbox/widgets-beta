import React from "react";
import Link from 'gatsby-link'

const SocialNetworks = () => (
    <nav className="Header__SocialNetworks WhiteLabel">
        <div className="Header__FollowUsContainer WhiteLabel">
            <span className="Header__FollowUs WhiteLabel">Síguenos en</span>
        </div>
        <div className="Header__SocialContainer WhiteLabel">
            <Link to="/" className="Header__SocialItem Icn_Facebook WhiteLabel">
                <span className="Display">
                    facebook
                </span>
            </Link>
            <Link to="/" className="Header__SocialItem Icn_Twitter WhiteLabel">
                <span className="Display">
                    Twitter
                </span>
            </Link>
            <Link to="/" className="Header__SocialItem Icn_Instagram WhiteLabel">
                <span className="Display">
                    Instagram
                </span>
            </Link>
            <Link to="/" className="Header__SocialItem Icn_YouTube WhiteLabel">
                <span className="Display">
                    YouTube
                </span>
            </Link>
            <Link to="/" className="Header__SocialItem Icn_Spotify WhiteLabel">
                <span className="Display">
                    Spotify
                </span>
            </Link>
        </div>
    </nav>
);

export default SocialNetworks;
