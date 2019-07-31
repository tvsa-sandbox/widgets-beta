import React from "react";
import { Link } from "gatsby";

const Related1 = () => (
    <section className="RelatedContentContainer WhiteLabel">
        <div className="RelatedContent1 WhiteLabel">
            <div className="RelatedContent1__Container WhiteLabel">
                <div className="RelatedContent1__Thumbnail WhiteLabel">
                    <div className="RelatedContent1__ImageContainer WhiteLabel">
                        <picture>
                            <img className="RelatedContent1__Image WhiteLabel" src="./static/aspect-ratio-images/1x1-158x158.jpg" alt="ImageEvent" />
                        </picture>
                    </div>
                </div>
                <div className="RelatedContent1__Text WhiteLabel">
                    <div className="RelatedContent1__LabelContainer WhiteLabel">
                        <span className="RelatedContent1__Label WhiteLabel">
                            Relacionado
                            </span>
                    </div>
                    <div className="RelatedContent1__TitleContainer WhiteLabel">
                        <h2 className="RelatedContent1__Title WhiteLabel">
                            Sebastián Rulli se convertirá en “El Último Dragón”
                            </h2>
                    </div>
                    <div className="RelatedContent1__Share WhiteLabel">
                        <ul className="RelatedContent1__ShareList WhiteLabel">
                            <li className="RelatedContent1__ShareItem WhiteLabel">
                                <Link to="/" className="RelatedContent1__ShareLink Icn_WhiteLabel WhiteLabel">
                                    <span className="Display">
                                        Facebook
                                        </span>
                                </Link>
                            </li>
                            <li className="RelatedContent1__ShareItem WhiteLabel">
                                <Link to="/" className="RelatedContent1__ShareLink Icn_WhiteLabel WhiteLabel">
                                    <span className="Display">
                                        Twitter
                                        </span>
                                </Link>
                            </li>
                            <li className="RelatedContent1__ShareItem WhiteLabel">
                                <Link to="/" className="RelatedContent1__ShareLink Icn_WhiteLabel WhiteLabel">
                                    <span className="Display">
                                        Mail
                                        </span>
                                </Link>
                            </li>
                            <li className="RelatedContent1__ShareItem WhiteLabel">
                                <Link to="/" className="RelatedContent1__ShareLink Icn_WhiteLabel WhiteLabel">
                                    <span className="Display">
                                        WhatsApp
                                        </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="RelatedContent1__ButtonContainer WhiteLabel">
                <Link to="/" type="button" name="button" className="RelatedContent1__Button Icn_WhiteLabel WhiteLabel">
                    <span className="Display">
                        Arrow Next
                    </span>
                </Link>
            </div>
        </div>
    </section>
);

export default Related1;
