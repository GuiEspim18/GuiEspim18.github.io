import { Input } from '@mui/base/Input';
import PropTypes from "prop-types";
import { Body, CustomInput } from '../../../styles/globalStyles';
import { TransparentInput } from "../../../styles/globalStyles";

TextInput.propTypes = {
    placeholder: PropTypes.string,
    icon: PropTypes.bool,
    iconContent: PropTypes.any
}

function TextInput(props) {
    const icon = props.icon ? props.icon : false;

    const returnButton = () => {
        if (!icon) {
            return <Input slots={{ root: 'aside', input: CustomInput }} placeholder={props.placeholder} />;
        }
        return (
            <Body>
                {props.iconContent}
                <Input slots={{ root: 'aside', input: TransparentInput }} placeholder={props.placeholder} />
            </Body>
        );
    }

    return returnButton();
}

export default TextInput;