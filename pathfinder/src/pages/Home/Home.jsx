import BottomMenu from "../../components/BottomMenu/BottomMenu";
import Header from "../../components/Header/Header";
import IconCard from "../../components/cards/IconCard/IconCard";
import SearchInput from "../../components/inputs/SearchInput/SearchInput";
import { font2 } from "../../styles/colors";
import { DFlex, DGrid, Holder, H1Title } from "../../styles/globalStyles";
import { StyledHomeIcon, StyledCo2Icon, StyledParkIcon, StyledLocationOnIcon } from "./Home.styled";
import ImgCard from "../../components/cards/ImgCard/ImgCard";
import masp from "../../assets/img/masp.jpg";
import Carousel from "../../components/Carousel/Carousel";


function Home() {
    const cards = [
        { title: "Passeios", text: 4, icon: <StyledHomeIcon /> },
        { title: "Evitados", text: "7kg", icon: <StyledCo2Icon /> },
        { title: "Árvores", text: 3, icon: <StyledParkIcon /> },
    ];

    const populate = () => cards.map((element, index) => <IconCard key={index} icon={element.icon} text={element.text} title={element.title} />)

    const slides = [
        <DFlex justify="space-around" key={1}>
            <ImgCard h="120px" w="48%" src={masp} text="Final de semana" icon={<StyledLocationOnIcon />} />
            <ImgCard h="120px" w="48%" src={masp} text="Final de semana" icon={<StyledLocationOnIcon />} />
        </DFlex>,
        <DFlex justify="space-around" key={2}>
            <ImgCard h="120px" w="48%" src={masp} text="Final de semana" icon={<StyledLocationOnIcon />} />
            <ImgCard h="120px" w="48%" src={masp} text="Final de semana" icon={<StyledLocationOnIcon />} />
        </DFlex>,
        <DFlex justify="space-around" key={3}>
            <ImgCard h="120px" w="48%" src={masp} text="Final de semana" icon={<StyledLocationOnIcon />} />
            <ImgCard h="120px" w="48%" src={masp} text="Final de semana" icon={<StyledLocationOnIcon />} />
        </DFlex>,
    ]

    return (
        <>
            <Header />
            <DFlex justify="center" top="20px" h="40px">
                <SearchInput placeholder="Pesquisar um local..." w="70%" />
            </DFlex>
            <DFlex justify="center" h="130px" top="10px">
                <Holder w="90%">
                    <Holder bottom="30px">
                        <H1Title align="center" color={font2} size="1.5rem">Conquistas</H1Title>
                    </Holder>
                    <DGrid columns="2fr 2fr 2fr" h="130px" gap="15px">
                        {populate()}
                    </DGrid>
                    <Holder top="50px" bottom="50px">
                        <H1Title color={font2} bottom="10px" align="center" size="1.5rem">Descoberta do dia</H1Title>
                        <Carousel slides={slides}/>
                    </Holder>
                </Holder>
            </DFlex>
            <BottomMenu />
        </>
    );
}

export default Home;