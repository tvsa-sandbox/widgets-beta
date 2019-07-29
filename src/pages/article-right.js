import React from "react";
import Link from "gatsby-link";
import { withPrefix } from "gatsby-link";

const ArticleRight = () => (
    <section className="Page">

            <section className="ArticleRight WhiteLabel">
                <div className="ArticleRight__Container WhiteLabel">
                    <div className="ArticleRight__LeftContent WhiteLabel">

                            <div className="ArticleRight__Thumbnail WhiteLabel">
                                <div className="ArticleRight__ImageContainer WhiteLabel">
                                    <picture>
                                        <source media="(min-width: 0px) and (max-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-414x233.jpg")} />
                                        <source media="(min-width: 415px) and (max-width: 768px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-716x403.jpg")} />
                                        <source media="(min-width: 769px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-820x461.jpg")} />
                                        <img className="ArticleRight__Image WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-414x233.jpg")} alt="Prueba" />
                                    </picture>
                                </div>
                            </div>
                            <div className="ArticleRight__InfoContainer WhiteLabel">
                                <div className="ArticleRight__ShareContainer WhiteLabel">
                                    <div className="ArticleRight__Share WhiteLabel">
                                        <a className="ArticleRight__ShareIcon Icn_Facebook WhiteLabel" href="https://www.facebook.com/" target="_blank" title=""><p className="Display">facebook</p></a>
                                        <a className="ArticleRight__ShareIcon Icn_Twitter WhiteLabel" href="https://www.facebook.com/" target="_blank" title=""><p className="Display">twitter</p></a>
                                        <a className="ArticleRight__ShareIcon Icn_Instagram WhiteLabel" href="https://www.facebook.com/" target="_blank" title=""><p className="Display">instagram</p></a>
                                    </div>
                                </div>
                                <div className="ArticleRight__LabelContainer WhiteLabel">
                                    <span className="ArticleRight__Label WhiteLabel">
                                        LAS ESTRELLAS
                                    </span>
                                </div>
                                <div className="ArticleRight__TitleContainer WhiteLabel">
                                    <h1 className="ArticleRight__Title WhiteLabel">
                                        Justin Bieber y otros famosos que sufrieron problemas psiquiátricos y depresión
                                    </h1>
                                </div>
                                <div className="ArticleRight__DescriptionContainer WhiteLabel">
                                    <span className="ArticleRight__Description WhiteLabel">
                                        Justin Bieber y otros famosos que sufrieron problemas psiquiátricos y depresión. En el mundo tecnológico actual, todos utilizamos o formamos parte, de una u otra manera, de diferentes.
                                    </span>
                                </div>
                            </div>

                    </div>
                    <aside className="ArticleRight__RightContent WhiteLabel">
                        <div className="ArticleRight__Text WhiteLabel">
                            <h2 className="ArticleRight__Subtitle WhiteLabel">Gal Gadot is an Israeli actress</h2>
                            <p>Gal Gadot is an Israeli actress, singer, martial artist, and model. She was born in Rosh Ha'ayin, Israel, to a Jewish family. Her parents are Irit, a teacher, and Michael, an engineer, who is a sixth-generation Israeli. She served in the IDF for two years, and won the Miss Israel title in 2004.</p>
                            <p>Gal began modeling in the late 2000s, and made her film debut in the fourth film of the Fast and Furious franchise, Fast & Furious (2009), as Gisele. Her role was expanded in the sequels Fast Five (2011) and Fast & Furious 6 (2013), in which her character was romantically linked to Han Seoul-Oh (Sung Kang). In the films, Gal performed her own stunts. She also appeared in the 2010 films Date Night (2010) and Knight and Day (2010).</p>
                            <p><img className="image_prueba" src="http://alternativo.mx/wp-content/uploads/2016/04/gal-gadot.jpg" alt="Italian Trulli" /></p>
                            <p>In early December 2013, Gal was cast as Wonder Woman in the superhero team-up film Batman v Superman: Dawn of Justice (2016), and filming began in 2014 for a March 2016 release. Gadot received swordsmanship, Kung Fu kickboxing, Capoeira and Brazilian Jiu-Jitsu training in preparation for the role. As a result, her performance as the superhero, which is the first time for the character on film, was hailed as one of the best parts of the otherwise poorly-received film. The film is part of the DC Extended Universe, and Gadot plays the role again in the solo film Wonder Woman (2017), which was received very positively, and superhero team-up Justice League (2017).</p>
                            <p>Gal is a motorcycle enthusiast, and owns a black 2006 Ducati Monster-S2R. She has been married to Israeli businessman Yaron Versano since September 28, 2008. They have two daughters.</p>
                        </div>
                    </aside>
                </div>
            </section>

    </section>
);

export default ArticleRight;
