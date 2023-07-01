import {EXAMPLE_QUIZ} from "./quiz/data";
import Category from "./Category";
import React from "react";
import {Question} from "./quiz/QuestionShape";
import WikiArticle from "./WikiArticle";

type TropicalRainForestProps = {
    onExit: () => void
}
export default function TropicalRainForest(props: TropicalRainForestProps) {
    return <Category name={"Tropical Rainforest"} questionSet={QUIZ} id="tropical_rainforest" onExit={() => props.onExit()}>
        <iframe className={"bound-frame"} src="https://en.wikipedia.org/w/index.php?title=Tropical_rainforest&printable=yes"></iframe>
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