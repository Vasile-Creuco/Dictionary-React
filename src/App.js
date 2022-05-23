import React from "react";
import AddWord from "./AddWords";
import SearchWord from "./SearchWord";

function App() {
  const dictionary = [];
  return (
    <div className="list">
      <h1>Dictionary</h1>
      <AddWord array={dictionary}/>
      <SearchWord array={dictionary}/>
    </div>
  );
}

export default App;