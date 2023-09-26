import { useNavigate } from "react-router-dom";
import { PText } from "../../../styles/globalStyles";
import { ButtonBody } from "./YellowButton.styled";
import PropTypes from "prop-types";

YellowButton.propTypes = {
    text: PropTypes.string,
    w: PropTypes.string,
    to: PropTypes.string,
    top: PropTypes.string,
    bottom: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string
}

function YellowButton(props) {

    const navigate = useNavigate()

    const redirect = () => {
        console.log(props)
        if (props.to) {
            if (props.to.length > 0) navigate(props.to);
        }
    }

    return (
        <ButtonBody w={props.w} top={props.top} left={props.left} right={props.right} bottom={props.bottom} onClick={redirect}>
            <PText>{props.text}</PText>
        </ButtonBody>
    );
}

export default YellowButton;