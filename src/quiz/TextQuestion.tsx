import {TextQuestionData} from "./QuestionShape";
import {useEffect, useState} from "react";
import "./TextQuestion.css"

type TextProps = {
    data: TextQuestionData
    onCorrect: () => void,
    onWrong: () => void,
    onContinue: () => void,
}

type QuestionStatus = "ANSWERING" | "REVEAL"


export function TextQuestion(props: TextProps) {

    const [answers, setAnswers] = useState<string[]>([])
    const [correctAnswer, setCorrectAnswer] = useState(-1)
    const [status, setStatus] = useState<QuestionStatus>("ANSWERING")
    const [selected, setSelected] = useState(-1)


    // This builds up a shuffled answers pool (would be way easier without shuffling)
    useEffect(() => {
        const newAnswers = [props.data.answer]
        newAnswers.push(...props.data.decoys)
        shuffle(newAnswers)

        // Reset all state values when a new question comes in in case react didn't clean up properly
        setCorrectAnswer(newAnswers.indexOf(props.data.answer)) // Find correct answer again
        setAnswers(newAnswers);
        setStatus("ANSWERING");
        setSelected(-1);
    }, [props.data.decoys, props.data.answer]) // Only call if question changes


    const pickAnswer = (index: number) => {

        if(status !== "ANSWERING") return

        setSelected(index)
        setStatus("REVEAL")
        if(index === correctAnswer) {
            props.onCorrect();
        } else {
            props.onWrong();
        }
    }


    return <div>
        <div>{props.data.question}</div>
        <ul>
            {answers.map((value, index) => (
                <li key={index}
                    className={`text-question ${correctAnswer === index ? "correct" : "decoy"} ${selected === index ? "selected" : ""} ${status === "REVEAL" ? "reveal" : "open"}`}
                >
                    {/* This runs for each answer. the class name could be 'correct selected reveal' when revealing and
                     'correct selected' when not. Do note that people can see the correct answer before revealing through
                     the html inspector with this approach*/}
                    <button onClick={() => pickAnswer(index)}>{value}</button>
                </li>
            ))}
        </ul>

        {status === "REVEAL" && <button onClick={props.onContinue}>continue to next</button>}
    </div>
}



// Adapted from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array: any[]) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
