import "./Triangle.scss"
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {
    decrementProject,
    FrameworkMap,
    frameworkMap, incrementProject,
    selectActiveFramework, selectActiveProject,
    selectTriangleState, setActiveFrameworkAndroid, setActiveFrameworkAngular, setActiveFrameworkReact,
    setProjects
} from "../features/ActiveTriangle/ActiveTriangleSlice";
import {Project} from "../Project/Project";
import {ReactLogo} from "../ReactLogo/ReactLogo";
import {AndroidLogo} from "../AndroidLogo/AndroidLogo";
import {AngularLogo} from "../AngularLogo/AngularLogo";

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

//top-left: projects
const stateMap = {"top-left": "projects", "top-right": "home", "bottom-left": "about"};
type ProjectMap = {
    'react': Project[],
    'angular': Project[],
    'android': Project[]
}
const projectsMap:ProjectMap = {
    react: [
        new Project("GroupShare", "Video Sharing Platform [YouTube].", "https://github.com/taesookim0412/GroupShare", "projects_previews/groupshare.gif", "http://54.177.13.144/")
    ],
    angular: [
        new Project("TkBlog", "Blog for images with admin panel [Blog].", "https://github.com/taesookim0412/TkBlog", "projects_previews/tkblog_home.png", "http://50.18.238.237/"),
        new Project("Annotation", "Image Segmentation Software [PixelAnnotationTool].", "", "projects_previews/annotation_dog.gif", "http://54.215.97.177/")
    ],
    android: [
        new Project("Category Trivia", "Category trivia application.", "https://github.com/taesookim0412/TriviaApp", "projects_previews/category_trivia.png", "https://appetize.io/app/gkdjcvc7e04pbaymd0rvaaeenc")
    ]
}

export function Triangle(props: TriangleProps) {
    const triangleState = useAppSelector(selectTriangleState)
    const activeFramework = useAppSelector(selectActiveFramework)
    const activeProject = useAppSelector(selectActiveProject)
    const dispatch = useAppDispatch()

    function handleClick(e: React.MouseEvent) {
        const elem = e.target as HTMLDivElement;
        const elemParent = elem.parentElement as HTMLDivElement;
        const classList = elemParent.classList;
        // const transition_duration = 1500

        if (!(classList.contains("active"))) {
            if (props.position === "top-left") {
                dispatch(setProjects())
            }
            new Promise<void>((resolve) => setTimeout(() => resolve(), 0)).then(res => {
                classList.add("active")
                classList.add("active--2")
                // setTimeout(() => {
                //         classList.add("active--2")
                //     }
                //     , transition_duration)
            })
        }
    }


    const frameworksList = triangleState === "projects" ? (
        <>
            {/*<div onClick={() => { dispatch(setActiveFrameworkReact()) }} className={"layout__nested__projects__block"} style={{*/}
            {/*    backgroundImage: "url('icons/react.png')"*/}
            {/*}}>*/}
            <div onClick={() => {dispatch(setActiveFrameworkReact())}} className={"layout__nested__projects__block"}>
                <ReactLogo/>
            </div>
            <div onClick={() => { dispatch(setActiveFrameworkAngular()) }} className={"layout__nested__projects__block"}>
                <AngularLogo/>
            </div>
            <div onClick={() => { dispatch(setActiveFrameworkAndroid()) }} className={"layout__nested__projects__block"}>
                <AndroidLogo/>
            </div>
        </>
    ) : ""

    const projectTree = (<div className={"layout__nested"}>
        {frameworksList}
        {Object.entries(frameworkMap).map(entry => {
            const [index, framework] = entry;
            return activeFramework === index ? (
                <div className={"layout__nested__projects__tree__wrapper"}>
                    <div className={"layout__nested__projects__tree__block--summary"}>
                        {activeFramework === "0" ?
                            <div className={"layout__nested__projects__tree__block selected__framework"}>
                                <ReactLogo/>
                            </div>: ""}
                        {activeFramework === "1" ?
                            <div className={"layout__nested__projects__tree__block selected__framework"}>
                                <AngularLogo/>
                            </div>: ""}
                        {activeFramework === "2" ?
                            <div className={"layout__nested__projects__tree__block selected__framework"}>
                                <AndroidLogo/>
                            </div>
                            : ""}
                        <div id={"text-panel"}>
                            <span className={"button__arrow"} onClick={() => { dispatch(decrementProject()) }}>&#60;</span>
                            <span id={"title"}>{projectsMap[frameworkMap[activeFramework as keyof FrameworkMap] as keyof ProjectMap][parseInt(activeProject)].title}</span>
                            <span className={"button__arrow"} onClick={() => { dispatch(incrementProject(
                                projectsMap[frameworkMap[activeFramework as keyof FrameworkMap] as keyof ProjectMap].length
                            )) }}>&#62;</span><br/><br/><br/>
                            {projectsMap[frameworkMap[activeFramework as keyof FrameworkMap] as keyof ProjectMap][parseInt(activeProject)].github_url !== "" ?
                                <a id={"github"} target={"_blank"} href={projectsMap[frameworkMap[activeFramework as keyof FrameworkMap] as keyof ProjectMap][parseInt(activeProject)].github_url}>Github</a>
                                : ""
                            }
                        </div>
                    </div>
                    <div className={"layout__nested__projects__tree__block__big"}>
                        {(projectsMap[frameworkMap[activeFramework as keyof FrameworkMap] as keyof ProjectMap][parseInt(activeProject)].url !== "") ?
                            <a href={projectsMap[frameworkMap[activeFramework as keyof FrameworkMap] as keyof ProjectMap][parseInt(activeProject)].url} target={"_blank"}>
                                <img className={"preview_img"} src={projectsMap[frameworkMap[activeFramework as keyof FrameworkMap] as keyof ProjectMap][parseInt(activeProject)].preview_src}/>
                            </a>
                            :
                            <img className={"preview_img"} src={projectsMap[frameworkMap[activeFramework as keyof FrameworkMap] as keyof ProjectMap][parseInt(activeProject)].preview_src}/>}

                        {/*<img onClick={() => {*/}
                        {/*    if (projectsMap[frameworkMap[activeFramework as keyof FrameworkMap] as keyof ProjectMap][parseInt(activeProject)].url !== "")*/}
                        {/*        window.open(projectsMap[frameworkMap[activeFramework as keyof FrameworkMap] as keyof ProjectMap][parseInt(activeProject)].url, "_blank")*/}
                        {/*}}*/}
                        {/*     className={"preview_img"} src={projectsMap[frameworkMap[activeFramework as keyof FrameworkMap] as keyof ProjectMap][parseInt(activeProject)].preview_src}/>*/}
                        <div id={"description"}>{projectsMap[frameworkMap[activeFramework as keyof FrameworkMap] as keyof ProjectMap][parseInt(activeProject)].description}</div>
                    </div>
                    <div className={"layout__nested__projects__tree__block__spacer--bottom"}/>

                </div>
            ) : ""
        })}
    </div>);

    // @ts-ignore
    const data = ((triangleState === stateMap[props.position]) || (triangleState === stateMap["top-right"])) ? (
        <div onClick={(e) => {
            handleClick(e)
        }} className={"triangle__layout"}>
            <div style={props.innerTextStyle} id={"triangle__word"}>{props.innerText}</div>
            <div id={"triangle__inner"}/>
            {projectTree}
        </div>
    ) : ""


    return (
        <div id={"triangle__outer"} className={props.position}>
            {data}
        </div>
    )
}
