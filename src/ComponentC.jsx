import {FirstName} from "./App";

const ComponentC = (props) => {
    return (
        <>
            {/*<h1>Hallo {props.hallo}</h1>*/}

            <FirstName.Consumer>
                {({name, lastName, email}) => {
                    return (
                        <>
                          <h1>  My name is : {name} </h1>
                          <h2>  My last name is : {lastName} </h2>
                          <h3>  My email  is : {email} </h3>
                        </>
                    )
                }}
            </FirstName.Consumer>


        </>
    )
}

export default ComponentC
