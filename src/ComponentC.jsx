import { createContext, useContext } from "react";
import { FirstName } from "./App";

// const FirstName = createContext(Second);

const ComponentC = (props) => {
  //   const firstName = useContext(FirstName);
  const desc = useContext(FirstName);

  return (
    <div>
      <h1>{desc.name}</h1>

      {/*<h1>Hallo {props.hallo}</h1>*/}

      {/* <FirstName.Consumer>
        {({ name, lastName, email }) => {
          return (
            <>
              <h1> My name is : {name} </h1>
              <h2> My last name is : {lastName} </h2>
              <h3> My email is : {email} </h3>
            </>
          );
        }}
      </FirstName.Consumer> */}
    </div>
  );
};

export default ComponentC;
