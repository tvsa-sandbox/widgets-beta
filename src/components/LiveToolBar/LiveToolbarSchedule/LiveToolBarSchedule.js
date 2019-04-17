import React from "react";
import { Link } from "gatsby";
import LiveToolBarBarContainer from "../LiveToolBarBarContainer";

const LiveToolBarSchedule = () => (
    <div className="LiveToolBar WhiteLabel">
        <div className="LiveToolBar__SwipeContainer WhiteLabel">
            <div className="LiveToolBar__Swipe WhiteLabel">
                <div className="LiveToolBar__SwipeTrack WhiteLabel">
                    <div className="LiveToolBar__SwipeCards WhiteLabel">
                        <div className="LiveToolBar__CardsContainer WhiteLabel">
                            <div className="LiveToolBar__Card WhiteLabel">
                                <time className="LiveToolBar__Card-Time WhiteLabel">
                                    19:30 - 20:30
                                </time>
                                <h3 className="LiveToolBar__Card-Show Whitelabel">
                                    La Rosa de Guadalupe
                                </h3>
                            </div>
                        </div>
                        <div className="LiveToolBar__CardsContainer WhiteLabel">
                            <div className="LiveToolBar__Card WhiteLabel">
                                <time className="LiveToolBar__Card-Time WhiteLabel">
                                    19:30 - 20:30
                                </time>
                                <h3 className="LiveToolBar__Card-Show Whitelabel">
                                    La Rosa de Guadalupe
                                </h3>
                            </div>
                        </div>
                        <div className="LiveToolBar__CardsContainer WhiteLabel">
                            <div className="LiveToolBar__Card WhiteLabel">
                                <time className="LiveToolBar__Card-Time WhiteLabel">
                                    19:30 - 20:30
                                </time>
                                <h3 className="LiveToolBar__Card-Show Whitelabel">
                                    La Rosa de Guadalupe
                                </h3>
                            </div>
                        </div>
                        <div className="LiveToolBar__CardsContainer WhiteLabel">
                            <div className="LiveToolBar__Card WhiteLabel">
                                <time className="LiveToolBar__Card-Time WhiteLabel">
                                    19:30 - 20:30
                                </time>
                                <h3 className="LiveToolBar__Card-Show Whitelabel">
                                    La Rosa de Guadalupe
                                </h3>
                            </div>
                        </div>
                        <div className="LiveToolBar__CardsContainer WhiteLabel">
                            <div className="LiveToolBar__Card WhiteLabel">
                                <time className="LiveToolBar__Card-Time WhiteLabel">
                                    19:30 - 20:30
                                </time>
                                <h3 className="LiveToolBar__Card-Show Whitelabel">
                                    La Rosa de Guadalupe
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="LiveToolBar__BarContainer WhiteLabel">
            <div className="LiveToolBar__CalendarContainer WhiteLabel">
                <button className="LiveToolBar__Calendar Icn_Calendar WhiteLabel">
                    <span className="Display">
                        Calendar
                    </span>
                </button>
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

export default LiveToolBarSchedule;
