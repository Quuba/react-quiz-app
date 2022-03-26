import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import QuizPage from "./components/QuizPage/QuizPage";
import {IQuestion, QuestionRepository} from "./data/QuestionRepository";
import EndScreen from "./components/EndScreen/EndScreen";
import AddQuestionPage from "./components/AddQuestionPage/AddQuestionPage";

enum Page{
    Quiz,
    EndScreen,
    AddQuestionScreen,
}

let questionIndex: number = 0;
let goodAnswers: number = 0;
let wrongAnswers: number = 0;
let maxQuestionCount: number = 3;

if (maxQuestionCount > QuestionRepository.questionCount) {
    throw 'maxQuestionCount of ' + maxQuestionCount + ' is larger than the number of questions in database';
}

function App() {
    const [question, SetQuestion] = useState<IQuestion>(QuestionRepository.At(questionIndex))

    // const [isFinished, setIsFinished] = useState<boolean>(false)
    const [currentPage, setPage] = useState<Page>(Page.Quiz)


    function onCorrectAnswer() {
        goodAnswers++;
        if (questionIndex < maxQuestionCount - 1) {
            questionIndex++
            SetQuestion(QuestionRepository.At(questionIndex))
        } else {
            // setIsFinished(true);
            setPage(Page.EndScreen)
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
            // setIsFinished(true);
            setPage(Page.EndScreen)
            console.log('finished')
        }
    }

    function Restart() {
        questionIndex = 0;
        goodAnswers = 0;
        wrongAnswers = 0;
        SetQuestion(QuestionRepository.At(questionIndex))
        // setIsFinished(false);
        setPage(Page.Quiz)
    }
    function GoToAddQuestionPage(){
        setPage(Page.AddQuestionScreen);
    }

    switch (currentPage){
        case Page.Quiz:
            return (
                <div className="App">
                    <Header title={'hello'}/>
                    <QuizPage question={question.question} answers={question.answers} onCorrectAnswer={onCorrectAnswer}
                              onWrongAnswer={onWrongAnswer}/>
                </div>
            );
            break;
        case Page.EndScreen:
            return (
                <div className="App">
                    <EndScreen goodAnswers={goodAnswers} wrongAnswers={wrongAnswers} onTryAgain={Restart} onAddQuestion={GoToAddQuestionPage}/>
                </div>
            );
            break;
        case Page.AddQuestionScreen:
            return (
                <div className="App">
                    <AddQuestionPage/>
                </div>
            );
            break;
    }


}

export default App;
