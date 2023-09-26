import { styled } from "styled-components";
import { mainColor, yellow } from "../../../styles/colors";
import PropTypes from "prop-types";


export const Badge = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 15px;
    border: solid 1px ${yellow};
    background-color: ${({ selected }) => selected ? yellow : mainColor};
    margin: 0 10px;
    transition: 0.3s;
`;

Badge.propTypes = {
    selected: PropTypes.bool
}