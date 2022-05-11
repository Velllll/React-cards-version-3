import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import styled from 'styled-components'
import Collection from './pages/Collection'
import Cards from './pages/Cards'
import NotFound from './pages/NotFound'
import Info from './pages/Info'
import { useState } from "react";
import EditPage from "./pages/EditPage";

const Wrapper = styled.div`
    max-width: 850px;
    margin: 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <Header/>
      <Routes>
        <Route path={'/'} element={<Info/>}/>
        <Route path={'/collection'} element={<Collection />}/>
        <Route path={'/collection/:id'} element={<Cards/>}/>
        <Route path={'/edit/:id'} element={<EditPage/>}/>
        <Route path={'*'} element={<NotFound/>}/>
      </Routes>
    </Wrapper>
    
  );
}

export default App;
