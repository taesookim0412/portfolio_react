import {Triangle} from "../../Triangle/Triangle";
import {useAppSelector} from "../../app/hooks";
import {selectTriangleState} from "../../features/ActiveTriangle/ActiveTriangleSlice";

export function Landing() {
    const triangleState = useAppSelector(selectTriangleState)
    //home projects about
    return (
        <>
            <div style={{top: "0", position: "absolute", zIndex: triangleState==="projects" ? 1:1}}>
                <Triangle position={"top-left"} innerText={"projects"}/>
            </div>
            <div style={{position: "absolute", top: "0%", transform: "scaleY(-1)", zIndex: triangleState==="about" ? 1:0}}>
                <Triangle position={"bottom-left"} innerTextStyle={{transform: "scaleY(-1)"}} innerText={"about me"}/>
            </div>
            {/*<div style={{top: "15%", left: "calc(90vw - 622px)", position: "absolute", zIndex: triangleState==="home" ? 1:0}}>*/}
            {/*    <Triangle position={"top-right"} innerText={"Tae Soo T Kim"}/>*/}
            {/*</div>*/}
        </>
    )

}
