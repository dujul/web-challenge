import {Question} from "./QuestionShape";
import {TextQuestion} from "./TextQuestion";

type RouterProps = {
    question: Question,
    onCorrect: () => void,
    onWrong: () => void,
    onContinue: () => void,
}

export function QuestionRouter(props: RouterProps) {
    const question = props.question;

    if(question.type === "text") {
        return <TextQuestion data={question.data} onCorrect={props.onCorrect} onWrong={props.onWrong} onContinue={props.onContinue}/>
    } /* else if(question.type === "image") {
        return <ImageQuestion data={question.data} onCorrect={props.onCorrect} onWrong={props.onWrong}/>
    }
    */
    return <div>Unhandled question type detected</div>
}
