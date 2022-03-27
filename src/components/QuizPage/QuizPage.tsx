import React, {FC} from 'react';
import Question from "./Question";
import AnswerBox from "./AnswerBox";
import {Answer, IAnswer} from "../../data/QuestionRepository";

interface QuizPageProps {
    questionData: any;
    onCorrectAnswer: any;
    onWrongAnswer: any;
}


function getAnswers(questionData: any): IAnswer[] {
    let answers: IAnswer[];

    answers = [
        new Answer(0, questionData.correct1, questionData.answer1),
        new Answer(1, questionData.correct2, questionData.answer2),
        new Answer(2, questionData.correct3, questionData.answer3),
        new Answer(3, questionData.correct4, questionData.answer4),
    ];

    // answer1: "a",
    //     answer2: "b",
    //     answer3: "c",
    //     answer4: "d",
    //     correct1: false,
    //     correct2: false,
    //     correct3: false,
    //     correct4: false,
    //     id: 0,
    //     questionText: "henlow"
    return answers;
}

const QuizPage: FC<QuizPageProps> = (props) => {
    // props.reloadQuestion();
    return (
        <div className='QuizPage'>
            <Question text={props.questionData.questionText}/>
            <AnswerBox answers={getAnswers(props.questionData)} onCorrectAnswer={props.onCorrectAnswer}
                       onWrongAnswer={props.onWrongAnswer}/>
        </div>
    );
};

QuizPage.defaultProps = {
    questionData: {
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correct1: false,
        correct2: false,
        correct3: false,
        correct4: false,
        id: 0,
        questionText: "loading..."
    }
}

export default QuizPage;