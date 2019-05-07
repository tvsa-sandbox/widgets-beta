import React from "react";
import { withPrefix } from "gatsby";
import Positions_List from "./Positions_List/Positions_List";
import Positions_Info from "./Positions_Info/Positions_Info";

const Positions = () => (
    <section className="Positions WhiteLabel">
		<div className="Positions__Container WhiteLabel">
            <div className="Positions__GraphicContainer WhiteLabel">
                <picture>
                    <source media="(min-width:0px) and (max-width:414px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic3-209x114.png")} />
                    <source media="(min-width:415px) and (max-width:768px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic3-209x114.png")} />
                    <source media="(min-width:769px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic3-209x114.png")} />
                    <img className="Positions__Graphic WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-Graphic3-209x114.png")} alt="" />
                </picture>
            </div>
	        <div className="Positions__TitleContainer WhiteLabel">
	            <h2 className="Positions__Title WhiteLabel">
	                Liga MX Femenil Clausura 2019
	            </h2>
	        </div>
        </div>
	        <div className="Positions__TableContainer WhiteLabel">
                <div className="Positions__TextContainer WhiteLabel">
                    <h2 className="Positions__Text WhiteLabel">
                        Posiciones
                    </h2>
    	        </div>
                <div className="Positions__InfoContainer WhiteLabel">
                    <Positions_Info />
                </div>
                <div className="Positions__ListContainer WhiteLabel">
                    <Positions_List />
                    <Positions_List />
                    <Positions_List />
                    <Positions_List />
                    <Positions_List />
                </div>
            </div>
    </section>
);

export default Positions;
