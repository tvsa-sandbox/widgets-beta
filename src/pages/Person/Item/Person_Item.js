import React from "react";
import Link from "gatsby-link";
import { withPrefix } from "gatsby-link";

const Person_Item = props => (
    <div className="Person__ThumbContainer WhiteLabel">
        <div className="Person__Card WhiteLabel">
            <div className="Person__Avatar WhiteLabel">
                <picture>
                    <img className="Person__Image WhiteLabel" src={withPrefix("/static/aspect-ratio-images/3x4-225x301.jpg")} alt="Test" />
                </picture>
                <div className="Person__ShareBar WhiteLabel">
                    <div className="Person__ShareBarDesktop WhiteLabel">
                        <Link className="Person__ShareBarLink Icn_Facebook WhiteLabel" href="https://www.facebook.com/GameTimeOf/" target="_blank" title="">
                            <p className="Display">
                                Facebook
                            </p>
                        </Link>
                        <Link className="Person__ShareBarLink Icn_Instagram WhiteLabel" href="https://www.instagram.com/gametimeof/">
                            <p className="Display">
                                Instagram
                            </p>
                        </Link>
                        <Link className="Person__ShareBarLink Icn_Instagram WhiteLabel" href="https://twitter.com/@GameTimeOf">
                            <p className="Display">
                                Instagram
                            </p>
                        </Link>
                        <Link className="Person__ShareBarLink Icn_Twitter WhiteLabel" href="https://twitter.com/@GameTimeOf">
                            <p className="Display">
                                Twitter
                            </p>
                        </Link>
                    </div>
                    <button className="Person__ShareBarTrigger Icn_ArrowShare WhiteLabel" type="button">
                        <span className="Person__ShareBarTriggerText WhiteLabel">
                            <p className="Display">
								Share Icon
                            </p>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default Person_Item;
