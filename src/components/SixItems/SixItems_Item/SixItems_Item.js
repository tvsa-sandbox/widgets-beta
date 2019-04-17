import React from "react";
import { Link } from "gatsby";

const SixItems_Item = () => (
	<Link to="/" className="SixItems__Item WhiteLabel">
		<div className="SixItems__ItemThumbnail WhiteLabel">
			<div className="SixItems__ItemImageContainer WhiteLabel">
				<picture>
					<source media="(min-width: 0px) and (max-width: 414px)" srcSet="./static/aspect-ratio-images/16x9-414x233.jpg" />
					<source media="(min-width: 415px) and (max-width: 768px)" srcSet="./static/aspect-ratio-images/16x9-820x461.jpg" />
					<source media="(min-width: 769px)" srcSet="./static/aspect-ratio-images/16x9-414x233.jpg" />
					<img src="./static/aspect-ratio-images/16x9-414x233.jpg" alt="Test"
					 className="SixItems__ItemImage WhiteLabel" />
				</picture>
			</div>
			<div className="SixItems__ItemIcon Icn_Video WhiteLabel">
				<span className="Display WhiteLabel">
					Icon Play
				</span>
			</div>
			<div className="SixItems__ItemLabelContainer WhiteLabel">
				<span className="SixItems__ItemLabel WhiteLabel">
					La Rosa de Guadalupe
				</span>
			</div>
		</div>
		<div className="SixItems__ItemCaption WhiteLabel">
			<div className="SixItems__ItemInfoContainer WhiteLabel">
				<div className="SixItems__ItemInfo WhiteLabel">
					<span className="SixItems__ItemInfoType-Modifier WhiteLabel">
						Capítulo 115
					</span>
					<time className="SixItems__ItemInfoDate WhiteLabel" dateTime="2018-06-22T00:07:40.346Z">
						25 JUN. 2018
					</time>
					<time className="SixItems__ItemInfoTime WhiteLabel">
						10:10
					</time>
				</div>
			</div>
			<div className="SixItems__ItemTitleContainer WhiteLabel">
				<h3 className="SixItems__ItemTitle WhiteLabel">
					Capítulo 2 La Rosa de Guadalupe: El avión despega contra el viento, no a favor de él"
				</h3>
			</div>
		</div>
	</Link>
);

export default SixItems_Item;
