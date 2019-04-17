import React from "react";
import { Link } from "gatsby";

const Navegation = () => (
    <div className="Navigation WhiteLabel">
      <div className="Navigation__LinksContainer WhiteLabel">
        <Link className="Navigation__LinksItems WhiteLabel" to="/Items">
          <p>
            Items
          </p>
        </Link>
         <div className="Navigation__ListContainer WhiteLabel">
            Widgets
            <ul className="Navigation__List WhiteLabel">
              <li className="Navigation__ListItem WhiteLabel">
                <Link className="Navigation__LinksItems WhiteLabel" to="/asides"> Asides </Link>
              </li>
              <li className="Navigation__ListItem WhiteLabel">
                <Link className="Navigation__LinksItems WhiteLabel" to="/cards"> Cards</Link>
              </li>
              <li className="Navigation__ListItem WhiteLabel">
                <Link className="Navigation__LinksItems WhiteLabel" to="/carrousels"> Carrousels</Link>
              </li>
              <li className="Navigation__ListItem WhiteLabel">
                <Link className="Navigation__LinksItems WhiteLabel" to="/hybrids"> Hybrids</Link>
              </li>
              <li className="Navigation__ListItem WhiteLabel">
                <Link className="Navigation__LinksItems WhiteLabel" to="/navigations"> Navigations</Link>
              </li>
              <li className="Navigation__ListItem WhiteLabel">
                <Link className="Navigation__LinksItems WhiteLabel" to="/sliders"> Sliders </Link>
              </li>
          </ul>
          </div>
            <div className="Navigation__ListContainer WhiteLabel">
                Pages
                  <ul className="Navigation__List WhiteLabel">
                    <li className="Navigation__ListItem WhiteLabel">
                      <Link className="Navigation__LinksItems WhiteLabel" to="/article"> Article </Link>
                    </li>
                    <li className="Navigation__ListItem WhiteLabel">
                      <Link className="Navigation__LinksItems WhiteLabel" to="/article/articlelead"> Article Lead Full</Link>
                    </li>
                    <li className="Navigation__ListItem WhiteLabel">
                      <Link className="Navigation__LinksItems WhiteLabel" to="/article/articleleadimage"> Article Lead Image</Link>
                    </li>
                    <li className="Navigation__ListItem WhiteLabel">
                      <Link className="Navigation__LinksItems WhiteLabel" to="/article/articleleadslideshow"> Article Lead SlideShow</Link>
                    </li>
                    <li className="Navigation__ListItem WhiteLabel">
                      <Link className="Navigation__LinksItems WhiteLabel" to="/article/articleleadvideo"> Article Lead Video</Link>
                    </li>
                    <li className="Navigation__ListItem WhiteLabel">
                      <Link className="Navigation__LinksItems WhiteLabel" to="/liveblog"> LiveBlog </Link>
                    </li>
                    <li className="Navigation__ListItem WhiteLabel">
                      <Link className="Navigation__LinksItems WhiteLabel" to="/person"> Celebrity </Link>
                    </li>
                    <li className="Navigation__ListItem WhiteLabel">
                      <Link className="Navigation__LinksItems WhiteLabel" to="/slideshowcontainer"> SlideShow </Link>
                    </li>
                    <li className="Navigation__ListItem WhiteLabel">
                      <Link className="Navigation__LinksItems WhiteLabel" to="/videocontainer"> Video </Link>
                    </li>
                    <li className="Navigation__ListItem WhiteLabel">
                      <Link className="Navigation__LinksItems WhiteLabel" to="/errors"> Error 404 </Link>
                    </li>
                    <li className="Navigation__ListItem WhiteLabel">
                      <Link className="Navigation__LinksItems WhiteLabel" to="/search"> Search </Link>
                    </li>
                </ul>
            </div>
        <div className="Navigation__ListContainer WhiteLabel">
            Enhancements
              <ul className="Navigation__List WhiteLabel">
                <li className="Navigation__ListItem WhiteLabel">
                  <Link className="Navigation__LinksItems WhiteLabel" to="/image"> Image </Link>
                </li>
                <li className="Navigation__ListItem WhiteLabel">
                  <Link className="Navigation__LinksItems WhiteLabel" to="/quote"> Quote</Link>
                </li>
                <li className="Navigation__ListItem WhiteLabel">
                  <Link className="Navigation__LinksItems WhiteLabel" to="/relatedcontent"> Related Content</Link>
                </li>
                <li className="Navigation__ListItem WhiteLabel">
                  <Link className="Navigation__LinksItems WhiteLabel" to="/slideshow"> SlideShow</Link>
                </li>
                <li className="Navigation__ListItem WhiteLabel">
                  <Link className="Navigation__LinksItems WhiteLabel" to="/socialembeds"> Social Embeds</Link>
                </li>
                <li className="Navigation__ListItem WhiteLabel">
                  <Link className="Navigation__LinksItems WhiteLabel" to="/universalrichtext"> Rich Text </Link>
                </li>
                <li className="Navigation__ListItem WhiteLabel">
                  <Link className="Navigation__LinksItems WhiteLabel" to="/video"> Video </Link>
                </li>
            </ul>
        </div>
      </div>
    </div>
);

export default Navegation;
