import React from "react";
import MyHeader from "./components/MyHeader";
import ThemeContainer from "./ThemeContainer";

function App() {
  return (
    // Common Theme
    <ThemeContainer>
      <MyHeader>Styled Components FYI!</MyHeader>
    </ThemeContainer>
  );
}

export default App;
