import React from "react";

import NavBar from "./components/NavBar";
import HomePage from "./containers/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;