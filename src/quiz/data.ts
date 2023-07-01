import {Question} from "./QuestionShape";

export const EXAMPLE_QUIZ: Question[] = [
    {
        type: "text",
        data: {
            question: "Are you a cat",
            answer: "No Im a Panda",
            decoys: [
                "Yes",
                "No Im a Axolotl",
                "No Im a Seal",
            ]
        }
    },
    {
        type: "text",
        data: {
            question: "Are you a cat2",
            answer: "No Im a Panda",
            decoys: [
                "Yes",
                "No Im a Axolotl",
                "No Im a Seal",
            ]
        }
    },
]
