import React from "react";

const TeamVisit = () => (    
    <div className="Versus__TeamAwayContainer WhiteLabel">
        <div className="Versus__TeamAway WhiteLabel">
            <div className="Versus__TeamAwayLogoContainer WhiteLabel">
                <picture>
                    <source media="(min-width: 0px)" srcSet="./static/aspect-ratio-images/1x1-220x220.jpg" />
                    <img className="Versus__TeamAwayLogo WhiteLabel" src="./static/aspect-ratio-images/1x1-220x220.jpg" alt="Test" />
                </picture>
            </div>
            <div className="Versus__TeamAwayNameContainer WhiteLabel">
                <div className="Versus__TeamAwayName WhiteLabel">
                    USA
                </div>
            </div>
            <div className="Versus__TeamAwayScoreContainer WhiteLabel">
                <div className="Versus__TeamAwayScore WhiteLabel">
                    4
                </div>
            </div>
            <div className="Versus__TeamAwayPenaltyContainer WhiteLabel">
                <div className="Versus__TeamAwayPenalty WhiteLabel">
                    ( 2 )
                </div>
            </div>
        </div>
    </div>
    
);

export default TeamVisit;
