import { font2 } from "../../../styles/colors";
import { DFlex, H1Title, PText } from "../../../styles/globalStyles";
import { StyledCard } from "./IconCard.styled";
import PropTypes from "prop-types";

IconCard.propTypes = {
    icon: PropTypes.any,
    text: PropTypes.string,
    title: PropTypes.string
}

function IconCard(props) {
    return (
        <StyledCard>
            <DFlex justify="center" align="center" h="40px" bottom="10px">
                {props.icon}
            </DFlex>
            <H1Title align="center" color={font2}>{props.text}</H1Title>
            <PText align="center" color={font2}>{props.title}</PText>
        </StyledCard>
    );
}

export default IconCard;