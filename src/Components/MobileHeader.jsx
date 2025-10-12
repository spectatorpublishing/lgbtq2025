import styled, { keyframes } from "styled-components";

import SpecLogo from "../../public/spec_logo.png";
import LGBTQHistoryMonth from "../../public/LGBTQransom_logo.png";
import IlloPlaceholder from "../../public/illo_placeholder.png";

import YellowPinkSpikeSticker from "../../public/yellow_pink_spike.png";
import VioletFlowerSticker from "../../public/violet_flower.png";
import PinkSpikeSticker from "../../public/pink_spike.png";
import PinkFlowerSticker from "../../public/whole_pink_flower.png";
import RedRainbowSticker from "../../public/red_rainbow.png";




const SpecLogoContainer = styled.div`
  padding: 15px;
`

const Logo = styled.img`
    width: 15%;
    height: auto;
`;


const HeaderLGBTQ = styled.section`
    position: abolute;
    display: flex;
    justify-content: center;
    overflow: hidden;
`;



const LGBTQ = styled.img`
    position: absolute;
    width: 83%;
    height: auto;
    z-index: 100;
    margin-right: -8%;
    top: 10px;
`;

const Illo = styled.img`
    position: absolute;
    width: 70%;
    height: auto;
    z-index: 50;
    top: 28%;
`;


const Spacer = styled.div`
    height: 125px;
`;

const CircleSpike = styled.img`
    position: absolute;
    width: 22%;
    height: auto;
    z-index: 51;
    right: 15px;
`;

const Violet = styled.img`
    position: absolute;
    width: 65%;
    height: auto;
    z-index: 2;
    left: 0;
    margin-left: -20%;
`;

const Spike = styled.img`
    width: 22%;
    display: flex;
    position: absolute;
    z-index: 51;
    padding-top: 35%;
    right: 0;
`;

const Pink = styled.img`
    padding-top: 140%;
    width: 32%;
`;

const Red = styled.img`
    position: absolute;
    z-index: 80;
    width: 35%;
    bottom: 0;
    padding-bottom: 18%;
    right: 5%;


    @media (min-height: 800px) and (min-width: 600px){
    
        top: 1000px;
        }

    @media (min-height: 500px) and (min-width: 700px){
    
        top: 1100px;
    }

    @media (width: 375px) {
        top: 600px;
    }

`;



export default function Header() {
  return (
    <>
    <SpecLogoContainer>
        <Logo src={SpecLogo} alt="Spectator Logo" />
    </SpecLogoContainer>

    <HeaderLGBTQ>  
        <LGBTQ src={LGBTQHistoryMonth} alt="LGBTQ+ History Month Logo" /> 
        <Illo src={IlloPlaceholder} alt="Illustration Placeholder" />
    </HeaderLGBTQ>
    <Spacer />

    <CircleSpike src={YellowPinkSpikeSticker} alt="Yellow and Pink Spike Sticker" />   
    <Violet src={VioletFlowerSticker} alt="Violet Flower Sticker" />
    <Spike src={PinkSpikeSticker} alt="Pink Spike Sticker" />
    <Pink src={PinkFlowerSticker} alt="Pink Flower Sticker" />
    <Red src={RedRainbowSticker} alt="Red Rainbow Sticker" />
   

    </>
  );
}