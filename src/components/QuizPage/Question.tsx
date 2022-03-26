import React, {FC} from 'react';

interface QuestionProps {
    text: string;
}

const Question: FC<QuestionProps> = (props) => {
    return (
        <div className='Question'>
            <h2>{props.text}</h2>
        </div>
    );
};

Question.defaultProps = {
    text: "sample question"
}

export default Question;