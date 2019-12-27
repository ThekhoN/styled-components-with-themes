import React from "react";
import Test from "./components/Test";
import ThemeContainer from "./ThemeContainer";

function App() {
  return (
    // Common Theme
    <ThemeContainer>
      <div className="App">
        <Test />
      </div>
    </ThemeContainer>
  );
}

export default App;
