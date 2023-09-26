import { Input } from "@mui/base";
import { VisibilityOn, VisibilityOff } from "./PasswordInput.styled";
import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { Body } from "../../../styles/globalStyles";
import { TransparentInput } from "../../../styles/globalStyles";

PasswordInput.propTypes = {
    placeholder: PropTypes.string,
    icon: PropTypes.bool,
    iconContent: PropTypes.any
};

function PasswordInput(props) {
    const [visibility, setVisibility] = useState(false);
    const icon = props.icon ? props.icon : false;


    const returnButton = () => {
        if (!icon) {
            return (
                <Body>
                    <Input slots={{ root: 'aside', input: TransparentInput }} type={visibility ? "text" : "password"} placeholder={props.placeholder} />
                    <IconButton onClick={() => setVisibility(!visibility)}>{visibility ? <VisibilityOn /> : <VisibilityOff />}</IconButton>
                </Body>
            );
        }
        return (
            <Body>
                {props.iconContent}
                <Input slots={{ root: 'aside', input: TransparentInput }} type={visibility ? "text" : "password"} placeholder={props.placeholder} />
                <IconButton onClick={() => setVisibility(!visibility)}>{visibility ? <VisibilityOn /> : <VisibilityOff />}</IconButton>
            </Body>
        );
    }

    return returnButton();
}

export default PasswordInput;