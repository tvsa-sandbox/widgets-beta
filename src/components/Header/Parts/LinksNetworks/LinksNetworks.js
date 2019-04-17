import React from "react";
import Link from 'gatsby-link'

const LinksNetworks = () => (
    <nav className="Header__LinksNetworks WhiteLabel">
        <div className="Header__MoreContainer WhiteLabel">
            <span className="Header__More WhiteLabel">Más de televisa</span>
        </div>
        <div className="Header__NetworksContainer WhiteLabel">
            <Link to="/" className="Header__NetworksItem Icn_Nueve WhiteLabel">
                <span className="Display">
                    Nueve
                </span>
            </Link>
            <Link to="/" className="Header__NetworksItem Icn_ForoTV WhiteLabel">
                <span className="Display">
                    Foro Tv
                </span>
            </Link>
            <Link to="/" className="Header__NetworksItem Icn_Deportes WhiteLabel">
                <span className="Display">
                    Televisa deportes
                </span>
            </Link>
            <Link to="/" className="Header__NetworksItem Icn_News WhiteLabel">
                <span className="Display">
                    Televisa news
                </span>
            </Link>
        </div>
    </nav>
);

export default LinksNetworks;
