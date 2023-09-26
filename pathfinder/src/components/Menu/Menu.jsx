import { StyledCameraIcon, StyledGearIcon, StyledHelpIcon, StyledHistoricIcon, StyledLink, StyledMenu } from "./Menu.styled";
import { DFlex } from "../../styles/globalStyles";

function Menu() {
    const items = [{icon: <StyledCameraIcon/>, text: "MEMÓRIAS"}, {icon: <StyledHistoricIcon/>, text: "HISTÓRICO"}, {icon: <StyledGearIcon/>, text: "CONFIGURAÇÕES"}, {icon: <StyledHelpIcon/>, text: "AJUDA"}];

    const populate = () => items.map((element, index) => <StyledLink key={index}><DFlex align="center">{element.icon}{element.text}</DFlex></StyledLink>)

    return (<StyledMenu>{populate()}</StyledMenu>);
}

export default Menu;