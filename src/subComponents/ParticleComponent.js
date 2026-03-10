import React from "react";
import styled, { keyframes } from "styled-components";

const drift = keyframes`
  0% { transform: translateY(0); opacity: 0.35; }
  50% { transform: translateY(-6px); opacity: 0.55; }
  100% { transform: translateY(0); opacity: 0.35; }
`;

const Box = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  opacity: ${(props) => (props.themeMode === "light" ? 0.45 : 0.95)};

  /* Lightweight star-like layers without external dependencies */
  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: -8%;
    background-repeat: repeat;
    animation: ${drift} 6s ease-in-out infinite;
  }

  &::before {
    background-image:
      radial-gradient(
        circle,
        rgba(255, 255, 255, 0.95) 1.6px,
        transparent 2.4px
      ),
      radial-gradient(
        circle,
        rgba(255, 255, 255, 0.7) 1.4px,
        transparent 2.2px
      ),
      radial-gradient(circle, rgba(255, 255, 255, 0.55) 1.2px, transparent 2px);
    background-size:
      90px 90px,
      150px 150px,
      210px 210px;
    background-position:
      0 0,
      35px 50px,
      70px 30px;
  }

  &::after {
    animation-delay: 2s;
    background-image:
      radial-gradient(circle, rgba(255, 255, 255, 0.45) 1.3px, transparent 2px),
      radial-gradient(
        circle,
        rgba(255, 255, 255, 0.35) 1.1px,
        transparent 1.8px
      );
    background-size:
      260px 260px,
      330px 330px;
    background-position:
      60px 30px,
      20px 80px;
  }

  @media (max-width: 700px) {
    opacity: ${(props) => (props.themeMode === "light" ? 0.32 : 0.75)};
  }
`;

const ParticleComponent = (props) => {
  return <Box themeMode={props.theme} />;
};

export default ParticleComponent;
