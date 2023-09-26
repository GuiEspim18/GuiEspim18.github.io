import styled from "styled-components";
import { mainColor, yellow } from "../../../styles/colors";

export const StyledCard = styled.div`
    width: 100%;
    height: ${({h}) => h || "100%"};
    background-color: ${mainColor};
    border: 1px solid ${yellow};
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
`;