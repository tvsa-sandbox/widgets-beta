import React from "react";
import { Link } from "gatsby";
import LiveToolBarBarContainer from "../LiveToolBarBarContainer";

const LiveToolBarShare = () => (
    <div className="LiveToolBar WhiteLabel">
        <div className="LiveToolBar__BarContainer WhiteLabel">
            <div className="LiveToolBar__ShareBar WhiteLabel">
                <div className="LiveToolBar__ShareBarDesktop WhiteLabel">
                    <Link to="/" className="LiveToolBar__ShareBarLink Icn_Twitter WhiteLabel">
                        <span className="Display">
                            Twitter
                        </span>
                    </Link>
                    <Link to="/" className="LiveToolBar__ShareBarLink Icn_Facebook WhiteLabel">
                        <span className="Display">
                            Facebook
                        </span>
                    </Link>
                    <Link to="/" className="LiveToolBar__ShareBarLink Icn_WhatsApp WhiteLabel">
                        <span className="Display">
                            WhatsApp
                        </span>
                    </Link>
                </div>
                <button className="LiveToolBar__ShareBarTrigger Icn_ArrowShare WhiteLabel">
                    <span className="LiveToolBar__ShareBarTriggerText WhiteLabel">
                        Compartir
                    </span>
                </button>
                <div className="LiveToolBar__ShareBarMobile WhiteLabel">
                    <Link to="/" className="LiveToolBar__ShareBarTap Icn_Facebook WhiteLabel">
                        <span className="Display">
                            Facebook
                        </span>
                    </Link>
                    <Link to="/" className="LiveToolBar__ShareBarTap Icn_Twitter WhiteLabel">
                        <span className="Display">
                            Twitter
                        </span>
                    </Link>
                    <Link to="/" className="LiveToolBar__ShareBarTap Icn_WhatsApp WhiteLabel">
                        <span className="Display">
                            WhatsApp
                        </span>
                    </Link>
                </div>
            </div>
            <LiveToolBarBarContainer />
            <div className="LiveToolBar__IconContainer WhiteLabel">
                <Link to="/" className="LiveToolBar__Icon Icn_Video WhiteLabel">
                    <span className="Display">
                        Video
                    </span>
                </Link>
            </div>
        </div>
    </div>
);

export default LiveToolBarShare;
