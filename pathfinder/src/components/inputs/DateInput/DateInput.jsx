import { Input } from '@mui/base/Input';
import PropTypes from "prop-types";
import { Body } from '../../../styles/globalStyles';
import { StyledCustomInput, StyledTrasnparentButton } from './DateInput.styled';
import { useRef } from "react";


DateInput.propTypes = {
    placeholder: PropTypes.string,
    icon: PropTypes.bool,
    iconContent: PropTypes.any
}

function DateInput(props) {
    const icon = props.icon ? props.icon : false;
    const inputRef = useRef(null);

    const input = ipt => <Input type="date" ref={inputRef} slots={{ root: 'aside', input: ipt }} placeholder={props.placeholder} />;

    const click = () => {
        const ipt = inputRef.current.querySelector("input");
        ipt.showPicker();
    }

    const returnButton = () => {
        if (!icon) {
            return input(StyledCustomInput);
        }
        return (
            <Body onClick={() => click()}>
                {props.iconContent}
                {input(StyledTrasnparentButton)}
            </Body>
        );
    }
    return returnButton();
}

export default DateInput;