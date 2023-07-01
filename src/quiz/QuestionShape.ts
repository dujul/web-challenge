export type Question = TextQuestion | ImageQuestion


export type TextQuestion = {
    type: "text",
    data: TextQuestionData
}

export type TextQuestionData = {
    question: string,
    answer: string,
    decoys: [string, string, string] // Similar to string[] but only with 3 array elements
}

export type ImageQuestion = {
    type: "image"
}

export type ImageQuestionData = {
    // TODO: add data here
}
