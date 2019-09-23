import React from "react";
import { Link } from "gatsby";
import { withPrefix } from "gatsby";

const GalleryMosaic = () => (
    <section className="GalleryMosaic WhiteLabel">
        <div className="GalleryMosaic__BoxContainer WhiteLabel">
            <div className="GalleryMosaic__TitleContainer WhiteLabel">
                <p className="GalleryMosaic__Title WhiteLabel">
                    México vs Argentina
                </p>
            </div>
            <div className="GalleryMosaic__SliderContainer WhiteLabel">
                <div className="GalleryMosaic__SliderImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} />
                            <img className="GalleryMosaic__MiniImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} alt="Test" />
                    </picture>
                </div>
                <div className="GalleryMosaic__MiniImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} />
                            <img className="GalleryMosaic__MiniImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} alt="Test" />
                    </picture>
                </div>
                <div className="GalleryMosaic__MiniImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} />
                            <img className="GalleryMosaic__MiniImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} alt="Test" />
                    </picture>
                </div>
                <div className="GalleryMosaic__MiniImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} />
                            <img className="GalleryMosaic__MiniImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} alt="Test" />
                    </picture>
                </div>
                <div className="GalleryMosaic__MiniImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} />
                            <img className="GalleryMosaic__MiniImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} alt="Test" />
                    </picture>
                </div>
                <div className="GalleryMosaic__MiniImageContainer WhiteLabel">
                    <picture>
                        <source media="(min-width: 0px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} />
                            <img className="GalleryMosaic__MiniImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} alt="Test" />
                    </picture>
                </div>
                <Link to="/" className="GalleryMosaic__Mini WhiteLabel">
                    <div className="GalleryMosaic__MiniImageContainer WhiteLabel">
                        <picture>
                            <source media="(min-width: 0px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} />
                                <img className="GalleryMosaic__MiniImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-209x114.jpg")} alt="Test" />
                        </picture>
                    </div>
                </Link>
            </div>
        </div>
    </section>
);

export default GalleryMosaic;
