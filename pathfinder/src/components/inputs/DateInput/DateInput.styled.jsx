import { styled } from "styled-components";
import { CustomInput, TransparentInput } from "../../../styles/globalStyles";

export const StyledCustomInput = styled(CustomInput)`
    &::-webkit-calendar-picker-indicator{
        display: none;
    }

    &::-webkit-input-placeholder{ 
        visibility: hidden !important;
    }
`;

export const StyledTrasnparentButton = styled(TransparentInput)`
    &::-webkit-calendar-picker-indicator{
        display: none;
    }

    &::-webkit-input-placeholder{ 
        visibility: hidden !important;
    }
`;