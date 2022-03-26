import React, {FC, useState} from 'react';
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

    async function sendQuestionCallback() {
        // send "values" to database
        console.log(values)

        const correctedJson = {
            questionText: values.questionText,
            answers: [
                {
                    id: 0,
                    text: values.answer_1,
                    isCorrect: values.checkbox_1 == 'on',
                },
                {
                    id: 1,
                    text: values.answer_2,
                    isCorrect: values.checkbox_2 == 'on',
                },
                {
                    id: 2,
                    text: values.answer_3,
                    isCorrect: values.checkbox_3 == 'on',
                },
                {
                    id: 3,
                    text: values.answer_4,
                    isCorrect: values.checkbox_4 == 'on',
                }
            ]
        }

        console.log(correctedJson)
    }

    // getting the event handlers from our custom hook
    const {onChange, onSubmit, values} = useForm(
        sendQuestionCallback,
        initialState,
    );

    return (
        <div className={'AddQuestionPage'}>
            <h2>Add Your Question Here:</h2>
            <form onSubmit={onSubmit} method={'post'}>
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


                <input type={'submit'}/>
            </form>
        </div>
    );
};

export default AddQuestionPage;