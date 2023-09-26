import { createGlobalStyle, styled } from "styled-components";
import { font, font2, gradient, yellow } from "./colors";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Global = createGlobalStyle`
    html {
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
        color: ${font};
        height: 100%;
        background: ${gradient};

        p, h1, h2, h3, h4, h5, h6, a {
            margin: 0;
        }

    }

    body, #root {
        height: 100%;
        overflow-y: scroll;
    }

    body {
        margin: 0;
    }
`;

export const GragientMain = styled.main`
    background: ${({ bg }) => bg};
    width: 100%;
    height: 100%;
    display: block;
`;

GragientMain.propTypes = {
    bg: PropTypes.string
};

export const Img = styled.img`
    width: ${({ w }) => w || "100%"} !important;
    margin-top: ${({ mtop }) => mtop};
    position: ${({position}) => position};
`;

Img.propTypes = {
    w: PropTypes.string,
    mtop: PropTypes.string,
    position: PropTypes.string
};

export const DFlex = styled.div`
    display: flex;
    align-items: ${({ align }) => align || "flex-start"};
    justify-content: ${({ justify }) => justify || "flex-start"};
    height: ${({ h }) => h || "100%"};
    width: ${({ w }) => w || "auto"};
    flex-wrap: ${({ wrap }) => wrap || "wap"};
    margin-top: ${({ top }) => top || "0px"};
    margin-bottom: ${({ bottom }) => bottom || "0px"};
    margin-left: ${({ left }) => left || "0px"};
    margin-right: ${({ right }) => right || "0px"};
    flex-direction: ${({ direction }) => direction || "row"};
`;

DFlex.propTypes = {
    align: PropTypes.string,
    justify: PropTypes.string,
    h: PropTypes.string,
    wrap: PropTypes.string,
    top: PropTypes.string,
    bottom: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
    direction: PropTypes.string,
    width: PropTypes.string
};

export const PText = styled.p`
    color: ${({ color }) => color || font};
    text-align: ${({ align }) => align || "start"};
    font-size: ${({ size }) => size || "1rem"};
    margin-top: ${({ top }) => top || "0px"};
    margin-bottom: ${({ bottom }) => bottom || "0px"};
    margin-left: ${({ left }) => left || "0px"};
    margin-right: ${({ right }) => right || "0px"};
`;

PText.propTypes = {
    color: PropTypes.string,
    align: PropTypes.string,
    size: PropTypes.string,
    top: PropTypes.string,
    bottom: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string
};

export const H1Title = styled.h1`
    color: ${({ color }) => color || font};
    text-align: ${({ align }) => align || "start"};
    font-size: ${({ size }) => size || "2rem"};
    margin-top: ${({ top }) => top || "0px"};
    margin-bottom: ${({ bottom }) => bottom || "0px"};
    margin-left: ${({ left }) => left || "0px"};
    margin-right: ${({ right }) => right || "0px"};
`;

H1Title.propTypes = {
    color: PropTypes.string,
    align: PropTypes.string,
    size: PropTypes.string,
    top: PropTypes.string,
    bottom: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string
};

export const MainContent = styled.section`
    width: ${({ w }) => w || "100%"};
    height: ${({ h }) => h || "100%"};
    margin-top: ${({ top }) => top || "0px"};
    margin-bottom: ${({ bottom }) => bottom || "0px"};
    margin-left: ${({ left }) => left || "0px"};
    margin-right: ${({ right }) => right || "0px"};
`;

MainContent.propTypes = {
    w: PropTypes.string,
    h: PropTypes.string,
    top: PropTypes.string,
    bottom: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
};

export const Holder = styled.div`
    margin-top: ${({ top }) => top || "0px"};
    margin-bottom: ${({ bottom }) => bottom || "0px"};
    margin-left: ${({ left }) => left || "0px"};
    margin-right: ${({ right }) => right || "0px"};
    width: ${({w}) => w || "100%"};
    height: ${({h}) => h};
`;

Holder.propTypes = {
    top: PropTypes.string,
    bottom: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
    w: PropTypes.string
};

export const CustomInput = styled.input`
    background-color: transparent;
    outline: none;
    border-bottom: solid 1px ${yellow};
    border-top: none;
    border-right: none;
    border-left: none;
    color: ${yellow};
    height: 40px;
    padding: 10px 20px;
    box-sizing: border-box;
    width: 100%;
    font-size: 1rem;
`;

export const StyledLink = styled(Link)`
    color: ${font2};
    text-align: ${({ align }) => align || "start"};
    font-size: ${({ size }) => size || "1.2rem"};
    text-decoration: ${({decoration}) => decoration || "underline"};
`;

StyledLink.propTypes = {
    decoration: PropTypes.string,
    align: PropTypes.string,
    size: PropTypes.string
};

export const DGrid = styled.section`
    display: grid;
    grid-template-columns: ${({columns}) => columns || "100%"};
    height: ${({h}) => h || "100%"};
    gap: ${({gap}) => gap || "20px"};
    margin-top: ${({ top }) => top || "0px"};
    margin-bottom: ${({ bottom }) => bottom || "0px"};
    margin-left: ${({ left }) => left || "0px"};
    margin-right: ${({ right }) => right || "0px"};
`;

DGrid.propTypes = {
    columns: PropTypes.string,
    top: PropTypes.string,
    bottom: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
};

export const Body = styled.div`
    background-color: transparent;
    outline: none;
    border-bottom: solid 1px ${yellow};
    border-top: none;
    border-right: none;
    border-left: none;
    color: ${yellow};
    height: 40px;
    box-sizing: border-box;
    width: 100%;
    font-size: 1rem;
    display: flex;
    overflow: hidden;
    align-items: center;
`;

export const TransparentInput = styled.input`
height: 100%;
width: 100%;
background-color: transparent;
border: none;
outline: none;
color: ${yellow};
font-size : 1rem;
padding: 10px 20px;
box-sizing: border-box;
`;