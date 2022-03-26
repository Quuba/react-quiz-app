import React, {FC} from 'react';

interface AnswerProps{
    answerText:string;
    isCorrect:boolean;

    checkAnswer:any;
}

const AnswerButton:FC<AnswerProps> = (props) => {
    return (
        <button className='AnswerButton' onClick={(e)=>props.checkAnswer(props.isCorrect)}>
        {props.answerText}
        </button>
    );
};
export default AnswerButton;