interface IQuestion {
    id: number;
    questionText: string;

    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;

    correct1: boolean;
    correct2: boolean;
    correct3: boolean;
    correct4: boolean;
}

// {
// "questionText":"cool beans",
// "answer1":null,
// "answer2":null,
// "answer3":null,
// "answer4":null,
// "correct1":false,
// "correct2":false,
// "correct3":false,
// "correct4":false
// }

interface IAnswer {
    id: number
    text: string;
    isCorrect: boolean;
}

class Answer implements IAnswer {
    id: number;
    isCorrect: boolean;
    text: string;

    constructor(id: number, isCorrect: boolean, text: string) {
        this.id = id;
        this.isCorrect = isCorrect;
        this.text = text;
    }
}


export {Answer};
export type {IAnswer, IQuestion};
