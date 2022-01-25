import React from "react";
import styled from "styled-components";

export default function TitleCard() {
  return (
    <Container>
      <H1>Title Here</H1>
      <SubTitle>Subtitle</SubTitle>
    </Container>
  );
}

const Container = styled.div`
  // Styles go here.
`;

const H1 = styled.h1`
  // Styles here.
`;

const SubTitle = styled.h2`
  // CSS here!
`;
