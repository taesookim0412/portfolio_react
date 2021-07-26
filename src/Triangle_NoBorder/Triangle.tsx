import "./Triangle.scss"

type TriangleProps = {
    position: string,
    // outer?: {},
    // inner?: {
    //     id: string;
    // },
    innerTextStyle?: {
        transform: string;
    },
    innerText?: string;
}

export function Triangle(props: any) {
    function handleClick(e:React.MouseEvent){
        const elem = e.target as HTMLDivElement;
        const elemParent = elem.parentElement as HTMLDivElement;
        const classList = elemParent.classList;
        const transition_duration = 1500
        if (!(classList.contains("active"))){
            classList.add("active")
            setTimeout(() => {
                classList.add("active--2")}
                , transition_duration)
        }
    }
    return (
        <div id={"triangle__outer"} className={props.position}>
            <div onClick={(e) => { handleClick(e)}} className={"triangle__layout"}>
            <div style={props.innerTextStyle} id={"triangle__word"}>{props.innerText}</div>
            <div id={"triangle__inner"}/>
            <div id={"layout__nested"}>
                <div className={"layout__nested__projects__block"}>

                </div>

            </div>
            </div>
        </div>
    )
}
