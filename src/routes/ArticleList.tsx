import React from "react";
import styled from "styled-components";
import { articles } from "../static/test";
import { ArticlePreview } from "../interfaces";

const Table = styled.table`
  background: white;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  border-bottom: 3px solid rgba(0, 0, 0, 0.3);
`;

const TableBody = styled.tbody``;

const TableResource = styled.tr`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const TableHeaderData = styled.th``;

const TableData = styled.td`
  padding: 1rem;
`;

const TitleData = styled(TableData)`
  min-width: 20rem;
  text-align: left;
`;

const CreatedAtData = styled(TableData)`
  min-width: 10rem;
  text-align: right;
`;

interface Props {
  articles: ArticlePreview[];
}

interface State {}

export default function ArticleList<Props, State>() {
  return (
    <Table>
      <TableHeader>
        <TableResource>
          <TitleData>Title</TitleData>
          <CreatedAtData>CreatedAt</CreatedAtData>
        </TableResource>
      </TableHeader>
      <TableBody>
        {articles.map(({ title, createdAt }) => (
          <TableResource>
            <TitleData>{title}</TitleData>
            <CreatedAtData>{createdAt}</CreatedAtData>
          </TableResource>
        ))}
      </TableBody>
    </Table>
  );
}

ArticleList.defaultProps = articles;
