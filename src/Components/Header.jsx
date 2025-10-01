import styled, { keyframes } from "styled-components";

import SpecLogo from "../Images/spec_logo.png";
import LGBTQHistoryMonth from "../Images/LGBTQransom_logo.png";
import IlloPlaceholder from "../Images/illo_placeholder.png";

import ButtonList from "./ButtonList";

import YellowPinkSpikeSticker from "../Images/yellow_pink_spike.png";
import VioletFlowerSticker from "../Images/violet_flower.png";
import PinkSpikeSticker from "../Images/pink_spike.png";
import PinkFlowerSticker from "../Images/pink_flower.png";
import RedRainbowSticker from "../Images/red_rainbow.png";


const Section = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;    
    overflow: hidden;
`;

const SectionBottom = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;    
    overflow: hidden;
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


const Spacer1 = styled.div`
    height: 350px;
`;


const Rotate = keyframes`
  0% {
    transform: rotate(0turn);
  }
  50% {
      transform: rotate(0.15turn);
  }
  100% {
      transform: rotate(0turn);
  }
`;


const Violet = styled.img`
    position: absolute;
    width: 35%;
    height: auto;
    margin-top: -5%;
    z-index: 2;
    animation: ${Rotate} 4s ease-in-out infinite alternate;
`;

const ButtonSection = styled.div`
    position: absolute;
    padding-top: 4%;
    right: 59%;
    z-index: 75;
`;

const Spike = styled.img`
    width: 13%;
    display: flex;
    position: absolute;
    z-index: 51;
    padding-top: 10%;
    right: 0;
`;


const Spacer2 = styled.div`
    height: 505px;
`;

const Pink = styled.img`
    bottom: 0;
    margin-top: -15%;
    width: 32%;
`;

const RotateRainbow = keyframes`
  0% {
    transform: rotate(-15deg);
  }
  50% {
      transform: rotate(15deg);
  }
  100% {
      transform: rotate(-15deg);
  }
`;

const RedWrapper = styled.div`
    padding-top: 14%;
    padding-left: 25%;
    margin-bottom: -2%;
    width: 30%;
    z-index: 80;
`;

const Red = styled.img`
    bottom: 0;
    animation: ${RotateRainbow} 4s ease-in-out infinite alternate;
    z-index: 80;
    width: 90%;
    left: 0;
    padding-left: 50%;

`;



export default function Header() {
  return (
    <>
    <Section>
        <SpecLogoContainer>
            <Logo src={SpecLogo} alt="Spectator Logo" />
        </SpecLogoContainer>
        <CircleSpike src={YellowPinkSpikeSticker} alt="Yellow and Pink Spike Sticker" />
    </Section>
    <IllustrationContainer>
        <Illo src={IlloPlaceholder} alt="Illustration Placeholder" />
    </IllustrationContainer>
    <TitleLGBTQ>
        <LGBTQ src={LGBTQHistoryMonth} alt="LGBTQ+ History Month Logo" />
    </TitleLGBTQ>
    <Spacer1 />
    <Section>
        <Violet src={VioletFlowerSticker} alt="Violet Flower Sticker" />
        <Spike src={PinkSpikeSticker} alt="Pink Spike Sticker" />
    </Section>
    <ButtonSection> 
        <ButtonList />
    </ButtonSection>
    <Spacer2 />
    <SectionBottom >
        <Pink src={PinkFlowerSticker} alt="Pink Flower Sticker" />
        <RedWrapper>
            <Red src={RedRainbowSticker} alt="Red Rainbow Sticker" />
        </RedWrapper>
    </SectionBottom>
   

    </>
  );
}