import React from "react";
import Link from "gatsby-link";

const Share = () => (
    <section className="Share WhiteLabel">
        <div className="Share__Container WhiteLabel">
            <div className="Share__TitleContainer WhiteLabel">
                <h2 className="Share__Title WhiteLabel">
                    Comparte
                </h2>
            </div>
            <div className="Share__ShareDesktopContainer WhiteLabel">
                <div className="Share__ShareDesktop WhiteLabel">
                    <Link className="Share__ShareLink Icn_Facebook WhiteLabel" href="https://www.facebook.com/GameTimeOf/" target="_blank" title="">
                        <p className="Display">
                            facebook
                        </p>
                    </Link>
                    <Link className="Share__ShareLink Icn_Instagram WhiteLabel" href="https://www.instagram.com/gametimeof/"  target="_blank" title="">
                        <p className="Display">
                            instagram
                        </p>
                    </Link>
                    <Link className="Share__ShareLink Icn_Twitter WhiteLabel" href="https://twitter.com/@GameTimeOf" target="_blank" title="">
                        <p className="Display">
                            twitter
                        </p>
                    </Link>
                    <Link to="/" className="Share__ShareTap Icn_Email WhiteLabel">
                        <span className="Display">
                            Email
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    </section>
);

export default Share;
