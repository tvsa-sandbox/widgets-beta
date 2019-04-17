import React from "react";
import { Link } from "gatsby";
import { withPrefix } from "gatsby";

const LeadVideo = () => (
	<aside className="LeadVideo WhiteLabel">
		<div className="LeadVideo__ItemContainer WhiteLabel">
			<Link to="/" className="LeadVideo__ItemPlayer WhiteLabel">
				<div className="LeadVideo__ItemPlayerThumbnail WhiteLabel">
					<div className="LeadVideo__ItemPlayerImageContainer WhiteLabel">
						<picture>
							<source media="(min-width: 0px) and (max-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-414x233.jpg")} />
							<source media="(min-width: 415px) and (max-widht: 768px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-716x403.jpg")} />
							<source media="(min-width: 769px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic2-820x461.jpg")} />
							<img className="LeadVideo__ItemPlayerImage WhiteLabel" src={withPrefix("/static/aspect-ratio-images/16x9-Graphic1-414x233.jpg")} alt="Test" />
						</picture>
					</div>
					<div className="LeadVideo__ItemPlayerVideoContainer WhiteLabel">
						<div className="LeadVideo__ItemPLayerVideo WhiteLabel">
							{/* LeadVideo Player */}
						</div>
					</div>
					<div className="LeadVideo__ItemPlayerIconContainer WhiteLabel">
						<div className="LeadVideo__ItemPlayerIcon Icn_Video WhiteLabel">
							<span className="Display">
								Icn Play
							</span>
						</div>
					</div>
					<div className="LeadVideo__ItemPlayerTimeContainer WhiteLabel">
						<time className="LeadVideo__ItemPlayerTime WhiteLabel">
							22:55
						</time>
					</div>
					<div className="LeadVideo__ItemPlayerInfoContainer WhiteLabel">
						<span className="LeadVideo__ItemPlayerInfo">
							LeadVideo
						</span>
					</div>
						<div className="LeadVideo__ItemTitleContainer WhiteLabel">
							<h3 className="LeadVideo__ItemTitle WhiteLabel">
								Aseguran que José José no quiere ver a su hijo José Joel
							</h3>
						</div>
				</div>
			</Link>
		</div>
	</aside>
);

export default LeadVideo;
