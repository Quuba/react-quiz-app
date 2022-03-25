import React, {FC} from 'react';
import Question from "./Question";
import AnswerBox from "./AnswerBox";
import {IAnswer} from "../data/QuestionRepository";

interface QuizPageProps{
    question:string;
    answers:IAnswer[];
    onCorrectAnswer:any;
    onWrongAnswer:any;
}

const QuizPage:FC<QuizPageProps> = (props) => {
    // props.reloadQuestion();
    return (
        <div className='QuizPage'>
            <Question text={props.question}/>
            <AnswerBox answers={props.answers} onCorrectAnswer={props.onCorrectAnswer} onWrongAnswer={props.onWrongAnswer} />
        </div>
    );
};

export default QuizPage;