import React from "react";
import { withPrefix } from "gatsby";
import DataLightList from "./DataLight_List/DataLight_List";
import DataLightListB from "./DataLight_ListB/DataLight_ListB";
import DataLightListC from "./DataLight_ListC/DataLight_ListC";
import DataLightListD from "./DataLight_ListD/DataLight_ListD";
import DataLightListE from "./DataLight_ListE/DataLight_ListE";
import DataLightInfo from "./DataLight_Info/DataLight_Info";

const DataLight = () => (
    <section className="DataLight WhiteLabel">
		<div className="DataLight__Container WhiteLabel">
            <div className="DataLight__GraphicContainer WhiteLabel">
                <picture>
                    <source media="(min-width:0px) and (max-width:414px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic3-209x114.png")} />
                    <source media="(min-width:415px) and (max-width:768px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic3-209x114.png")} />
                    <source media="(min-width:769px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic3-209x114.png")} />
                    <img className="DataLight__Graphic WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-Graphic3-209x114.png")} alt="" />
                </picture>
            </div>
	        <div className="DataLight__TitleContainer WhiteLabel">
	            <h2 className="DataLight__Title WhiteLabel">
	                Liga MX Femenil Clausura 2019
	            </h2>
	        </div>
        </div>
	    <div className="DataLight__TableContainer WhiteLabel">
            <div className="DataLight__TextContainer WhiteLabel">
                <h2 className="DataLight__Text WhiteLabel">
                    Posiciones
                </h2>
    	    </div>
            <div className="DataLight__InfoContainer WhiteLabel">
                <DataLightInfo />
            </div>
            <div className="DataLight__ListContainer WhiteLabel">
                <DataLightList />
                <DataLightListB />
                <DataLightListC />
                <DataLightListD />
                <DataLightListE />
                <DataLightList />
                <DataLightListB />
                <DataLightListC />
                <DataLightListD />
            </div>
        </div>
    </section>
);

export default DataLight;
