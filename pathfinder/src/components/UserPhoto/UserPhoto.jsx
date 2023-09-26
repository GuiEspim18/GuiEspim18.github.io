import { BackgroundUserPhoto } from "./UserPhoto.styled";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { DFlex, PText } from "../../styles/globalStyles";
import PropTypes from "prop-types";
import { font2 } from "../../styles/colors";

UserPhoto.propTypes = {
    name: PropTypes.string
};

function UserPhoto(props) {
    return (
        <DFlex align="center">
            <PText color={font2} right="15px" size="1.2rem">{props.name}</PText>
            <BackgroundUserPhoto>
                <PersonRoundedIcon />
            </BackgroundUserPhoto>
        </DFlex>
    );
}

export default UserPhoto;