import { styled } from "styled-components";

export const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const CarouselInner = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-${({ currentIndex }) => currentIndex * 100}%);
`;

export const CarouselSlide = styled.div`
  flex: 0 0 100%;
`;