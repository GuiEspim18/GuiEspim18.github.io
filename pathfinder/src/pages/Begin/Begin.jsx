import { gradient } from "../../styles/colors";
import { DFlex, GragientMain, Img, MainContent, Holder } from "../../styles/globalStyles";
import logo from "../../assets/img/logo.svg";
import Carousel from "../../components/Carousel/Carousel";
import step1 from "../../assets/img/begin1.svg";
import step2 from "../../assets/img/step2.svg";
import step3 from "../../assets/img/step3.svg";
import Steps from "../../components/Steps/Steps";
import RoundedButton from "../../components/buttons/RoundedButton/RoundedButton";


function Begin() {

    const steps = [
        { img: step1, title: "Bem-vindo ao PathFinder", text: "O seu guia urbano personalizado para descobertas inesquecíveis em São Paulo." },
        { img: step2, title: "Roteiros e Experiências", text: "Jornadas criadas por IA baseadas em seus interesses, revelando a verdadeira essência da cidade." },
        { img: step3, title: "Sustentabilidade e Impacto", text: "Escolha meios de transporte ecológicos e reduza sua pegada de carbono enquanto descobre a cidade." },
        { img: step1, title: "Inicie a sua jornada", button: "Comece agora" }
    ];

    const populate = () => {
        const arr = new Array();
        steps.map((element, index) => {
            if (element.button) arr.push(<div key={index}><Steps img={element.img} title={element.title} button={element.button} /></div>);
            else arr.push(<div key={index}><Steps img={element.img} title={element.title} text={element.text} /></div>);
        });
        return arr;
    }

    return (
        <GragientMain bg={gradient}>
            <MainContent>
                <DFlex direction="column" align="center" justify="space-around" h="100%">
                    <DFlex align="center" justify="center" h="50px">
                        <Img w="118px" src={logo} />
                    </DFlex>
                    <Holder>
                        <Holder w="100%">
                            <Carousel slides={populate()} />
                        </Holder>
                    </Holder>
                    <DFlex h="50px" w="100%">
                        <DFlex justify="flex-end" align="center" w="100%">
                            <RoundedButton right="20px" top="20px" w="50%" to="/login" text="Pular" />
                        </DFlex>
                    </DFlex>
                </DFlex>
            </MainContent>
        </GragientMain>
    );
}

export default Begin;