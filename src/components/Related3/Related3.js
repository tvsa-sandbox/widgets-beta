import React from "react";
import { Link } from "gatsby";
import { withPrefix } from "gatsby";

const Related3 = () => (
	<section className="RelatedContent3 WhiteLabel">
		<div className="RelatedContent3__Thumbnail WhiteLabel">
			<div className="RelatedContent3__ImageContainer WhiteLabel">
				<picture>
					<source media="(min-width: 0px) and (max-width: 768px)" srcSet={withPrefix("/static/aspect-ratio-images/4x3-268x202.jpg")} />
					<source media="(min-width: 769px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-414x233.jpg")} />
					<img className="RelatedContent3__Image WhiteLabel" src={withPrefix("/static/aspect-ratio-images/4x3-268x202.jpg")} alt="Preview" />
				</picture>
			</div>
		</div>
		<div className="RelatedContent3__Text WhiteLabel">
			<div className="RelatedContent3__LabelContainer WhiteLabel">
				<span className="RelatedContent3__Label WhiteLabel">
					También te podrías interesar
					</span>
			</div>
			<div className="RelatedContent3__TitleContainer WhiteLabel">
				<h2 className="RelatedContent3__Title WhiteLabel">
					Irina Baeva cambia de look para trabajar con Sebastian Rulli
					</h2>
			</div>
			<div className="RelatedContent3__Share WhiteLabel">
				<ul className="RelatedContent3__ShareList WhiteLabel">
					<li className="RelatedContent3__ShareItem WhiteLabel">
						<Link to="/" className="RelatedContent1__ShareLink Icn_WhiteLabel WhiteLabel">
							<span className="Display">
								Facebook
                                    </span>
						</Link>
					</li>
					<li className="RelatedContent3__ShareItem WhiteLabel">
						<Link to="/" className="RelatedContent1__ShareLink Icn_WhiteLabel WhiteLabel">
							<span className="Display">
								Twitter
                                    </span>
						</Link>
					</li>

					<li className="RelatedContent3__ShareItem WhiteLabel">
						<Link to="/" className="RelatedContent1__ShareLink Icn_WhiteLabel WhiteLabel">
							<span className="Display">
								Mail
                                    </span>
						</Link>
					</li>
					<li className="RelatedContent3__ShareItem WhiteLabel">
						<Link to="/" className="RelatedContent1__ShareLink Icn_WhiteLabel WhiteLabel">
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

export default Related3;
