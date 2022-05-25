import React from "react";
import "./carousel.css";

const Carousel = () => {
	return (
		<div className="MainContainer">
			<nav className="TitleContainer">Images Carousel</nav>
			<div className="ContentContainer">
				<button></button>
				<div className="ImageContainer">
					<img src="img/1.jpg" alt="1" />
					<img src="img/2.jpg" alt="2" />
					<img src="img/3.jpg" alt="3" />
					<img src="img/4.jpg" alt="4" />
					<img src="img/5.jpg" alt="5" />
					<img src="img/6.jpg" alt="6" />
					<img src="img/7.jpg" alt="7" />
				</div>
				<button></button>
			</div>
		</div>
	);
};

export default Carousel;
