import React from "react";
import { Link } from "gatsby";

const HeaderDrop = () => (
    <nav className="HeaderDrop WhiteLabel">
        <div className="HeaderDrop__LinksContainer WhiteLabel">
            <Link className="HeaderDrop__LinksItem WhiteLabel" to="/Items">
              <span>
                Items
              </span>
            </Link>
            <Link className="HeaderDrop__LinksItem WhiteLabel" to="/Items">
              <span>
                Items
              </span>
            </Link>
            <Link className="HeaderDrop__LinksItem WhiteLabel" to="/Items">
              <span>
                Items
              </span>
            </Link>
             <div className="HeaderDrop__ListContainer WhiteLabel">
                <span>Widgets</span>
                <ul className="HeaderDrop__List WhiteLabel">
                  <li className="HeaderDrop__ListItem WhiteLabel">
                    <Link className="HeaderDrop__LinksItem WhiteLabel" to="/asides"> Asides </Link>
                  </li>
                  <li className="HeaderDrop__ListItem WhiteLabel">
                    <Link className="HeaderDrop__LinksItem WhiteLabel" to="/cards"> Cards</Link>
                  </li>
                  <li className="HeaderDrop__ListItem WhiteLabel">
                    <Link className="HeaderDrop__LinksItem WhiteLabel" to="/carrousels"> Carrousels</Link>
                  </li>
                  <li className="HeaderDrop__ListItem WhiteLabel">
                    <Link className="HeaderDrop__LinksItem WhiteLabel" to="/hybrids"> Hybrids</Link>
                  </li>
                  <li className="HeaderDrop__ListItem WhiteLabel">
                    <Link className="HeaderDrop__LinksItem WhiteLabel" to="/navigations"> Navigations</Link>
                  </li>
                  <li className="HeaderDrop__ListItem WhiteLabel">
                    <Link className="HeaderDrop__LinksItem WhiteLabel" to="/sliders"> Sliders </Link>
                  </li>
              </ul>
          </div>
        </div>
    </nav>
);

export default HeaderDrop;
