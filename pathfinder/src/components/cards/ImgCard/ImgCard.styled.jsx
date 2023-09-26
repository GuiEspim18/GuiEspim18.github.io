import { styled } from "styled-components";
import { mainColor, font2 } from "../../../styles/colors";
import { Img } from "../../../styles/globalStyles";


export const StyledCard = styled.div`
    width: ${({w}) => w || "100%"};
    height: ${({h}) => h || "100%"};
    background-color: ${mainColor};
    border: 1px solid ${font2};
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
`;

export const StyledImg = styled(Img)`
    border-radius: 5px;
`;