import styled from "styled-components";

//DECLARING COLOR VARIABLES. WEIGHTS ARE 500 AND 700
const primary = "hsl(249, 68%, 29%)";
const lightGrayishCyan = "hsl(180, 52%, 96%)"; //BACKGROUND
const lightGrayishCyan2 = "hsl(180, 31%, 90%)"; //FILTER TABLETS
const darkGrayishCyan = "hsl(180, 8%, 52%)";
const purplishClear = "hsl(233, 98%, 84%)";
const veryDarkGrayishCyan = "hsl(180, 14%, 20%)";
const boxShadow = "hsl(249, 68%, 29%)";
const cardBackground = "hsl(228, 22%, 95%)";
const darkOrange = "hsl(32, 80%, 50%)";
const fontSize = "1.4rem";

//I USE STYLED COMPONENTS AS OUR STYLING TOOL

export const BadgeContainer = styled.div`
  font-family: "Spartan", sans-serif;
  font-size: ${fontSize};
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 90%;
  height: auto;
  margin: 4em auto;
  background-color: hsl(180, 31%, 95%);
  box-shadow: 0 0 20px 0 ${boxShadow};
  border-radius: 10px;

  &:hover {
    border-left: 6px solid ${primary};
  }

  @media (min-width: 1000px) {
    & {
      flex-direction: initial;
      align-items: center;
      max-width: 85%;
    }
  }
`;

export const Logo = styled.div`
  width: 70px;
  height: 70px;
  margin-left: .5rem;
  margin-top: -45px;
  background: url(${({ url }) => process.env.PUBLIC_URL + url});}
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (min-width: 1000px) {
    & {
      margin: initial;
      margin-left: 1rem;
      width: 150px;
      height: 150px;
      background-size: contain;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  width: 85%;
  padding: 1em;

  @media (min-width: 1000px) {
    & {
      max-width: 30%;
    }
  }
`;

export const Position = styled.h1`
  margin-bottom: 1rem;
  font-size: 1.3rem;
  color: ${darkOrange};

  &:hover {
    cursor: pointer;
    color: ${primary};
  }
`;

export const TopCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  .tag {
    border-radius: 1rem;
    border: none;
    margin-left: 1em;
    padding: 0.5em;
    background-color: ${primary};
    color: ${lightGrayishCyan};
    font-weight: bold;
  }

  .featured {
    background-color: ${veryDarkGrayishCyan};
  }

  .company {
    color: ${primary};
    font-weight: bold;
  }
`;

export const Misc = styled.div`
  display: flex;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  font-size: 1rem;
  color: ${primary};
  border-bottom: 1px solid ${darkGrayishCyan};

  .misc {
    margin: 0 0.3rem;
  }

  .misc:nth-child(2):before {
    content: ".";
    margin-right: 0.7rem;
    font-weight: bold;
  }

  .misc:nth-child(2):after {
    content: ".";
    margin-left: 0.7rem;
    font-weight: bold;
  }

  @media (min-width: 1000px) {
    border: initial;
    margin: initial;
  }
`;

export const Tags = styled.div`
  padding: 0 1em;
  width: 85%;

  .tag {
    margin-right: 1rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 5px;
    padding: 0.5em 0.6em;
    background-color: ${purplishClear};
    color: ${primary};
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
  }

  .tag:hover {
    background-color: ${primary};
    color: ${lightGrayishCyan};
  }

  .tag:active {
    transform: scale(0.9);
  }

  @media (min-width: 1000px) {
    & {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      max-width: 80%;
    }
  }
`;

export const Header = styled.div`
  position: relative;
  background: url(${process.env.PUBLIC_URL + "/images/bg-header-desktop.svg"});
  background-repeat: no-repeat;
  background-size: cover;
  height: 20vh;
  width: 100%;
  margin-bottom: 10rem;
  background-color: ${primary};
`;

export const CurrentTags = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 80%;
  height: auto;
  padding: 0.3em;
  top: 17vh;
  left: 10%;
  right: 10%;
  background-color: white;
  box-shadow: 0 0 20px 0 ${boxShadow};
  border-radius: 10px;

  @media (max-width: 700px) {
    & {
      top: 10vh;
    }
  }
`;

export const DisplayedTags = styled.button`
  margin: 0.5rem 1rem;
  height: 2rem;
  color: ${primary};
  font-size: 1rem;
  font-weight: bold;
  background-color: ${lightGrayishCyan2};
  border: none;
  border-radius: 10px;
`;

export const CloseButton = styled.span`
  cursor: pointer;
  padding: 0.2em 0.4em;
  margin-left: 0.4em;
  border-radius: 5px;
  color: ${lightGrayishCyan};
  background-color: ${primary};

  &:hover {
    background-color: ${purplishClear};
  }
`;
