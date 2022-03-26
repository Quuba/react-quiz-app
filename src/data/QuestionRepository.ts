import Question from "../components/QuizPage/Question";
import question from "../components/QuizPage/Question";

interface IQuestion {
    id: number;
    question: string;
    answers: IAnswer[];
}

interface IAnswer {
    id: number
    text: string;
    isCorrect: boolean;
}

class QuestionClass implements IQuestion {
    answers: IAnswer[];
    id: number;
    question: string;


    constructor(answers: IAnswer[], id: number, question: string) {
        this.answers = answers;
        this.id = id;
        this.question = question;
    }
}

class AnswerClass implements IAnswer {
    id: number;
    isCorrect: boolean;
    text: string;

    constructor(id: number, correct: boolean, text: string) {
        this.id = id;
        this.isCorrect = correct;
        this.text = text;
    }

}


class QuestionRepository {
    public static get questionCount(){
        return this.questions.length;
    };

    public static At(index:number){
        let answers: IAnswer[] = [];
        this.questions[index].answers.map((ans) => answers.push(
            new AnswerClass(ans.id, ans.isCorrect, ans.text)
        ))

        let question = new QuestionClass(answers, this.questions[index].id, this.questions[index].question)

        question.question = this.questions[index].question;

        return question;
    }

    public static GetRandomQuestion() {
        //TODO: implement this shit

    }



    public static EmptyQuestion(){
        let answers:IAnswer[] = [
            new AnswerClass(0, false, ""),
            new AnswerClass(0, false, ""),
            new AnswerClass(0, false, ""),
            new AnswerClass(0, false, ""),
        ]
        return new QuestionClass(answers, 0, "");
    }





    private static questions = [
        {
            id: 0,
            question: 'What is the airspeed velocity of an unladen swallow?',
            answers: [
                {
                    id: 0,
                    text: 'about 24 miles per hour',
                    isCorrect: true,
                },
                {
                    id: 1,
                    text: 'African or european swallow?🤔',
                    isCorrect: false,
                },
                {
                    id: 2,
                    text: 'ehh 25',
                    isCorrect: false,
                },
                {
                    id: 3,
                    text: 'mom pick me up im scrd',
                    isCorrect: false,
                },
            ],
        },
        {
            id: 1,
            question: 'Za ile Judasz sprzedał Jezusa?',
            answers: [
                {
                    id: 0,
                    text: '2 ziko',
                    isCorrect: false,
                },
                {
                    id: 1,
                    text: 'pisont groszy',
                    isCorrect: false,
                },
                {
                    id: 2,
                    text: 'około 370 dolarów amerykańskich',
                    isCorrect: true,
                },
                {
                    id: 3,
                    text: '3 ojro',
                    isCorrect: false,
                },
            ],
        },
        {
            id: 2,
            question: 'Ile rogów miał hełm przeciętnego wikinga',
            answers: [
                {
                    id: 0,
                    text: '0',
                    isCorrect: true,
                },
                {
                    id: 1,
                    text: '1',
                    isCorrect: false,
                },
                {
                    id: 2,
                    text: '2',
                    isCorrect: false,
                },
                {
                    id: 3,
                    text: '3',
                    isCorrect: false,
                },
            ],
        }
    ]


};

export {QuestionRepository};
export type {IAnswer, IQuestion};
