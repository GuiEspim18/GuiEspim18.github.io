import { styled } from "styled-components";
import { font, yellow } from "../../../styles/colors";
import { Button } from "@mui/material";
import PropTypes from "prop-types";


export const ButtonBody = styled(Button)`
    width: ${({w}) => w || "100%"};
    padding: ${({padding}) => padding | "10px"};
    border-radius: 20px !important;
    background: ${yellow} !important;
    border: none;
    margin-top: ${({ top }) => top || "0px"} !important;
    margin-bottom: ${({ bottom }) => bottom || "0px"} !important;
    margin-left: ${({ left }) => left || "0px"} !important;
    margin-right: ${({ right }) => right || "0px"} !important;

    p {
        color: ${font};
    }
`;

ButtonBody.propTypes = {
    w : PropTypes.string ,
    padding: PropTypes.string,
};