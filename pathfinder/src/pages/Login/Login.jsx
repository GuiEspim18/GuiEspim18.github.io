import { GragientMain, H1Title, MainContent, DFlex, Img, Holder, StyledLink } from "../../styles/globalStyles";
import { font2, gradient } from "../../styles/colors";
import logo from "../../assets/img/logo.svg";
import { Form } from "./Login.styled";
import YellowButton from "../../components/buttons/YellowButton/YellowButton";
import EmailInput from "../../components/inputs/EmailInput/EmailInput";
import PasswordInput from "../../components/inputs/PasswordInput/PasswordInput";


function Login() {
    return (
        <GragientMain bg={gradient}>
            <MainContent>
                <Form>
                    <DFlex align="center" justify="space-around" direction="column">
                        <DFlex align="center" justify="center" h="50px">
                            <Img w="118px" src={logo} />
                        </DFlex>
                        <DFlex align="center" justify="center" h="auto" w="70%">
                            <div>
                                <DFlex align="center" justify="center" h="auto">
                                    <H1Title align="center" color={font2}>Login</H1Title>
                                </DFlex>
                                <Holder top="20px">
                                    <EmailInput placeholder="Email" />
                                </Holder>
                                <Holder top="20px">
                                    <PasswordInput placeholder="Senha" />
                                </Holder>
                                <Holder top="15px" align="start">
                                    <StyledLink decoration="none" size="0.8rem">Esqueci minha senha</StyledLink>
                                </Holder>
                                <Holder top="70px">
                                    <YellowButton text="Entrar" top="20px" to="/home" />
                                </Holder>
                            </div>
                        </DFlex>
                        <StyledLink to="/register">Criar uma conta</StyledLink>
                    </DFlex>
                </Form>
            </MainContent>
        </GragientMain>
    );
}

export default Login;