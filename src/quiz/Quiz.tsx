import {Question} from "./QuestionShape";
import {useState} from "react";
import {QuestionRouter} from "./QuestionRouter";

type QuizProps = {
    questionSet: Question[]
}

type QuizStatus = "PREPARING" | "ANSWERING" | "RESULTS"

export function Quiz(props: QuizProps) {
    const [status, setStatus] = useState<QuizStatus>("PREPARING")

    // Amount of correct answers
    const [correct, setCorrect] = useState(0)
    const [score, setScore] = useState(0)

    const startQuiz = () => {
        setStatus("ANSWERING")

        // Just to make sure we clean up any scores
        setCorrect(0)
        setScore(0)
    }
    const addCorrectWithScore = (additionalScore: number) => {
        setCorrect(correct+1)
        setScore(score + additionalScore)
    }

    if(status === "PREPARING") {
        return <Prepare onStart={startQuiz}/>
    }


    if(status === "ANSWERING") {
        return <Answering questions={props.questionSet} onFinish={() => setStatus("RESULTS")} addCorrectWithScore={addCorrectWithScore}/>
    }


    if(status === "RESULTS") {
        return <Results correct={correct} score={score} total={props.questionSet.length}/>
    }

    return <p>UNREACHABLE CODE REACHED</p>
}


type PrepareProps = {
    onStart: () => void,
}
function Prepare(props: PrepareProps) {
    return <div>
        <button onClick={props.onStart}>Start Quiz</button>
    </div>
}

type AnsweringProps = {
    questions: Question[],
    onFinish: () => void,
    addCorrectWithScore: (score: number) => void,
}
function Answering(props: AnsweringProps) {

    const [currentQuestion, setCurrentQuestion] = useState(0)


    const nextQuestion = () => {
        const newIndex = currentQuestion + 1;

        // Did we reach the end of the quiz?
        if(newIndex >= props.questions.length) {
            props.onFinish();
            return
        }

        // Move to next question
        setCurrentQuestion(newIndex);
    }


    return <QuestionRouter
        question={props.questions[currentQuestion]}
        onCorrect={() => {
            props.addCorrectWithScore(1) // You could detect streaks and give a score multiplier
        }}
        onWrong={() => {/*Do nothing*/}}
        onContinue={nextQuestion}
    />
}


type ResultsProps = {
    score: number,
    correct: number,
    total: number,
}
function Results(props: ResultsProps) {
    return <div>
        <div>You scored: {props.score}</div>
        <div>Correct Answers: {props.correct}/{props.total}</div>
        {props.correct < props.total && <p>You are a failure!</p>}
    </div>
}
