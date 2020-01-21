import React from "react";
import { Route, Switch } from "react-router-dom";
import ArticleList from "./routes/ArticleList";
import ArticlePost from "./routes/ArticlePost";
import ArticleDetail from "./routes/ArticleDetail";

interface Props {}

export const Router: React.SFC<Props> = () => (
  <Switch>
    <Route path="/post" component={ArticlePost} />
    <Route path="/:articleId" component={ArticleDetail} />
    <Route path="/" component={ArticleList} />
  </Switch>
);
