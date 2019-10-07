import React from "react";
import Link from "gatsby-link";

const MiniCard = () => (
    <section className="MiniCard WhiteLabel">
        <div className="MiniCard__ItemsContainer WhiteLabel">
            <Link to="/" className="MiniCard__Item WhiteLabel">
                <div className="MiniCard__ItemImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px) and (max-width: 414px)" srcSet="./static/aspect-ratio-images/16x9-Graphic1-209x114.jpg" />
                        <source media="(min-width: 415px) and (max-width: 768px)" srcSet="./static/aspect-ratio-images/16x9-Graphic1-258x145.jpg" />
                        <source media="(min-width: 769px)" srcSet="./static/aspect-ratio-images/16x9-Graphic1-258x145.jpg" />
                        <img className="MiniCard__ItemImage WhiteLabel" src="./static/aspect-ratio-images/16x9-Graphic1-209x114.jpg" alt="Test" />
                    </picture>
                </div>
                <div className="MiniCard__ItemTitleContainer WhiteLabel">
                    <div className="MiniCard__ItemTitle WhiteLabel">
                        Italia lanza playera verde por segunda vez en su historia
                    </div>
                </div>
            </Link>
            <Link to="/" className="MiniCard__Item WhiteLabel">
                <div className="MiniCard__ItemImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px) and (max-width: 414px)" srcSet="./static/aspect-ratio-images/16x9-Graphic1-209x114.jpg" />
                        <source media="(min-width: 415px) and (max-width: 768px)" srcSet="./static/aspect-ratio-images/16x9-Graphic1-258x145.jpg" />
                        <source media="(min-width: 769px)" srcSet="./static/aspect-ratio-images/16x9-Graphic1-258x145.jpg" />
                        <img className="MiniCard__ItemImage WhiteLabel" src="./static/aspect-ratio-images/16x9-Graphic1-209x114.jpg" alt="Test" />
                    </picture>
                </div>
                <div className="MiniCard__ItemTitleContainer WhiteLabel">
                    <div className="MiniCard__ItemTitle WhiteLabel">
                        Carlos Vela: "Es mi carrera y no estoy para darle gusto a nadie"
                    </div>
                </div>
            </Link>
        </div>
    </section>
);

export default MiniCard;
