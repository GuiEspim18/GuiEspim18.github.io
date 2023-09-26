import { Nav, StyledHeader, IconBar, StyledButton, StyledCollapse } from "./Header.styled";
import UserPhoto from "../UserPhoto/UserPhoto";
import { useState } from "react";
import Menu from "../Menu/Menu";


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <StyledHeader opened={isMenuOpen}>
                <Nav>
                    <StyledButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <div>
                            <IconBar className={isMenuOpen ? "open" : ""} />
                            <IconBar className={isMenuOpen ? "open-none" : ""} />
                            <IconBar className={isMenuOpen ? "open-reverse" : ""} />
                        </div>
                    </StyledButton>
                    <UserPhoto name="Pedro Henrique" />
                </Nav>
            </StyledHeader>
            <StyledCollapse in={isMenuOpen}>
                <Menu />
            </StyledCollapse>
        </>
    );
}

export default Header;