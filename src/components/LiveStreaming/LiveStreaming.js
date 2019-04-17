import React from "react";
import Newsletter from "../Newsletter/Newsletter";
import Share from "../Share/Share";
import TvGuideBold from "../TvGuideBold/TvGuideBold";

const LiveStreaming = () => (
    <section className="LiveStreaming WhiteLabel">
        <div className="LiveStreaming__Container WhiteLabel">
            <div className="LiveStreaming__VideoContainer WhiteLabel">
                <div className="LiveStreaming__VideoLive WhiteLabel">
                    {/* Video Player */}
                </div>
            </div>
            <div className="LiveStreaming__SideBar WhiteLabel">
                <div className="LiveStreaming__Newsletter WhiteLabel">
                    <Newsletter />
                </div>
                <div className="LiveStreaming__Share WhiteLabel">
                    <Share />
                </div>
                <div className="LiveStreaming__AdsContainer WhiteLabel">
                        Publicidad
                    <div className="Banner WhiteLabel">
                        <img src="http://via.placeholder.com/300x250" alt=""/>
                    </div>
                </div>
            </div>
                <TvGuideBold />
        </div>
    </section>
);

export default LiveStreaming;
