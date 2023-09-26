import LocationOnIcon from '@mui/icons-material/LocationOn';
import styled from 'styled-components';
import { mainColor, yellow } from '../../styles/colors';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MapRoundedIcon from '@mui/icons-material/MapRounded';

export const StyledLocationOnIcon = styled(LocationOnIcon)`
    color: ${yellow};
    font-size: 35px !important;
`;

export const StyledHomeIcon = styled(HomeRoundedIcon)`
    color: ${yellow};
    font-size: 35px !important;
`;

export const StyledMapIcon = styled(MapRoundedIcon)`
    color: ${yellow};
    font-size: 35px !important;
`;

export const Menu = styled.section`
    background-color: ${mainColor};
    position: fixed;
    bottom: 0;
    height: 45px;
    width: 100%;
`;

export const Nav = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
`;