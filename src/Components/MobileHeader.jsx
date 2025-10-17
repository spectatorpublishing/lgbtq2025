import styled from "styled-components";

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
        <Logo src={"spec_logo.png"} alt="Spectator Logo" />
    </SpecLogoContainer>

    <HeaderLGBTQ>  
        <LGBTQ src={"publicLGBTQransom_logo.png"} alt="LGBTQ+ History Month Logo" /> 
        <Illo src={"illo_placeholder.png"} alt="Illustration Placeholder" />
    </HeaderLGBTQ>
    <Spacer />

    <CircleSpike src={"yellow_pink_spike.png"} alt="Yellow and Pink Spike Sticker" />   
    <Violet src={"violet_flower.png"} alt="Violet Flower Sticker" />
    <Spike src={"pink_spike.png"} alt="Pink Spike Sticker" />
    <Pink src={"whole_pink_flower.png"} alt="Pink Flower Sticker" />
    <Red src={"red_rainbow.png"} alt="Red Rainbow Sticker" />
   

    </>
  );
}