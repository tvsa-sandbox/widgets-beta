import React from "react";
import Team from "./Team/Team";
import TeamB from "./TeamB/TeamB";
import TeamAway from "./TeamAway/TeamAway";
import TeamAwayB from "./TeamAwayB/TeamAwayB";
import Info from "./Info/Info";
import InfoB from "./InfoB/InfoB";
import InfoC from "./InfoC/InfoC";
import InfoD from "./InfoD/InfoD";
import Live from "./Live/Live";
import Banner from "./Banner/Banner";

const Versus = () => (
    <section className="Versus WhiteLabel">
        <div className="Versus__Wrapper WhiteLabel">
            <div className="Versus__TitleContainer WhiteLabel">
        	    <h2 className="Versus__Title WhiteLabel">
        	        Copa Oro
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
                Amistosos
            </div>
        </div>
        <div className="Versus__TeamsWrapper WhiteLabel">
            <div className="Versus__TeamsTitleContainer WhiteLabel">
                <div className="Versus__TeamsTitle WhiteLabel">
                    Amistosos del Tri
                </div>
            </div>
            <div className="Versus__TeamsSubTitleContainer WhiteLabel">
                <div className="Versus__TeamsSubTitle WhiteLabel">
                    Amistosos
                </div>
            </div>
            <TeamB />
            <Info />
            <TeamAwayB />
        </div>
        <div className="Versus__TeamsWrapper WhiteLabel">
            <Live />
            <Banner />
            <div className="Versus__TeamsTitleContainer WhiteLabel">
                <div className="Versus__TeamsTitle WhiteLabel">
                    Amistosos del Tri
                </div>
            </div>
            <div className="Versus__TeamsSubTitleContainer WhiteLabel">
                <div className="Versus__TeamsSubTitle WhiteLabel">
                    Amistosos
                </div>
            </div>
            <TeamB />
            <InfoB />
            <TeamAwayB />
        </div>
        <div className="Versus__TeamsWrapper WhiteLabel">
            <Live />
            <Banner />
            <div className="Versus__TeamsTitleContainer WhiteLabel">
                <div className="Versus__TeamsTitle WhiteLabel">
                    Amistosos del Tri
                </div>
            </div>
            <div className="Versus__TeamsSubTitleContainer WhiteLabel">
                <div className="Versus__TeamsSubTitle WhiteLabel">
                    Amistosos
                </div>
            </div>
            <Team />
            <InfoC />
            <TeamAway />
        </div>
        <div className="Versus__TeamsWrapper WhiteLabel">
            <div className="Versus__TeamsTitleContainer WhiteLabel">
                <div className="Versus__TeamsTitle WhiteLabel">
                    Amistosos del Tri
                </div>
            </div>
            <div className="Versus__TeamsSubTitleContainer WhiteLabel">
                <div className="Versus__TeamsSubTitle WhiteLabel">
                    Amistosos
                </div>
            </div>
            <Team />
            <InfoD />
            <TeamAway />
        </div>
    </section>
);

export default Versus;
