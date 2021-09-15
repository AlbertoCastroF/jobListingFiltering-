//IMPORTING FROM STYLED COMPONENTS ALL OF THE IMPORTANT SECTIONS FOR CARD COMPONENT

import {
  BadgeContainer,
  Logo,
  Card,
  TopCard,
  Misc,
  Position,
  Tags,
  Header,
  CurrentTags,
  DisplayedTags,
  CloseButton,
} from "./styles/badge";

//HERE ARE ALL THE ELEMENTS TO BUILD OUR PAGE ALL CONTAINED WITHIN BADGE

function Badge({ children, ...restProps }) {
  return <BadgeContainer>{children}</BadgeContainer>;
}

Badge.Logo = function BadgeLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};

Badge.Card = function BadgeCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

Badge.Position = function BadgePosition({ children, ...restProps }) {
  return <Position {...restProps}>{children}</Position>;
};

Badge.TopCard = function BadgeTopCard({ children, ...restProps }) {
  return <TopCard {...restProps}>{children}</TopCard>;
};

Badge.Misc = function BadgeMisc({ children, ...restProps }) {
  return <Misc {...restProps}>{children}</Misc>;
};

Badge.Tags = function BadgeTags({ children, ...restProps }) {
  return <Tags {...restProps}>{children}</Tags>;
};

Badge.Header = function BadgeHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Badge.CurrentTags = function BadgeCurrentTags({ children, ...restProps }) {
  return <CurrentTags {...restProps}>{children}</CurrentTags>;
};

Badge.DisplayedTags = function BadgeDisplayedTags({ children, ...restProps }) {
  return <DisplayedTags {...restProps}>{children}</DisplayedTags>;
};

Badge.CloseButton = function BadgeCloseButton({ children, ...restProps }) {
  return <CloseButton {...restProps}>{children}</CloseButton>;
};

export default Badge;
