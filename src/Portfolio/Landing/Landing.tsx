import {Triangle} from "../../Triangle/Triangle";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectTriangleState, setProjects} from "../../features/ActiveTriangle/ActiveTriangleSlice";

export function Landing() {
    const triangleState = useAppSelector(selectTriangleState)
    const dispatch = useAppDispatch()
    //home projects about
    //TODO: Modularize this or make this a state. !TEMPORARY
    document.addEventListener("scroll", (e) => {
        const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        if (window.pageYOffset > vh * 0.3){
            const elem = document.getElementsByClassName("triangle__layout")[0] as HTMLDivElement;
            const otherElem = document.getElementsByClassName("layout__nested")[0] as HTMLDivElement;
            if (!elem.classList.contains("active") && !otherElem.classList.contains("active")){
                dispatch(setProjects())
                elem.classList.add("active");
                elem.classList.add("active--2");
                otherElem.classList.add("active");
                otherElem.classList.add("active--2");
            }
        }
    })
    return (
        <>
            <div style={{top: "0", position: "absolute", zIndex: triangleState==="projects" ? 1:1}}>
                <Triangle position={"top-left"} innerText={"projects"}/>
            </div>
            {/*<div style={{position: "absolute", top: "0%", transform: "scaleY(-1)", zIndex: triangleState==="about" ? 1:0}}>*/}
            {/*    <Triangle position={"bottom-left"} innerTextStyle={{transform: "scaleY(-1)"}} innerText={"about me"}/>*/}
            {/*</div>*/}
            {/*<div style={{top: "15%", left: "calc(90vw - 622px)", position: "absolute", zIndex: triangleState==="home" ? 1:0}}>*/}
            {/*    <Triangle position={"top-right"} innerText={"Tae Soo T Kim"}/>*/}
            {/*</div>*/}
        </>
    )

}
