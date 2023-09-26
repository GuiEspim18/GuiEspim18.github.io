import TextInput from "../../components/inputs/TextInput/TextInput";
import EmailInput from "../../components/inputs/EmailInput/EmailInput";
import { gradient } from "../../styles/colors";
import { DFlex, GragientMain, Holder, Img, StyledLink } from "../../styles/globalStyles";
import { Form, StyledEmail, StyledNameIcon, StyleLockRoundedIcon, StyledCalendarMonthIcon } from "./Register.styled";
import PasswordInput from "../../components/inputs/PasswordInput/PasswordInput";
import logo from "../../assets/img/logo.svg";
import YellowButton from "../../components/buttons/YellowButton/YellowButton";
import DateInput from "../../components/inputs/DateInput/DateInput";

function Register() {
    return (
        <GragientMain bg={gradient}>
            <Form>
                <DFlex justify="space-around" align="center" direction="column">
                    <DFlex align="center" justify="center" h="50px">
                        <Img w="118px" src={logo} />
                    </DFlex>
                    <DFlex align="center" justify="center" h="auto" w="80%">
                        <div>
                            <Holder h="30px">
                                <TextInput icon={true} iconContent={<StyledNameIcon />} placeholder="Nome" />
                            </Holder>
                            <Holder h="30px" top="30px">
                                <EmailInput icon={true} iconContent={<StyledEmail />} placeholder="Email" />
                            </Holder>
                            <Holder h="30px" top="30px">
                                <DateInput icon={true} iconContent={<StyledCalendarMonthIcon />} placeholder="Data de nascimento" />
                            </Holder>
                            <Holder h="30px" top="30px">
                                <PasswordInput icon={true} iconContent={<StyleLockRoundedIcon />} placeholder="Senha" />
                            </Holder>
                            <Holder h="30px" top="30px">
                                <PasswordInput icon={true} iconContent={<StyleLockRoundedIcon />} placeholder="Confirme a senha" />
                            </Holder>
                            <Holder top="70px">
                                <YellowButton text="Criar conta" top="20px" to="/home" />
                            </Holder>
                        </div>
                    </DFlex>
                    <StyledLink to="/login">Já tenho uma conta</StyledLink>
                </DFlex>
            </Form>
        </GragientMain>
    );
}

export default Register;