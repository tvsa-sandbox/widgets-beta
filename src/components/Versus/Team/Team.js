import React from "react";

const Team = () => (    
    <div className="Versus__TeamContainer WhiteLabel">
        <div className="Versus__Team WhiteLabel">
            <div className="Versus__TeamLogoContainer WhiteLabel">
                <picture>
                    <source media="(min-width: 0px)" srcSet="./static/aspect-ratio-images/1x1-220x220.jpg" />
                    <img className="Versus__TeamLogo WhiteLabel" src="./static/aspect-ratio-images/1x1-220x220.jpg" alt="Test" />
                </picture>
            </div>
            <div className="Versus__TeamNameContainer WhiteLabel">
                <div className="Versus__TeamName WhiteLabel">
                    Liverpool
                </div>
            </div>
            <div className="Versus__TeamScoreContainer WhiteLabel">
                <div className="Versus__TeamScore WhiteLabel">
                    4
                </div>
            </div>
        </div>
    </div>
    
);

export default Team;
