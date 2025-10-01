import styled from "styled-components";
import SpecLogo from "../Images/spec_logo.png";

import LGBTQHistoryMonth from "../Images/LGBTQransom_logo.png";
import IlloPlaceholder from "../Images/illo_placeholder.png";

import ButtonList from "./ButtonList";

import YellowPinkSticker from "../Images/yellow_pink_spike.png";


const Section = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;    
`;

const SpecLogoContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 40px;
`;

const Logo = styled.img`
    width: 120px;
    height: auto;
`;

const CircleSpike = styled.img`
    width: 18%;
    height: auto;
    z-index: 51;
`;




const IllustrationContainer = styled.div`
    display: flex;
    justify-content: right;
`;

const Illo = styled.img`
    position: absolute;
    width: 50%;
    padding-right: 80px;
    height: auto;
    z-index: 50;
    top: 20%;
`;


const TitleLGBTQ = styled.section`
    position: abolute;
    display: flex;
    justify-content: left;
    align-items: flex-start;
    overflow: hidden;
`;

const LGBTQ = styled.img`
    position: absolute;
    display: flex;
    width: 57%;
    height: auto;
    overflow: hidden;
    padding-left: 20px;
    z-index: 100;
    top: 143px;
`;


const Spacer = styled.div`
    height: 350px;
`;

const ButtonSection = styled.div`
    position: absolute;
    padding-top: 50px;
    right: 59%;
`;    




export default function Header() {
  return (
    <>
    <Section>
        <SpecLogoContainer>
            <Logo src={SpecLogo} alt="Spectator Logo" />
        </SpecLogoContainer>
        <CircleSpike src={YellowPinkSticker} alt="Yellow and Pink Spike Sticker" />
    </Section>
    <IllustrationContainer>
        <Illo src={IlloPlaceholder} alt="Illustration Placeholder" />
    </IllustrationContainer>
    <TitleLGBTQ>
        <LGBTQ src={LGBTQHistoryMonth} alt="LGBTQ+ History Month Logo" />
    </TitleLGBTQ>
    <Spacer />
    <ButtonSection> <ButtonList /></ButtonSection>
   

    </>
  );
}