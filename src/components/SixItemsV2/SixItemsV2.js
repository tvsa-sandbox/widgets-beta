import React from "react";
import { Link } from "gatsby";
import SixItemsV2Item from "./SixItemsV2_Item";

const SixItemsV2 = () => (
	<section className="SixItemsV2 WhiteLabel">
		<div className="SixItemsV2__ItemsContainer WhiteLabel">
			<SixItemsV2Item />
			<SixItemsV2Item />
			<SixItemsV2Item />
			<SixItemsV2Item />
			<SixItemsV2Item />
			<SixItemsV2Item />
		</div>
		<div className="SixItemsV2__Ads WhiteLabel">
			<Link to ="/" className="Banner WhiteLabel" href="https://placeholder.com">
				<img src="http://via.placeholder.com/300x600" alt="imagen"/>
			</Link>
		</div>
		<div className="SixItemsV2__ButtonContainer WhiteLabel">
			<button className="SixItemsV2__Button WhiteLabel">
					Ver más
			</button>
		</div>
	</section>
);

export default SixItemsV2;
