import React from "react";
import Team from "./Team/Team";
import TeamVisit from "./TeamVisit/TeamVisit";
import Info from "./Info/Info";

const Versus = () => (
    <section className="Versus WhiteLabel">
		<div className="Versus__Container WhiteLabel">
            <div className="Versus__LeagueContainer WhiteLabel">
        	    <div className="Versus__TitleContainer WhiteLabel">
        	        <h2 className="Versus__Title WhiteLabel">
        	            Champions League
        	        </h2>
        	    </div>
                <div className="Versus__LogoContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px)" srcSet="./static/aspect-ratio-images/1x1-220x220.jpg" />
                        <img className="Versus__Logo WhiteLabel" src="./static/aspect-ratio-images/1x1-220x220.jpg" alt="Test" />
                    </picture>
                </div>
            </div>
            <div className="Versus__TextContainer WhiteLabel">
                <div className="Versus__Text WhiteLabel">
                    Final
                </div>
            </div>
            <div className="Versus__GroupContainer WhiteLabel">
                <Team />
                <Info />
                <TeamVisit />
            </div>
            <div className="Versus__GroupContainer WhiteLabel">
                <Team />
                <Info />
                <TeamVisit />
            </div>
            <div className="Versus__GroupContainer WhiteLabel">
                <Team />
                <Info />
                <TeamVisit />
            </div>
        </div>
    </section>
);

export default Versus;
