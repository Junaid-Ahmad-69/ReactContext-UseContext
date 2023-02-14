import ComponentC from "./ComponentC";

const ComponentB = ({hallo}) => {
    return (
        <div>
            <ComponentC hallo={hallo}/>
        </div>
    )
}

export default ComponentB
