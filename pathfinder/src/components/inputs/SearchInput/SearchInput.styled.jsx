import styled from "styled-components";
import { bgColor, mainColor } from "../../../styles/colors";
import SearchIcon from '@mui/icons-material/Search';

export const Body = styled.div`
    height: 40px;
    width: ${({w}) => w || "100%"};
    background-color: ${bgColor};
    border: none;
    outline: none;
    font-size : 1rem;
    padding: 10px 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    border-radius: 40px;
`;

export const StyledInput = styled.input`
    height: 100%;
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    color: ${mainColor};
    font-size : 1rem;
    padding: 10px 20px;
    box-sizing: border-box;
`;

export const StyledSearchIcon = styled(SearchIcon)`
    color: ${mainColor};
`;