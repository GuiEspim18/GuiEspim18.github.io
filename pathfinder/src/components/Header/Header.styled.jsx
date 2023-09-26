import styled from "styled-components";
import { font2, mainColor, shadow } from "../../styles/colors";
import { Button, Collapse } from "@mui/material";
import PropTypes from "prop-types";

export const StyledHeader = styled.header`
    width: 100%;
    height: 62px;
    background: ${mainColor};
    box-shadow: ${({opened}) => opened ? "" : shadow};
`;

StyledHeader.propTypes = {
    oppned: PropTypes.bool
}

export const Nav = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 5px;
    box-sizing: border-box;
`;

export const IconBar = styled.div`
    width: 30px;
    height: 3px;
    background-color: ${font2};
    border-radius: 40px;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform-origin: center;
    margin-bottom: 5px;
    margin-top: 5px;

    &.open {
        transform: rotate(48deg) translate(3px, 8.5px);
    }

    &.open-reverse {
        transform: rotate(-48deg) translate(3px, -8.5px);
    }

    &.open-none {
        opacity: 0;
    }
`;

export const StyledButton = styled(Button)`
    width: 30px;
`; 

export const StyledCollapse = styled(Collapse)`
    box-shadow: ${shadow};
`;