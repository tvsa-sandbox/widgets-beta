import React from "react";
import { Link } from "gatsby";
import { withPrefix } from "gatsby";

const Related2 = () => (
    <section className="RelatedContent2 WhiteLabel">
        <div className="RelatedContent2__Thumbnail WhiteLabel">
            <div className="RelatedContent2__ImageContainer WhiteLabel">
                <picture>
                    <source media="(min-width: 0px) and (max-width: 768px)" srcSet={withPrefix("/static/aspect-ratio-images/1x1-414x414.jpg")} />
                    <source media="(min-width: 769px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-414x233.jpg")} />
                    <img className="RelatedContent2__Image WhiteLabel" src={withPrefix("/static/aspect-ratio-images/1x1-414x414.jpg")} alt="Preview" />
                </picture>
            </div>
        </div>
        <div className="RelatedContent2__Text WhiteLabel">
            <div className="RelatedContent2__LabelContainer WhiteLabel">
                <span className="RelatedContent2__Label WhiteLabel">
                    Relacionado
            </span>
            </div>
            <div className="RelatedContent2__TitleContainer WhiteLabel">
                <h2 className="RelatedContent2__Title WhiteLabel">
                    Irina Baeva cambia de look para trabajar con Sebastian Rulli
                </h2>
            </div>
            <div className="RelatedContent2__ButtonContainer WhiteLabel">
                <Link to="/" type="button" name="button" className="RelatedContent2__Button WhiteLabel">
                    <span>
                        Ver más
                         </span>
                </Link>
            </div>
            <div className="RelatedContent2__Share WhiteLabel">
                <ul className="RelatedContent2__ShareList WhiteLabel">
                    <li className="RelatedContent2__ShareItem WhiteLabel">
                        <Link to="/" className="RelatedContent1__ShareLink Icn_WhiteLabel WhiteLabel">
                            <span className="Display">
                                Facebook
                                    </span>
                        </Link>
                    </li>
                    <li className="RelatedContent2__ShareItem WhiteLabel">
                        <Link to="/" className="RelatedContent1__ShareLink Icn_WhiteLabel WhiteLabel">
                            <span className="Display">
                                Twitter
                                    </span>
                        </Link>
                    </li>

                    <li className="RelatedContent2__ShareItem WhiteLabel">
                        <Link to="/" className="RelatedContent1__ShareLink Icn_WhiteLabel WhiteLabel">
                            <span className="Display">
                                Mail
                                    </span>
                        </Link>
                    </li>
                    <li className="RelatedContent2__ShareItem WhiteLabel">
                        <Link to="/" className="RelatedContent1__ShareLink Icn_WhiteLabel  whatsapp WhiteLabel">
                            <span className="Display">
                                WhatsApp
                                    </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </section>

);

export default Related2;
