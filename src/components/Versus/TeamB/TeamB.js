import React from "react";

const Team = () => (    
    <div className="Versus__TeamHomeContainer WhiteLabel">
        <div className="Versus__TeamHome WhiteLabel">
            <div className="Versus__TeamHomeLogoContainer WhiteLabel">
                <picture>
                    <source media="(min-width: 0px)" srcSet="./static/aspect-ratio-images/1x1-220x220.jpg" />
                    <img className="Versus__TeamHomeLogo WhiteLabel" src="./static/aspect-ratio-images/1x1-220x220.jpg" alt="Test" />
                </picture>
            </div>
            <div className="Versus__TeamHomeNameContainer WhiteLabel">
                <div className="Versus__TeamHomeName WhiteLabel">
                    Cuba
                </div>
            </div>
            <div className="Versus__TeamHomeScoreContainer WhiteLabel">
                <div className="Versus__TeamHomeScore WhiteLabel">
                    0
                </div>
            </div>
        </div>
    </div>
    
);

export default Team;
