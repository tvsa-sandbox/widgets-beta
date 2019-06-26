import React from "react";

const Positions_List = () => (    
            <div className="Positions__ListElement WhiteLabel">
                <div className="Positions__ListNumberContainer WhiteLabel">
                    <span className="Positions__ListNumber WhiteLabel">
                        # 1
                    </span>
                </div>
                <div className="Positions__ListImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px)" srcSet="./static/aspect-ratio-images/1x1-220x220.jpg" />
                        <img className="Positions__ListImage WhiteLabel" src="./static/aspect-ratio-images/1x1-220x220.jpg" alt="Test" />
                    </picture>
                </div>
                <div className="Positions__ListTitleContainer WhiteLabel" ds-title="Divi Soup">
                    <h3 className="Positions__ListTitle WhiteLabel">
                        Pumas
                    </h3>
                </div>
                <div className="Positions__ListInfoContainer-First WhiteLabel">
                    <span className="Positions__ListInfo WhiteLabel">
                        16
                    </span>
                </div>
                <div className="Positions__ListInfoContainer-First WhiteLabel">
                    <span className="Positions__ListInfo WhiteLabel">
                        12
                    </span>
                </div>
                <div className="Positions__ListInfoContainer-First WhiteLabel">
                    <span className="Positions__ListInfo WhiteLabel">
                        2
                    </span>
                </div>
                <div className="Positions__ListInfoContainer-First WhiteLabel">
                    <span className="Positions__ListInfo WhiteLabel">
                        2
                    </span>
                </div>
                <div className="Positions__ListInfoContainer WhiteLabel">
                    <span className="Positions__ListInfo WhiteLabel">
                        39
                    </span>
                </div>
                <div className="Positions__ListInfoContainer WhiteLabel">
                    <span className="Positions__ListInfo WhiteLabel">
                        13
                    </span>
                </div>
                <div className="Positions__ListInfoContainer WhiteLabel">
                    <span className="Positions__ListInfo WhiteLabel">
                        26
                    </span>
                </div>
                <div className="Positions__ListInfoContainer-First WhiteLabel">
                    <span className="Positions__ListInfo WhiteLabel">
                        38
                    </span>
                </div>
            </div>
);

export default Positions_List;
