import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
// import Cart from "./Components/Cart";
// import Register from "./Components/Register";
// import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      {/* <Routes>
        <Route path="/register" Component={Register} />
        <Route path="/cart" Component={Cart} />
      </Routes> */}
      <Main />
      <Footer />
    </>
  );
}

export default App;
