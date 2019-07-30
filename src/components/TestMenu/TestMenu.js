import React from "react";
import Link from "gatsby-link";

const TestMenu = () => (

<div className="TestMenu WhiteLabel">
	<input type="checkbox" id="TestMenu" />
	<label for="TestMenu" className="TestMenu__Container WhiteLabel">
		<span className="TestMenu__Line WhiteLabel"></span>
		<span className="TestMenu__Line WhiteLabel"></span>
		<span className="TestMenu__Line WhiteLabel"></span>
	</label>
	<nav className="TestMenu__Navegation WhiteLabel">
		<ul className="TestMenu__NavegationList WhiteLabel">
			<li className="TestMenu__LinkContainer WhiteLabel">
				<Link className="TestMenu__Link WhiteLabel" href="#" target="_blank" title="">Programas
				</Link>
			</li>
			<li className="TestMenu__LinkContainer WhiteLabel">
				<Link className="TestMenu__Link WhiteLabel" href="#" target="_blank" title="">Música
				</Link>
			</li>
			<li className="TestMenu__LinkContainer WhiteLabel">
				<Link className="TestMenu__Link WhiteLabel" href="#" target="_blank" title="">Entretenimiento
				</Link>
			</li>
			<li className="TestMenu__LinkContainer WhiteLabel">
				<Link className="TestMenu__Link WhiteLabel" href="#" target="_blank" title="">Urbano
				</Link>
			</li>
	        <li className="TestMenu__LinkContainer WhiteLabel">
				<Link className="TestMenu__Link WhiteLabel" href="#" target="_blank" title="">KPop
				</Link>
			</li>
		</ul>
	</nav>
</div>

);

export default TestMenu;
