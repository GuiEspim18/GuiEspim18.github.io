import { IconButton } from "@mui/material";
import { Menu, Nav, StyledHomeIcon, StyledLocationOnIcon, StyledMapIcon } from "./BottomMenu.styled";

function BottomMenu() {
    const icons = [<StyledHomeIcon key={1}/>, <StyledLocationOnIcon key={2}/>, <StyledMapIcon key={3}/>];

    const populate = () => icons.map((element, index) => <IconButton key={index}>{element}</IconButton>)

    return (
        <Menu>
            <Nav>
                {populate()}
            </Nav>
        </Menu>
    );
}

export default BottomMenu;