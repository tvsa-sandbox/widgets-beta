import React from "react";
import { Link } from "gatsby";

const TvGuideBoldPostShow = (props) => (
    <Link to="/" className="TvGuideBold__PostShowContainer WhiteLabel" id={props.id}>
        <div className="TvGuideBold__PostLiveShow WhiteLabel">        
            <small className="TvGuideBold__PostLiveShow-Text WhiteLabel">
                A Continuación
            </small>
            <h3 className="TvGuideBold__PostLiveShow-Title WhiteLabel">
                Noticieros Televisa Deportes
            </h3>
            <time className="TvGuideBold__PostLiveShow-Time WhiteLabel">
                11:10
            </time>
            <button className="TvGuideBold__PostLiveButton WhiteLabel">
                <span className="TvGuideBold__PostLiveButtonText WhiteLabel">
                    Más Capítulos
                </span>
            </button>
        </div>
    </Link>
);

export default TvGuideBoldPostShow;
