/* eslint-disable no-unused-expressions */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import PostAnn from './components/PostAnn';
import Header from './components/Header';


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Container = styled.div`
  width: 100%;
  height: calc(100% - 70px);
  position: relative;
  top: 250 px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Home() {
  return (
    <div>
      <h1>home page</h1>
    </div>
  );
}
function DataFetching() {
  return (
    <BrowserRouter basename="/official-site">
      <Wrapper>
        <Header />
        <Container className="container mt-5">
          <Switch>
            <Route path="/PostAnn" component={PostAnn} />
            <Route path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </Container>
      </Wrapper>
    </BrowserRouter>
  );
}


export default DataFetching;
