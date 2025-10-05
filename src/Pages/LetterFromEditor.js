import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Maven Pro', sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;

const Page = styled.main`
  background-color: #B5B3F4;
  display: flex;
  flex-direction: column; 
  align-items: center;    
  padding: 2rem;
  min-height: 1400px;
  @media (max-width: 1024px) {
    min-height: 900px; /* responsive height */
  }
`;

const Title = styled.div`
  margin-bottom: 1.5rem;  
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const LetterCard = styled.div`
  position: relative; 
  box-sizing: border-box;
  width: 90%;
  max-width: 1261px;
    min-height: 950px;
  background: #F8EFFF;
  border: 2px solid #000;
  color: #000000;

  font-family: 'Maven Pro', sans-serif;
  font-size: clamp(16px, 2vw, 28px);
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.05em;

  box-shadow: 4px 8px #3B0F46;
  padding: 60px 35px;
  border-radius: 12px;

   @media (max-width: 1024px) {
    min-height: 730px;
    padding: 40px 25px;



`;


const Signature = styled.div`
  font-family: 'Mea Culpa', cursive;
  font-size: 42px;
  font-weight: 400;
  padding-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 18px;
  }


`;

const SignatureContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin-top: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    gap: 1rem;          /* reduce spacing between signatures */
    margin-top: 1rem;   /* bring signatures closer to main text */
    justify-content: center;
  }
`;


const SignatureItem = styled.div`
  min-width: 120px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const CornerImage = styled.img`
  position: absolute;
  height: auto;
`;

/* top left */
const HeartImage = styled(CornerImage)`
  top: -80px;
  left: -60px;
  width: 141px;

  @media (max-width: 768px) {
    top: -30px;
    left: -20px;
    width: 73px;
  }
`;

/* top right */
const StarImage = styled(CornerImage)`
  top: -90px;
  right: -70px;
  width: 271.78px;

  @media (max-width: 768px) {
    top: -20px;
    right: -45px;
    width: 119.46px;
  }
`;

/* bottom left */
const SunImage = styled(CornerImage)`
  bottom: -130px;
  left: -60px;
  width: 213px;

  @media (max-width: 768px) {
    bottom: -60px;
    left: -55px;
    width: 135px;
  }
`;

/* bottom center */
const LipsImage = styled(CornerImage)`
  bottom: -80px;
  left: 600px;
  transform: translateX(-50%);
  width: 246px;

  /* medium screens: move closer to center */
  @media (max-width: 1200px) {
    left: 60%;
  }

  @media (max-width: 992px) {
    left: 50%;
  }

  /* mobile: hide */
  @media (max-width: 768px) {
    display: none;
  }
`;


/* bottom right */
const RainbowImage = styled(CornerImage)`
  bottom: -90px;
  right: -90px;
  width: 305px;

  @media (max-width: 768px) {
    bottom: -50px;
    right: -65px;
    width: 149px;
  }
`;

export default function LetterPage() {
  return (
    <>
      <link 
        href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;700;900&family=Mea+Culpa&display=swap" 
        rel="stylesheet" 
      />

      <GlobalStyle />   
      <Page>
        <Title>
          <img src="title.png" alt="Letter Title"/> 
        </Title>
        <LetterCard>
          <HeartImage src="red-heart.png" alt="heart"/>  
          <StarImage src="star.png" alt="star"/>  
          <SunImage src="sun.png" alt="sun"/> 
          <LipsImage src="lips.png" alt="lips"/> 
          <RainbowImage src="rainbow.png" alt="rainbow"/>  

          <div>Dear readers</div>
          <br />
          <div>
          !!PLACEHOLDER October is LGBTQ History Month, a time to celebrate queerness in 
          all its forms and the contributions queer people have made to our world. Columbia
           itself has been the site of much of this history, and this special edition is 
           intended to highlight the ways lesbian, gay, bisexual, transgender, and queer 
           Columbians have played integral roles in shaping our community, both in the past 
           and today.
          </div>
          <br />
          <div>
          !!PLACEHOLDER In this edition, we explore how professor Jack Halberstam has transformed
            the study of gender and sexuality at Columbia. We dive into the difficult decisions trans
            athletes must make and look into the communities queer and trans student-athletes find
            within club sports. We take a tour through the businesses in West Harlem supporting the
            queer community and interrogate the lack of lesbian bars, both in New York City and
            nationwide.
          </div>
          <br />
          <div>
          !!PLACEHOLDER We hope this edition leaves you with a deeper understanding of the
            contributions of queer Columbians and community members to our school, neighborhood, and
            beyond. We are excited to celebrate queer history, voices, stories, and lives—this month,
            and all year round.
          </div>
          <br />
          <div>All the very best,</div>
        
          <SignatureContainer>
            <SignatureItem>
              <Signature>Firstname Lastname</Signature>
              <div>Editor In Chief</div>
            </SignatureItem>
        
            <SignatureItem>
              <Signature>Firstname Lastname</Signature>
              <div>Managing Editor</div>
            </SignatureItem>
          </SignatureContainer>
        </LetterCard>
      </Page>
    </>
  );
}
