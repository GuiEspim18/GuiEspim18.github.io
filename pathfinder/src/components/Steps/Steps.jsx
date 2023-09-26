import { font2 } from "../../styles/colors";
import { DFlex, H1Title, Holder, Img, PText, } from "../../styles/globalStyles";
import PropTypes from "prop-types";
import YellowButton from "../../components/buttons/YellowButton/YellowButton";


Steps.propTypes = {
    img: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,
    button: PropTypes.string
};

function Steps(props) {
    return (
        <div>
            <DFlex align="center" justify="center" h="300px">
                <Img src={props.img} w="220px" mtop="20px" />
            </DFlex>
            <DFlex justify="center">
                <Holder w="90%" h="200px">
                    {props.title && <H1Title color={font2} align="center" top="50px" size="1.6rem">{props.title}</H1Title>}
                    {props.text && <PText color={font2} align="center" size="1rem" top="50px">{props.text}</PText>}
                    {props.button &&
                        <DFlex align="center" justify="center" h="100px">
                            <YellowButton w="80%" text={props.button} to="/login" />
                        </DFlex>
                    }
                </Holder>
            </DFlex>
        </div>
    );
}

export default Steps;