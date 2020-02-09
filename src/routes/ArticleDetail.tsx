import React from "react";
import styled from "styled-components";
import { Article } from "../interfaces";
import { articleDetail } from "../static/test";

interface Props {
  article: Article;
}

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

const Title = styled.div`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 0.5px solid grey;
`;

const Date = styled.div`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 0.5px solid grey;
`;

const Content = styled.div`
  width: 100%;
  padding: 1rem;
  min-height: 20rem;
  border: 0.5px solid grey;
`;

export default function ArticleDetail<Props, State>({
  title,
  createdAt,
  content
}) {
  return (
    <Container>
      <Title>제목: {title}</Title>
      <Date>날짜: {createdAt}</Date>
      <Content>내용: {content}</Content>
    </Container>
  );
}

ArticleDetail.defaultProps = articleDetail;
