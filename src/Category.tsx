import {Question} from "./quiz/QuestionShape";
import {Quiz} from "./quiz/Quiz";
import React, {useState} from "react";
import "./Category.css"

type CategoryProps = {
    name: string,
    children: JSX.Element | JSX.Element[],
    questionSet: Question[],
    id: string,
    onExit: () => void
}

export default function Category(props: CategoryProps) {
    const [quizOpen, setQuizOpen] = useState(false);

    const [stars, setStars] = useState(() => {
        const stars = parseInt(localStorage.getItem(props.id + "_stars") || "")
        return !isNaN(stars) ? stars : -1;
    });


    const resultHandler = (score: number, correct: number) => {
        const total = props.questionSet.length;
        const newStars = Math.floor(correct / total * 3);
        if (newStars > stars) {
            setStars(newStars);
            localStorage.setItem(props.id + "_stars", newStars.toString())
        }
        setQuizOpen(false);
    }

    let content: JSX.Element;

    if (quizOpen) {
        content = <Quiz questionSet={props.questionSet} onEnded={resultHandler}/>;
    } else {

        const starCountLight = stars
        const starCountDark = 3 - stars

        content = <>
            <div className={"quiz-bar"}>
                <button onClick={() => setQuizOpen(true)}>Try Quiz</button>
                {stars >= 0 && <StarBar light={starCountLight} dark={starCountDark}/>}
            </div>

            <div>{props.children}</div>
        </>
    }

    return (
        <div className={"details-page"}>
            <div className={"body"}>
                <button className={"world-map-button"} onClick={() => props.onExit()}>Back to World Map</button>
                <h2>{props.name}</h2>
                {content}
            </div>
        </div>
    )

}

type StarBarProps = {
    light: number,
    dark: number,
}

function StarBar(props: StarBarProps) {

    const stars: JSX.Element[] = []

    for (let i = 0; i < props.light; i++) {
        stars.push(<span className={"star light"}>★</span>)
    }
    for (let i = 0; i < props.dark; i++) {
        stars.push(<span className={"star dark"}>★</span>)
    }


    return <div className={"star-bar"}>
        You achieved: {stars}
        ({props.light}/3)
    </div>
}
