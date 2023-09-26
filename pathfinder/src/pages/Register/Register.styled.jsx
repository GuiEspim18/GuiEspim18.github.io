import styled from "styled-components";
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import { icon } from "../../styles/colors";
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const StyledNameIcon = styled(PermIdentityRoundedIcon)`
    color: ${icon};
    font-size: 20px;
`;

export const StyledEmail = styled(MailOutlineRoundedIcon)`
    color: ${icon};
    font-size: 20px;
`;

export const StyleLockRoundedIcon = styled(LockRoundedIcon)`
    color: ${icon};
    font-size: 20px;
`;

export const StyledCalendarMonthIcon = styled(CalendarMonthIcon)`
    color: ${icon};
    font-size: 20px;
`;

export const Form = styled.form`
    width: 100%;
    height: 100%;
`;