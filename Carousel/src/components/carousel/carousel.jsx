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
		"img/1.jpg",
		"img/1.jpg",
		"img/1.jpg",
		"img/1.jpg",
		"img/1.jpg",
		"img/1.jpg",
		"img/1.jpg",
	]);

	const moveRight = () => {
		setCurrentSlide(currentSlide + 85);
	};
	const moveLeft = () => {
		setCurrentSlide(currentSlide - 85);
	};

	useEffect(() => {
		slideRef.current.style.transition = "all 0.5s ease-in-out";
		slideRef.current.style.transform = `translateX(-${currentSlide}vw)`;
	}, [currentSlide]);

	return (
		<div className="CarouselContainer">
			<nav className="TitleContainer">Images Carousel</nav>
			<div className="ContentContainer">
				<button type="button" onClick={moveLeft}>
					<FontAwesomeIcon icon={faAngleLeft} />
				</button>
				<div className="ImageContainer">
					<div className="SlideContainer" ref={slideRef}>
						{images.map((item, idx) => (
							<img key={idx} src={item} className="ImageItem" />
						))}
					</div>
				</div>
				<button type="button" onClick={moveRight}>
					<FontAwesomeIcon icon={faAngleRight} />
				</button>
			</div>
		</div>
	);
};

export default Carousel;
