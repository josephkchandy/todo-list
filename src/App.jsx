import { useState } from "react";
import "./App.css";
import Counter from "./components/counter";
import Card from "./components/card";
import Tasks from "./components/tasks";
import Navbar from "./components/navbar";
import About from "./components/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <header>
            <Navbar>
              <h1>Todo App</h1>
              <h2>This is my first application.</h2>
            </Navbar>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Tasks />} />
              <Route path="/about" element={<About />} />
              <Route path="/counter" element={<Counter />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
