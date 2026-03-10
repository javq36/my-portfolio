import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { NodeJs, Develope } from "./AllSvgs";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";
import { profileData } from "../data/ProfileData";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1.5rem;
  padding: 6rem 2rem 2rem 5rem;

  @media (max-width: 1100px) {
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    padding: 7rem 1.25rem 2rem 1.25rem;
  }

  @media (max-width: 700px) {
    padding: 6.5rem 0.85rem 1.5rem 0.85rem;
    gap: 1rem;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  min-height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1100px) {
    width: min(42rem, 90vw);
    min-height: auto;
  }

  @media (max-width: 700px) {
    width: 94vw;
    padding: 1.2rem;
  }

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }

  @media (max-width: 700px) {
    font-size: calc(0.62em + 1.1vw);

    ul,
    p {
      margin-left: 0.6rem;
    }
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Develope width={40} height={40} /> Frontend Developer
          </Title>
          <Description>{profileData.skills.frontend.summary}</Description>
          <Description>
            <strong>Skills</strong>
            <p>{profileData.skills.frontend.stack}</p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>{profileData.skills.frontend.tools}</p>
          </Description>
        </Main>
        <Main>
          <Title>
            <NodeJs width={60} height={40} /> Backend Developer
          </Title>
          <Description>{profileData.skills.backend.summary}</Description>
          <Description>
            <strong>Skills</strong>
            <p>{profileData.skills.backend.stack}</p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>{profileData.skills.backend.tools}</p>
          </Description>
        </Main>
        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
