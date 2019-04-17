import React from "react";
import { Link } from "gatsby";

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
                    <Link className="Share__ShareLink Icn_Facebook WhiteLabel" to="https://www.facebook.com/GameTimeOf/" target="_blank" rel="noopener noreferrer" title="">
                        <p className="Display">
                            facebook
                        </p>
                    </Link>
                    <Link className="Share__ShareLink Icn_Instagram WhiteLabel" to="https://www.instagram.com/gametimeof/"  target="_blank" rel="noopener noreferrer" title="">
                        <p className="Display">
                            instagram
                        </p>
                    </Link>
                    <Link className="Share__ShareLink Icn_Twitter WhiteLabel" to="https://twitter.com/@GameTimeOf" target="_blank" rel="noopener noreferrer" title="">
                        <p className="Display">
                            twitter
                        </p>
                    </Link>
                    <button className="Share__ShareLink Icn_CopyLink WhiteLabel" type="button">
                        <p className="Display">
                            CopyLink
                        </p>
                        <div className="Share__ShareLink-TextContainer WhiteLabel">
                            <h4 className="Share__ShareLink-Text WhiteLabel">
                                Copiar Link
                            </h4>
                        </div>
                    </button>
                </div>
            </div>
            <button className="Share__ShareTrigger Icn_ArrowShare WhiteLabel" type="button">
                <span className="Share__ShareTriggerText WhiteLabel">
                    Comparte
                </span>
            </button>
            <div className="Share__ShareMobile WhiteLabel">
                <Link to="/" className="Share__ShareTap Icn_Twitter WhiteLabel">
                    <span className="Display">
                        Twitter
                    </span>
                </Link>
                <Link to="/" className="Share__ShareTap Icn_Facebook WhiteLabel">
                    <span className="Display">
                        Facebook
                    </span>
                </Link>
                <Link to="/" className="Share__ShareTap Icn_Email WhiteLabel">
                    <span className="Display">
                        Email
                    </span>
                </Link>
                <Link to="/" className="Share__ShareTap Icn_WhatsApp WhiteLabel">
                    <span className="Display">
                        Whatsapp
                    </span>
                </Link>
                <Link to="/" className="Share__ShareTap Icn_CopyLink WhiteLabel">
                    <span className="Display">
                        CopyLink
                    </span>
                </Link>
            </div>
        </div>
        <div className="Share__ShareCommentsContainer WhiteLabel">
            <button className="Share__ShareComments Icn_Comment WhiteLabel">
                <span className="Display">
                    Comment
                </span>
            </button>
            <div className="Share__ShareCommentsText WhiteLabel">
                Comenta
            </div>
        </div>
    </section>
);

export default Share;
