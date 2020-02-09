import React from "react";
import styled from "styled-components";

interface Props {}

interface State {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background-color: white;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);
  min-width: 30rem;
  padding: 0.5rem;
`;

const Title = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 0.5px solid grey;
`;

const Content = styled.textarea`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  min-height: 20rem;
  border: 0.5px solid grey;
`;

const Submit = styled.button`
  padding: 0.5rem;
  border: 0.5px solid grey;
`;

export default function ArticlePost<Props, State>() {
  return (
    <Container>
      <Title placeholder="enter title..." />
      <Content placeholder="enter content..." />
      <Submit>Submit</Submit>
    </Container>
  );
}
