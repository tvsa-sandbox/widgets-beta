import React from "react";
import { Link } from "gatsby";

const VideoContainer_Caption = () => (
    <div className="VideoContainer__CaptionContainer WhiteLabel">
        <div className="VideoContainer__Caption WhiteLabel">
            <div className="VideoContainer__LabelContainer WhiteLabel">
                <span className="VideoContainer__Label WhiteLabel">Programas</span>
            </div>
            <div className="VideoContainer__DateContainer WhiteLabel">
                <p className="VideoContainer__Date WhiteLabel">Capítulo 30 - OCT 05, 2018</p>
            </div>
            <div className="VideoContainer__TitleContainer WhiteLabel">
                <h1 className="VideoContainer__Title WhiteLabel">
                    C30: Juan y Fernando llegan a los golpes
                </h1>
            </div>
            <div className="VideoContainer__DescriptionContainer WhiteLabel">
                <p className="VideoContainer__Description WhiteLabel">
                    Fernando amenaza a Sofía frente a Juan, lo que provoca un enfrentamiento entre ellos, Fernando muy enojado amenaza con matar a Sofía y a Juan ¡Revive el capítulo!
                </p>
            </div>
        </div>
        <div className="VideoContainer__ShareContainer WhiteLabel">
            <div className="VideoContainer__ShareBar WhiteLabel">
                <div className="VideoContainer__ShareBarDesktop WhiteLabel">
                    <Link className="VideoContainer__ShareBarLink Icn_Facebook WhiteLabel" href="https://www.facebook.com/GameTimeOf/" target="_blank" rel="noopener noreferrer" title="">
                        <p className="Display">Facebook</p>
                    </Link>
                    <Link className="VideoContainer__ShareBarLink Icn_Instagram WhiteLabel" href="https://www.instagram.com/gametimeof/" target="_blank" rel="noopener noreferrer" title="">
                        <p className="Display">Instagram</p>
                    </Link>
                    <Link className="VideoContainer__ShareBarLink Icn_Twitter WhiteLabel" href="https://twitter.com/@GameTimeOf" title="">
                        <p className="Display">
                            Twitter
                        </p>
                    </Link>
                </div>
                <button className="VideoContainer__ShareBarTrigger Icn_ArrowShare WhiteLabel" type="button">
                    <span className="VideoContainer__ShareBarTriggerText WhiteLabel">
                        Compartir
                    </span>
                </button>
            </div>
        </div>
    </div>
);

export default VideoContainer_Caption;
