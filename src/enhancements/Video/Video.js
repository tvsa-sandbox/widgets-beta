import React from "react";
import { Link } from "gatsby";
import { withPrefix } from "gatsby";

const Video = () => (

	<aside className="Video WhiteLabel">
		<div className="Video__ItemContainer WhiteLabel">
			<Link to="/" className="Video__ItemPlayer WhiteLabel">
				<div className="Video__ItemPlayerThumbnail WhiteLabel">
					<div className="Video__ItemPlayerImageContainer WhiteLabel">
						<picture>
							<source media="(min-width: 0px) and (max-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-414x233.jpg")} />
							<source media="(min-width: 415px) and (max-widht: 768px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-716x403.jpg")} />
							<source media="(min-width: 769px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic2-820x461.jpg")} />
							<img className="Video__ItemPlayerImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-414x233.jpg")} alt="Test" />
						</picture>
					</div>
					<div className="Video__ItemPlayerVideoContainer WhiteLabel">
						<div className="Video__ItemPLayerVideo WhiteLabel">
							{/* Video Player */}
						</div>
					</div>
					<div className="Video__ItemPlayerIconContainer WhiteLabel">
						<div className="Video__ItemPlayerIcon Icn_Video WhiteLabel">
							<span className="Display">
								Icn Play
							</span>
						</div>
					</div>
					<div className="Video__ItemPlayerTimeContainer WhiteLabel">
						<time className="Video__ItemPlayerTime WhiteLabel">
							22:55
						</time>
					</div>
					<div className="Video__ItemPlayerInfoContainer WhiteLabel">
						<span className="Video__ItemPlayerInfo">
							Video
						</span>
					</div>
						<div className="Video__ItemPlayerTitleContainer WhiteLabel">
							<h3 className="Video__ItemPlayerTitle WhiteLabel">
								Aseguran que José José no quiere ver a su hijo José Joel
							</h3>
						</div>
				</div>
			</Link>
		</div>
	</aside>

);

export default Video;
