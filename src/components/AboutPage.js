import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";
import astronaut from "../assets/Images/spaceman.png";
import { profileData } from "../data/ProfileData";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`;
const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 900px) {
    width: 28vw;
    right: 2%;
    top: 6%;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: block;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  overflow-y: auto;

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;

  ul {
    margin-top: 0.75rem;
    padding-left: 1.2rem;
  }

  li {
    margin-bottom: 0.35rem;
  }

  @media (max-width: 1100px) {
    width: 70vw;
    left: 12vw;
    top: 8rem;
    height: 66vh;
  }

  @media (max-width: 700px) {
    width: 88vw;
    left: 6vw;
    top: 7rem;
    height: 74vh;
    padding: 1.25rem;
    font-size: calc(0.65rem + 1.2vw);
    line-height: 1.45;
  }
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Main>
          {profileData.about[0]}
          <br />
          <br />
          {profileData.about[1]}
          <br />
          <br />
          {profileData.about[2]}
          <ul>
            {profileData.competencies.map((competency) => (
              <li key={competency}>{competency}</li>
            ))}
          </ul>
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
