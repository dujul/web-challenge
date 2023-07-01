import {EXAMPLE_QUIZ} from "./quiz/data";
import Category from "./Category";
import React from "react";
import {Question} from "./quiz/QuestionShape";

type TropicalRainForestProps = {
    onExit: () => void
}
export default function TropicalRainForest(props: TropicalRainForestProps) {
    return <Category name={"Tropical Rainforest"} questionSet={QUIZ} id="tropical_rainforest" onExit={() => props.onExit()}>
        <div>TEST</div>
    </Category>
}

const QUIZ: Question[] = [
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
