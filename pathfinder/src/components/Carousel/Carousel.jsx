import { useState } from "react";
import SelectBadge from "../../components/badges/SelectBadge/SelectBadge";
import { CarouselContainer, CarouselInner, CarouselSlide } from "./Carousel.styled";
import { DFlex } from "../../styles/globalStyles";
import PropTypes from "prop-types";

Carousel.propTypes = {
    slides: PropTypes.array,
    badges: PropTypes.bool
};

function Carousel(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = props.slides;
    let touchStartX = 0;
    const badges = props.badges === false ? props.badges : true;

    const handleTouchStart = (e) => {
        touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const deltaX = touchStartX - touchEndX;

        if (deltaX > 50 && currentIndex < slides.length - 1) {
            setCurrentIndex(currentIndex + 1); // Swipe left
        } else if (deltaX < -50 && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1); // Swipe right
        }
    };

    return (
        <CarouselContainer>
            <CarouselInner currentIndex={currentIndex} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                {slides.map((step, index) => (
                    <CarouselSlide key={index}>
                        {slides[index]}
                    </CarouselSlide>
                ))}
            </CarouselInner>
            {badges && <DFlex h="30px" align="center" justify="center" top="10px">
                <SelectBadge step={currentIndex} quantity={slides.length} changeSlide={setCurrentIndex} />
            </DFlex>}
        </CarouselContainer>
    );
}

export default Carousel;