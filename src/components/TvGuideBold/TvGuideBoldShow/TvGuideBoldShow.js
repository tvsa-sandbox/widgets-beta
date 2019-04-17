import React from "react";
import { Link } from "gatsby";

const TvGuideBoldShow = (props) => (
    <Link to="/" className="TvGuideBold__ShowContainer WhiteLabel" id={props.id}>
        <div className="TvGuideBold__Show WhiteLabel">        
            <small className="TvGuideBold__Show-Text WhiteLabel">
                No te pierdas
            </small>
            <h3 className="TvGuideBold__Show-Title WhiteLabel">
                Noticieros Televisa Deportes
            </h3>
            <time className="TvGuideBold__Show-Time WhiteLabel">
                11:10
            </time>
            <button className="TvGuideBold__ShowButton WhiteLabel">
                <span className="TvGuideBold__ShowButtonText WhiteLabel">
                    Más Capítulos
                </span>
            </button>
        </div>
    </Link>
);

export default TvGuideBoldShow;
