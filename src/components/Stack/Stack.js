import React from "react";
import { Link } from "gatsby";

const Stack = () => (
    <section className="Stack WhiteLabel">
        <div className="Stack__ItemsContainer WhiteLabel">
            <Link to="/" className="Stack__Item WhiteLabel">
                <div className="Stack__ItemThumbnail WhiteLabel">
                    <div className="Stack__ItemImageContainer WhiteLabel">
                        <picture>
                            <source media="(min-width: 0px) and (max-width: 414px)" srcSet="./static/aspect-ratio-images/4x3-414x311.jpg" />
                            <source media="(min-width: 415px) and (max-width: 768px)" srcSet="./static/aspect-ratio-images/4x3-818x614.jpg" />
                            <source media="(min-width: 769px)" srcSet="./static/aspect-ratio-images/4x3-414x311.jpg" />
                            <img className="Stack__ItemImage WhiteLabel" src="./static/aspect-ratio-images/4x3-414x311.jpg" alt="Test" />
                        </picture>
                    </div>
                    <div className="Stack__ItemTitleContainer WhiteLabel">
                        <h3 className="Stack__ItemTitle WhiteLabel">
	                        Estadísticas
                        </h3>
                    </div>
                    <div className="Stack__ItemLabelContainer WhiteLabel">
                        <span className="Stack__ItemLabel WhiteLabel">
	                        Ver contenido
                        </span>
                    </div>
                </div>
            </Link>
            <Link to="/" className="Stack__Item WhiteLabel">
                <div className="Stack__ItemThumbnail WhiteLabel">
                    <div className="Stack__ItemImageContainer WhiteLabel">
                        <picture>
                            <source media="(min-width: 0px) and (max-width: 414px)" srcSet="./static/aspect-ratio-images/4x3-414x311.jpg" />
                            <source media="(min-width: 415px) and (max-width: 768px)" srcSet="./static/aspect-ratio-images/4x3-818x614.jpg" />
                            <source media="(min-width: 769px)" srcSet="./static/aspect-ratio-images/4x3-414x311.jpg" />
                            <img className="Stack__ItemImage WhiteLabel" src="./static/aspect-ratio-images/4x3-414x311.jpg" alt="Test" />
                        </picture>
                    </div>
                    <div className="Stack__ItemTitleContainer WhiteLabel">
                        <h3 className="Stack__ItemTitle WhiteLabel">
	                        Estadísticas
                        </h3>
                    </div>
                    <div className="Stack__ItemLabelContainer WhiteLabel">
                        <span className="Stack__ItemLabel WhiteLabel">
	                        Ver contenido
                        </span>
                    </div>
                </div>
            </Link>
            <Link to="/" className="Stack__Item WhiteLabel">
                <div className="Stack__ItemThumbnail WhiteLabel">
                    <div className="Stack__ItemImageContainer WhiteLabel">
                        <picture>
                            <source media="(min-width: 0px) and (max-width: 414px)" srcSet="./static/aspect-ratio-images/4x3-414x311.jpg" />
                            <source media="(min-width: 415px) and (max-width: 768px)" srcSet="./static/aspect-ratio-images/4x3-818x614.jpg" />
                            <source media="(min-width: 769px)" srcSet="./static/aspect-ratio-images/4x3-414x311.jpg" />
                            <img className="Stack__ItemImage WhiteLabel" src="./static/aspect-ratio-images/4x3-414x311.jpg" alt="Test" />
                        </picture>
                    </div>
                    <div className="Stack__ItemTitleContainer WhiteLabel">
                        <h3 className="Stack__ItemTitle WhiteLabel">
	                        Estadísticas
                        </h3>
                    </div>
                    <div className="Stack__ItemLabelContainer WhiteLabel">
                        <span className="Stack__ItemLabel WhiteLabel">
	                        Ver contenido
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    </section>
);

export default Stack;
