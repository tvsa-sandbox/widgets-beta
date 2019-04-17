import React from "react";
import { Link } from "gatsby";

const TvGuideBoldLiveShow = (props) => (
    <Link to="/" className="TvGuideBold__LiveShowContainer WhiteLabel" id={props.id}>
        <div className="TvGuideBold__LiveShow WhiteLabel">        
            <small className="TvGuideBold__LiveShow-Live WhiteLabel">
                Estás viendo
            </small>
            <h3 className="TvGuideBold__LiveShow-Title WhiteLabel">
                En Punto con Dennise Merker
            </h3>
            <time className="TvGuideBold__LiveShow-Time WhiteLabel">
                11:10
            </time>
            <button className="TvGuideBold__LiveButton WhiteLabel">
                <span className="TvGuideBold__LiveButtonText WhiteLabel">
                    Más Capítulos
                </span>
            </button>
        </div>
    </Link>
);

export default TvGuideBoldLiveShow;
