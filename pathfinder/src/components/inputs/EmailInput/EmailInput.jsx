import { Input } from '@mui/base/Input';
import PropTypes from "prop-types";
import { Body, CustomInput,TransparentInput } from '../../../styles/globalStyles';


EmailInput.propTypes = {
    placeholder: PropTypes.string,
    icon: PropTypes.bool,
    iconContent: PropTypes.any
}

function EmailInput(props) {
    const icon = props.icon ? props.icon : false;

    const returnButton = () => {
        if (!icon) {
            return <Input type="email" slots={{ root: 'aside', input: CustomInput  }} placeholder={props.placeholder}/>
        }
        return (
            <Body>
                {props.iconContent}
                <Input type="email" slots={{ root: 'aside', input: TransparentInput }} placeholder={props.placeholder} />
            </Body>
        );
    }

    return returnButton();
}

export default EmailInput;