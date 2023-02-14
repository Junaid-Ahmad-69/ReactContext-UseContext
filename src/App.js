import React, { createContext } from "react";
import ComponentA from "./ComponentA";

const FirstName = createContext({
  name: "John",
  lastName: "Doe",
  email: "john@example.com",
});

const App = () => {
  return (
    <>
      {/*<ComponentA hallo="hallo2"/>*/}

      <FirstName.Provider value={FirstName}>
        <ComponentA />
      </FirstName.Provider>
    </>
  );
};

export default App;
export { FirstName };
