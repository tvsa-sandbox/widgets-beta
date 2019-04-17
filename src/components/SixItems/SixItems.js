import React from "react";
import { Link } from "gatsby";
import SixItemsItem from "./SixItems_Item";

const SixItems = () => (
	<section className="SixItems WhiteLabel">
		<div className="SixItems__ItemsContainer WhiteLabel">
			<SixItemsItem />
			<SixItemsItem />
			<SixItemsItem />
			<SixItemsItem />
			<SixItemsItem />
			<SixItemsItem />
		</div>
		<div className="SixItems__Ads WhiteLabel">
			<Link to ="/" className="Banner WhiteLabel" href="https://placeholder.com">
				<img src="http://via.placeholder.com/300x600" alt="imagen"/>
			</Link>
		</div>
		<div className="SixItems__ButtonContainer WhiteLabel">
			<button className="SixItems__Button WhiteLabel">
					Ver más
			</button>
		</div>
	</section>
);

export default SixItems;
