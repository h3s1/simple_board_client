import React, { useState } from "react";
import { GlobalStyle } from "./global-styles";
import styled from "styled-components";
import { Router } from "./Router";
import { HashRouter, Link } from "react-router-dom";

// This is example of styled-components
const Container = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TabList = styled.ul``;

const Tab = styled.li``;

function App() {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Container className="App">
          <TabList>
            <Tab>
              <Link to="/">Home</Link>
            </Tab>
            <Tab>
              <Link to="/post">Post</Link>
            </Tab>
            <Tab>
              <Link to="/1">Detail</Link>
            </Tab>
          </TabList>
          <Router />
        </Container>
      </HashRouter>
    </>
  );
}

export default App;
