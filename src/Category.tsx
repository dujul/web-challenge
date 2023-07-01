import {Question} from "./quiz/QuestionShape";
import {Quiz} from "./quiz/Quiz";
import {useState} from "react";
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
        content = <>
            <button onClick={() => setQuizOpen(true)}>open quiz</button>
            <div>Number of stars: {stars}</div>
            <button onClick={() => props.onExit()}>Back to Map</button>
            <div>{props.children}</div>
        </>
    }

    return (
        <div className={"details-page"}>
            <div className={"body"}>
                <h2>{props.name}</h2>
                {content}
            </div>
        </div>
    )

}
