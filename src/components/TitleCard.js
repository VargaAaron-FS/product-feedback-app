import React from "react";
import styled from "styled-components";

import BackgroundImage from "../images/title-card-bg.svg";

export default function TitleCard() {
  return (
    <Container>
      <H1>Product Feedback App</H1>
      <SubTitle>By Aaron Varga</SubTitle>
    </Container>
  );
}

const Container = styled.div`
  background-image: url("${BackgroundImage}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0.75rem;
  -moz-border-radius: .75rem;
  padding: 4rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  color: #fff;
  margin: 0;
  padding: 0;
  font-size: 1.25rem;
  font-weight: 700;
`;

const SubTitle = styled.h2`
  color: rgba(255,255,255,.75);
  margin: 0;
  padding: 0;
  font-size: 1rem;
`;
