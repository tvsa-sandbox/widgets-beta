import React from "react";
import Link from "gatsby-link";

const SocialNetworks = () => (

<nav className="SocialNetworks WhiteLabel">
  	<input type="checkbox" href="#" className="SocialNetworks-Open WhiteLabel" name="SocialNetworks-Open" id="SocialNetworks-Open"/>
  	<label className="SocialNetworks__Open-button WhiteLabel" for="SocialNetworks-Open">
	    <Link className="SocialNetworks__Share Icn_Share WhiteLabel" href="#" target="_blank" title="">
			<span className="Display">
			</span>
		</Link>
  	</label>
	<Link className="SocialNetworks__LinkSocial Icn_Facebook WhiteLabel"  href="https://www.facebook.com/GameTimeOf/" target="_blank" title="">
 		<span className="Display">
 		</span>
 	</Link>
    <Link className="SocialNetworks__LinkSocial Icn_Instagram WhiteLabel" href="https://www.instagram.com/gametimeof/"  target="_blank" title="">
		<span className="Display">
		</span>
	</Link>
	<Link className="SocialNetworks__LinkSocial Icn_Twitter WhiteLabel" href="https://twitter.com/@GameTimeOf" target="_blank" title="">
		<span className="Display">
		</span>
	</Link>
</nav>

);

export default SocialNetworks;
