import styled from "styled-components";
import { font2, mainColor, yellow } from "../../styles/colors";
import { Link } from "react-router-dom";
import AddAPhotoRoundedIcon from '@mui/icons-material/AddAPhotoRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';

export const StyledMenu = styled.section`
    width: 100%;
    height: 200px;
    background: ${mainColor};
`;

export const StyledLink = styled(Link)`
    background: transparent;
    display: block;
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding: 0px 25px;
    color: ${font2};
    font-size: 1.1rem;
    text-decoration: none;
    box-sizing: border-box;
    transition: 0.3s;

    &:hover {
        background-color: ${font2};
        color: ${mainColor};
    }

    .selected {
        background-color: ${font2};
        color: ${mainColor};
    }
`;

export const StyledCameraIcon = styled(AddAPhotoRoundedIcon)`
    font-size: 25 !important;
    margin-right: 10px;
    color: ${yellow};
`;

export const StyledHistoricIcon = styled(HistoryRoundedIcon)`
    font-size: 25 !important;
    margin-right: 10px;
    color: ${yellow};
`;

export const StyledGearIcon = styled(SettingsRoundedIcon)`
    font-size: 25 !important;
    margin-right: 10px;
    color: ${yellow};
`;

export const StyledHelpIcon = styled(HelpOutlineRoundedIcon)`
    font-size: 25 !important;
    margin-right: 10px;
    color: ${yellow};
`;