import PropTypes from "prop-types";
import { StyledCard, StyledImg } from "./ImgCard.styled";
import { DFlex, PText, Holder } from "../../../styles/globalStyles";
import { font2 } from "../../../styles/colors";


ImgCard.propTypes = {
    src: PropTypes.string,
    w: PropTypes.string,
    h: PropTypes.string,
    icon: PropTypes.any,
    text: PropTypes.string
}

function ImgCard(props) {
    return (
        <StyledCard w={props.w} h={props.h}>
            <StyledImg src={props.src} w="100%" />
            <Holder h="20px" top="5px">
                <DFlex align="center">
                    {props.icon}
                    <PText color={font2} size="0.9rem" left="10px">{props.text}</PText>
                </DFlex>
            </Holder>
        </StyledCard>
    );
}

export default ImgCard;