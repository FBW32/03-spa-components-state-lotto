import React from "react";
import Lotto from "./Lotto";
import Box from "./Box";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", fontSize: "60px" }}>Lotto 6/49 </h1>
      <p style={{ textAlign: "center", fontSize: "40px" }}>
        Generating Lucky numbers
      </p>
      <div>
        <Lotto />
      </div>
    </div>
  );
}

export default App;
