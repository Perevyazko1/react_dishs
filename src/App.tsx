import React from 'react';
import './App.css';

import {
    BrowserRouter,
    Route, Routes,
} from "react-router-dom";
import RecipeListRu from "./components/RecipeListRu";
import RecipeListKz from "./components/RecipeListKz";
import RecipeListUsa from "./components/RecipeListUsa";
import RecipeList from "./components/RecipeList";
import Recipe from "./components/Recipe";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar fixed='top' bg="dark" variant="dark">
                <Container>
                  <Navbar.Brand href="/">Рецепты мира</Navbar.Brand>
                  <Nav className="me-auto">
                        <Nav.Link href="/ru">Русская кухня</Nav.Link>
                        <Nav.Link href="/kz">Казахская кухня</Nav.Link>
                        <Nav.Link href="/us">Американская кухня</Nav.Link>
                  </Nav>
                </Container>
            </Navbar>
             <Routes>
                <Route path="/ru" element={<RecipeListRu/>}/>
                <Route path="/kz" element={<RecipeListKz/>}/>
                <Route path="/us" element={<RecipeListUsa/>}/>
                <Route path="/" element={<RecipeList/>}/>
                <Route path="/recipe/:paramsId" element={<Recipe/>}/>
             </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
