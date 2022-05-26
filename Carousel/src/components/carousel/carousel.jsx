import React, { useRef, useState, useEffect } from "react";
import "./carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
	const slideRef = useRef();
	const [currentSlide, setCurrentSlide] = useState(0);
	const [images, setImages] = useState([
		"img/1.jpg",
		"img/2.jpg",
		"img/3.jpg",
		"img/4.jpg",
		"img/5.jpg",
		"img/6.jpg",
		"img/7.jpg",
		"img/2.jpg",
	]);

	const moveRight = () => {
		if (images.length * 100 - 100 > currentSlide + 100) {
			setCurrentSlide(currentSlide + 100);
		}
		else {
			setCurrentSlide(0);
		}
	};
	const moveLeft = () => {
		if (currentSlide > 1) {
			setCurrentSlide(currentSlide - 100);
		}
		else {
			setCurrentSlide(images.length * 100 - 100);
		}
	};

	useEffect(() => {
		slideRef.current.style.transition = "all 0.5s ease-in-out";
		slideRef.current.style.transform = `translateX(-${currentSlide}%)`;
	}, [currentSlide]);

	return (
		<div className="carouselContainer">
			<nav className="titleContainer">Images Carousel</nav>
			<div className="contentContainer">
				<button type="button" onClick={moveLeft} className="slideBtn">
					<FontAwesomeIcon icon={faAngleLeft} />
				</button>
				<div className="slideBox">
					<ul className="slideList" ref={slideRef} >
						{images.map((item, idx) => (
							<li className="slideItem">
								<img key={idx} src={item} className="image" />
							</li>
						))}
					</ul>
				</div>
				<button type="button" onClick={moveRight} className="slideBtn">
					<FontAwesomeIcon icon={faAngleRight} />
				</button>
			</div>
		</div>
	);
};

export default Carousel;
