import ComponentB from "./ComponentB";

const ComponentA = ({hallo}) => {
    return (
        <div>
            <ComponentB hallo={hallo}/>
        </div>
    )
}

export default ComponentA
