import React, {FC} from 'react';
import AnswerButton from "./AnswerButton";
import {IAnswer} from "../data/QuestionRepository";

interface AnswerBoxProps {
    answers: IAnswer[];
    onCorrectAnswer: any;
    onWrongAnswer: any;
}

const AnswerBox: FC<AnswerBoxProps> = (props) => {

    const checkAnswer = (isCorrect: boolean) =>{
        if(isCorrect){
            props.onCorrectAnswer();
        }else{
            props.onWrongAnswer();
        }
    }

    return (
        <div className='AnswerBox'>
            {props.answers.map(
                (answer) =>
                    <AnswerButton
                        key={answer.id}
                        answerText={answer.text}
                        isCorrect={answer.isCorrect}
                        checkAnswer={checkAnswer}
                    />
            )}
        </div>
    );
};

export default AnswerBox;