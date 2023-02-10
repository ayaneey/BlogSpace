import React from "react";
import Logo from "../images/blog-space.png";

function Footer() {
	return (
		<footer>
			<img className="logo2" src={Logo} alt="BlogSpace Logo" />
			<span>
				Made with ❤️ and <b>React.js</b>
			</span>
		</footer>
	);
}

export default Footer;
