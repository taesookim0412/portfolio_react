import "./Triangle.scss"
type TriangleProps = {
    outer?:{

    },
    inner?:{
        id: string;

}
}

export function Triangle(props:any){
    return (
        <div style={props.outer} id={"triangle__outer"}>
            <div id={props.inner.id}/>
            {/*<div id={"triangle__inner"}/>*/}

        </div>
    )
}
