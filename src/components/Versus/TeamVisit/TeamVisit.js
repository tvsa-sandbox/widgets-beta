import React from "react";

const TeamVisit = () => (    
    <div className="Versus__TeamContainer WhiteLabel">
        <div className="Versus__Team-Visit WhiteLabel">
            <div className="Versus__TeamLogoContainer WhiteLabel">
                <picture>
                    <source media="(min-width: 0px)" srcSet="./static/aspect-ratio-images/1x1-220x220.jpg" />
                    <img className="Versus__TeamLogo WhiteLabel" src="./static/aspect-ratio-images/1x1-220x220.jpg" alt="Test" />
                </picture>
            </div>
            <div className="Versus__TeamNameContainer WhiteLabel">
                <span className="Versus__TeamName WhiteLabel">
                    Tottenham
                </span>
            </div>
            <div className="Versus__TeamScoreContainer-Visit WhiteLabel">
                <span className="Versus__TeamScore WhiteLabel">
                    3
                </span>
            </div>
        </div>
    </div>
    
);

export default TeamVisit;
