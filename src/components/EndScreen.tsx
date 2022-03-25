import React, {FC} from 'react';

interface EndScreenProps{
    goodAnswers:number;
    wrongAnswers:number;
    onTryAgain:any;
}

const EndScreen:FC<EndScreenProps> = (props) => {
    return (
        <div className={'EndScreen'}>
            <h2>You Scored {props.goodAnswers} / {props.goodAnswers + props.wrongAnswers}</h2>
            <button onClick={props.onTryAgain}>Try Again</button>
        </div>
    );
};

export default EndScreen;