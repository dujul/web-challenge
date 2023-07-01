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
            question: "Which layer is unique to tropical rainforests?",
            answer: "emergent layer",
            decoys: [
                "canopy layer",
                "understory layer",
                "forest floor",
            ]
        }
    },
    {
        type: "text",
        data: {
            question: "What is NOT a major climatic parameter to characterize equatorial climate",
            answer: "carbon dioxide concentration",
            decoys: [
                "temperature",
                "rainfall",
                "dry season intensity",
            ]
        }
    },
]
