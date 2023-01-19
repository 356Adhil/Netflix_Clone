import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import Footer from "./Components/Footer/Footer";
import {
  originals,
  actions,
  horrors,
  Documentaries,
  romance,
  trending,
  comedy,
} from "./urls";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={trending} title="Trending" isSmall />
      <RowPost url={actions} title="Actions" isSmall />
      <RowPost url={horrors} title="Horrors" isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
      <RowPost url={romance} title="Romance" isSmall />
      <RowPost url={Documentaries} title="Documentaries" isSmall />
      <Footer />
    </div>
  );
}

export default App;
