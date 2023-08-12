import React from "react";
import Navbar from "./navigation";
import Grid from "./grid";
import List from "./todo";
import Calculator from "./calci";
import Degree from "./degree";
import "../styles.css";
import DrawingCanvas from "./canvas";
import Login from "./login";
import Signup from "./signup";
import Profile from "./profile";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "reactstrap/lib/";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Grid />
              </>
            }
            />
            <Route
            path="/profile"
            element={
              <>
                <Navbar />
                <Profile/>
              </>
            }
            />

            <Route
            path="/login"
            element={
              <>
                <Navbar />
                <Login />
              </>
            }
          />
            <Route
            path="/signup"
            element={
              <>
                <Navbar />
                <Signup />
              </>
            }
          />
          <Route
            path="/todo"
            element={
              <>
                <Navbar />
                <List />
              </>
            }
          />
          <Route
            path="/calci"
            element={
              <>
                <Navbar />
                <Calculator />
              </>
            }
          />
          <Route
            path="/draw"
            element={
              <>
                <Navbar />
                <DrawingCanvas />
              </>
            }
          />
          <Route
            path="/degree"
            element={
              <>
                <Navbar />
                <Degree />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
