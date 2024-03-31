import React from "react";
import Header from "./components/Header.jsx";
import Header2 from "./components/Header2.jsx";
import Bannner from "./components/Bannner.jsx";
import RecommendedShows from "./components/RecommendedShows.jsx";
import Upcomingevents from "./components/Upcomingevents.jsx";

function App() {
  return (
    <div className="h-full w-full">
      <Header />
      <Header2 />
      <Bannner />
      <RecommendedShows />
      <Upcomingevents />
    </div>
  );
}

export default App;
