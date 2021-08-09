import {Triangle} from "../../Triangle/Triangle";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectTriangleState, setHome, setProjects} from "../../features/ActiveTriangle/ActiveTriangleSlice";
import "./EmptyLanding.scss"
export function EmptyLanding() {
    const dispatch = useAppDispatch()
    const triangleState = useAppSelector(selectTriangleState)
    //TODO: Modularize this or make this a state. !TEMPORARY
    document.addEventListener("scroll", (e) => {
        const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        if (window.pageYOffset >= vh * 0.3){
            const elem = document.getElementsByClassName("triangle__layout")[0] as HTMLDivElement;
            const otherElem = document.getElementsByClassName("layout__nested")[0] as HTMLDivElement;
            if (!elem.classList.contains("active") && !otherElem.classList.contains("active")){
                (document.getElementsByClassName("preview_img")[0] as HTMLDivElement).style.setProperty("visibility", "hidden")
                dispatch(setProjects())
                elem.classList.add("active");
                elem.classList.add("active--2");
                otherElem.classList.add("active");
                otherElem.classList.add("active--2");
                window.scrollTo({top: vh, behavior:"smooth"})
                setTimeout(() => (document.getElementsByClassName("preview_img")[0] as HTMLDivElement).style.setProperty("visibility", "visible"), 1500);
            }
        }
        else if (window.pageYOffset < vh * 0.3){
            const elem = document.getElementsByClassName("triangle__layout")[0] as HTMLDivElement;
            const otherElem = document.getElementsByClassName("layout__nested")[0] as HTMLDivElement;
            if (elem.classList.contains("active") && otherElem.classList.contains("active")){
                dispatch(setHome())
                elem.classList.remove("active");
                elem.classList.remove("active--2");
                otherElem.classList.remove("active");
                otherElem.classList.remove("active--2");
                (document.getElementsByClassName("preview_img")[0] as HTMLDivElement).style.setProperty("visibility", "hidden")
                window.scrollTo({top:0, behavior: 'smooth'})
            }
        }
    })
    //home projects about
    return (
        <div className={"block"}>
            <div className="container">
                <a id={"full"}>
                    <div className="arrow" onClick={() => { window.scrollTo({top: Math.max(document.documentElement.clientHeight, window.innerHeight || 0), behavior: 'smooth' }) }}/>
                </a>
            </div>
        </div>
    )

}
