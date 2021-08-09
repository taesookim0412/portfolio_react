import {Triangle} from "../../Triangle/Triangle";
import {useAppSelector} from "../../app/hooks";
import {selectTriangleState} from "../../features/ActiveTriangle/ActiveTriangleSlice";
import "./EmptyLanding.scss"
export function EmptyLanding() {
    const triangleState = useAppSelector(selectTriangleState)
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    //home projects about
    return (
        <div className={"block"}>
            <div className="container">
                <a id={"full"}>
                    <div className="arrow" onClick={() => { window.scrollTo({top: vh, behavior: 'smooth' }) }}/>
                </a>
            </div>
        </div>
    )

}
