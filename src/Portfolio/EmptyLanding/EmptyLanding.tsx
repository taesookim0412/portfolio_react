import {Triangle} from "../../Triangle/Triangle";
import {useAppSelector} from "../../app/hooks";
import {selectTriangleState} from "../../features/ActiveTriangle/ActiveTriangleSlice";
import "./EmptyLanding.scss"
export function EmptyLanding() {
    const triangleState = useAppSelector(selectTriangleState)
    //home projects about
    return (
        <div className={"block"}>
            <div className="container">
                <a id={"full"}>
                    <div className="arrow"></div>
                </a>
            </div>
        </div>
    )

}
