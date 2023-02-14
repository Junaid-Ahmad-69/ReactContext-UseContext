import React, {createContext} from 'react'
import ComponentA from "./ComponentA";

const FirstName = createContext({
    name: "John",
    lastName: "Doe",
    email: "john@example.com",
    }

);

const App = () => {

    const SecondName = {
        name: "John",
        lastName: "Doe",
        email: "john@example.com",
    }
    return (
        <>
            {/*<ComponentA hallo="hallo2"/>*/}


            <FirstName.Provider value={}>
                <ComponentA/>
            </FirstName.Provider>
        </>
    )
}

export default App;
export {FirstName};
