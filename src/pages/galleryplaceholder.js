import React from "react";
import PlaceholderLay from "../layouts/placeholderlay";

const ArticlePlaceholder = () => {
    let bar = 20;
    return (
    <PlaceholderLay>
        <section className="Page">
            <div className="Placeholder__LoadContainer">
                <div className="Placeholder__Load" style={{ width: `${bar}vw` }}></div>
            </div>
            <section className="PageContent__Container WhiteLabel">
                <section className="PageContent__BodyFull WhiteLabel">
                    <div className="Placeholder__Title WhiteLabel"></div>
                    <div className="Placeholder__SubTitle WhiteLabel">
                    </div>
                    <div className="Article__CreditsContainer WhiteLabel">
                        <span className="Placeholder__Author WhiteLabel"> </span>
                        <span className="Placeholder__Date WhiteLabel"></span>
                        <div className="Placeholder__ShareBar WhiteLabel">

                        </div>
                    </div>
                </section>
            </section>
            <section className="PageContent__Container WhiteLabel">
                <section className="PageContent__Body WhiteLabel">
                        <div className="Placeholder__Lead WhiteLabel"></div>
                </section>
                <section className="PageContent__Aside WhiteLabel">
                    <div className="Placeholder__Most WhiteLabel"></div>
                </section>
            </section>
            <section className="PageContent__Container WhiteLabel">
                <section className="PageContent__BodyFull WhiteLabel">
                    <div className="Placeholder__Carrousel WhiteLabel">
                        <div className="Placeholder__Card WhiteLabel">
                            <div className="Placeholder__Img WhiteLabel" />
                            <div className="Placeholder__Title WhiteLabel" />
                            <div className="Placeholder__SubTitle WhiteLabel" />
                            <div className="Placeholder__Paragraph WhiteLabel" />
                            <div className="Placeholder__Paragraph WhiteLabel" />
                            <div className="Placeholder__Paragraph WhiteLabel" />
                        </div>
                        <div className="Placeholder__Card WhiteLabel">
                            <div className="Placeholder__Img WhiteLabel" />
                            <div className="Placeholder__Title WhiteLabel" />
                            <div className="Placeholder__SubTitle WhiteLabel" />
                            <div className="Placeholder__Paragraph WhiteLabel" />
                            <div className="Placeholder__Paragraph WhiteLabel" />
                            <div className="Placeholder__Paragraph WhiteLabel" />
                        </div>
                        <div className="Placeholder__Card WhiteLabel">
                            <div className="Placeholder__Img WhiteLabel" />
                            <div className="Placeholder__Title WhiteLabel" />
                            <div className="Placeholder__SubTitle WhiteLabel" />
                            <div className="Placeholder__Paragraph WhiteLabel" />
                            <div className="Placeholder__Paragraph WhiteLabel" />
                            <div className="Placeholder__Paragraph WhiteLabel" />
                        </div>
                        <div className="Placeholder__Card WhiteLabel">
                            <div className="Placeholder__Img WhiteLabel" />
                            <div className="Placeholder__Title WhiteLabel" />
                            <div className="Placeholder__SubTitle WhiteLabel" />
                            <div className="Placeholder__Paragraph WhiteLabel" />
                            <div className="Placeholder__Paragraph WhiteLabel" />
                            <div className="Placeholder__Paragraph WhiteLabel" />
                        </div>
                        <div className="Placeholder__Card WhiteLabel">
                            <div className="Placeholder__Img WhiteLabel" />
                            <div className="Placeholder__Title WhiteLabel" />
                            <div className="Placeholder__SubTitle WhiteLabel" />
                            <div className="Placeholder__Paragraph WhiteLabel" />
                            <div className="Placeholder__Paragraph WhiteLabel" />
                            <div className="Placeholder__Paragraph WhiteLabel" />
                        </div>
                        <div className="Placeholder__Card WhiteLabel">
                            <div className="Placeholder__Img WhiteLabel" />
                            <div className="Placeholder__Title WhiteLabel" />
                            <div className="Placeholder__SubTitle WhiteLabel" />
                            <div className="Placeholder__Paragraph WhiteLabel" />
                            <div className="Placeholder__Paragraph WhiteLabel" />
                            <div className="Placeholder__Paragraph WhiteLabel" />
                        </div>
                    </div>
                </section>
            </section>
        </section>
    </PlaceholderLay>
    );
};

export default ArticlePlaceholder;
