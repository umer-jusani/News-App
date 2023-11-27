import React, { useContext } from "react";
import Stories from "./Components/Stories";
import Search from "./Components/Search";
import Pagination from "./Components/Pagination";
import "./App.css";

function App() {
  return (
    <div>
      <Search />
      <Pagination />
      <Stories />
    </div>
  );
}

export default App;
