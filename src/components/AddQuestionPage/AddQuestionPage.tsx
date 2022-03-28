import React, {FC} from 'react';
import {useForm} from "../../hooks/useForm";

const AddQuestionPage: FC = () => {
    const initialState = {
            questionText: "",
            answer_1: "",
            answer_2: "",
            answer_3: "",
            answer_4: "",
            checkbox_1: '',
            checkbox_2: '',
            checkbox_3: '',
            checkbox_4: '',
        }
    ;

    let formRef: any = '';

    async function sendQuestionCallback() {
        // send "values" to database
        // console.log(values)

        const correctedJson = {
            answer1: values.answer_1,
            answer2: values.answer_2,
            answer3: values.answer_3,
            answer4: values.answer_4,
            correct1: values.checkbox_1 === 'on',
            correct2: values.checkbox_2 === 'on',
            correct3: values.checkbox_3 === 'on',
            correct4: values.checkbox_4 === 'on',
            questionText: values.questionText


        }

        if (correctedJson.questionText === '') {
            console.log('empty question');
            return;
        }

        await fetch('https://springboottest234.herokuapp.com/question', {
            method: 'POST',
            body: JSON.stringify(correctedJson),
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        })
            .then(response => response.json())
            .then(data => console.log(data.ok))
            .then(() => formRef.reset())
            .catch((error => console.error("Error:", error)))
        // console.log(correctedJson.)
    }


    // getting the event handlers from our custom hook
    const {onChange, onSubmit, onReset, values, } = useForm(
        sendQuestionCallback,
        initialState,
    );


    return (
        <div className={'AddQuestionPage'}>
            <h2>Add Your Question Here:</h2>
            <form onSubmit={onSubmit} onReset={onReset} method={'post'} ref={(el) => formRef = el}>
                <div className={'QuestionInputBox'}>
                    <input type={"text"} placeholder={'Your Question'} name={'questionText'} onChange={onChange}/>
                </div>


                <div className={'AnswerInputBox'}>
                    <input type={"text"} placeholder={'Answer 1'} name={'answer_1'} onChange={onChange}/>
                    <input type={'checkbox'} name={'checkbox_1'} onChange={onChange}/>
                </div>

                <div className={'AnswerInputBox'}>
                    <input type={"text"} placeholder={'Answer 2'} name={'answer_2'} onChange={onChange}/>
                    <input type={'checkbox'} name={'checkbox_2'} onChange={onChange}/>
                </div>

                <div className={'AnswerInputBox'}>
                    <input type={"text"} placeholder={'Answer 3'} name={'answer_3'} onChange={onChange}/>
                    <input type={'checkbox'} name={'checkbox_3'} onChange={onChange}/>
                </div>

                <div className={'AnswerInputBox'}>
                    <input type={"text"} placeholder={'Answer 4'} name={'answer_4'} onChange={onChange}/>
                    <input type={'checkbox'} name={'checkbox_4'} onChange={onChange}/>
                </div>


                <input type={'submit'} value={'add question'}/>
            </form>
        </div>
    );
};

export default AddQuestionPage;