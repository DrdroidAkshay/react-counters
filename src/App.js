import React from "react";
import BackwardCounter from "./components/BackwardCounter";
import ForwardCounter from "./components/ForwardCounter";

function App() {
  return (
    <React.Fragment>
      <ForwardCounter act={true} />
      <BackwardCounter act={false} />
    </React.Fragment>
  );
}

export default App;
