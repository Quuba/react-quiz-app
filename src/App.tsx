import React from 'react';
import './App.css';
import Header from "./components/Header";
import QuizPage from "./components/QuizPage";
import {QuestionRepository} from "./data/QuestionRepository";
import {useState} from "react";
import {IQuestion} from "./data/QuestionRepository";
import EndScreen from "./components/EndScreen";

let questionIndex: number = 0;
let goodAnswers: number = 0;
let wrongAnswers: number = 0;
let maxQuestionCount: number = 3;

if(maxQuestionCount > QuestionRepository.questionCount){
    throw 'maxQuestionCount of '+maxQuestionCount+' is larger than the number of questions in database';
}

function App() {
    const [question, SetQuestion] = useState<IQuestion>(QuestionRepository.At(questionIndex))

    const [isFinished, setIsFinished] = useState<boolean>(false)

    function onCorrectAnswer() {
        goodAnswers++;
        if (questionIndex < maxQuestionCount - 1) {
            questionIndex++
            SetQuestion(QuestionRepository.At(questionIndex))
        } else {
            setIsFinished(true);
            console.log('finished')
        }
    }

    function onWrongAnswer() {
        // console.log('false')
        wrongAnswers++;
        if (questionIndex < maxQuestionCount - 1) {
            questionIndex++
            SetQuestion(QuestionRepository.At(questionIndex))
        } else {
            setIsFinished(true);
            console.log('finished')
        }
    }

    function Restart() {
        questionIndex = 0;
        goodAnswers = 0;
        wrongAnswers = 0;
        SetQuestion(QuestionRepository.At(questionIndex))
        setIsFinished(false);
    }

    if (!isFinished) {
        return (
            <div className="App">
                <Header title={'hello'}/>
                <QuizPage question={question.question} answers={question.answers} onCorrectAnswer={onCorrectAnswer}
                          onWrongAnswer={onWrongAnswer}/>
            </div>
        );
    } else {
        return (
            <div className="App">
                <EndScreen goodAnswers={goodAnswers} wrongAnswers={wrongAnswers} onTryAgain={Restart}/>
            </div>
        );
    }


}

export default App;
