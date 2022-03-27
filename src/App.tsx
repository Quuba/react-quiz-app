import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header";
import QuizPage from "./components/QuizPage/QuizPage";
import {IQuestion} from "./data/QuestionRepository";
import EndScreen from "./components/EndScreen/EndScreen";
import AddQuestionPage from "./components/AddQuestionPage/AddQuestionPage";


// https://blog.bitsrc.io/making-api-calls-with-react-hooks-748ebfc7de8c
// good stuff

enum Page {
    Quiz,
    EndScreen,
    AddQuestionScreen,
}

let questionIndex: number = 0;
let goodAnswers: number = 0;
let wrongAnswers: number = 0;
let maxQuestionCount: number = 0;


let questions: any = [];


function App() {

    function fromJson(res: any) {
        let q: IQuestion;
        q = {
            answer1: res.answer1,
            answer2: res.answer2,
            answer3: res.answer3,
            answer4: res.answer4,
            correct1: res.correct1,
            correct2: res.correct2,
            correct3: res.correct3,
            correct4: res.correct4,
            id: res.id,
            questionText: res.questionText
        }
        return q
    }


    const [question, setQuestion] = useState<IQuestion>({
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
    })

    const [currentPage, setPage] = useState<Page>(Page.Quiz)

    useEffect(() => {
        fetch('https://springboottest234.herokuapp.com/all')
            .then(response => response.json())
            .then(response => {
                    questions = response.map((res: any) => fromJson(res))
                    setQuestion(fromJson(questions[questionIndex]))
                }
            )
        fetch('https://springboottest234.herokuapp.com/all/count')
            .then(response => response.json()).then(
            res => maxQuestionCount = res
        )
    }, [currentPage])

    function onCorrectAnswer() {
        console.log(maxQuestionCount)
        console.log(questionIndex)


        goodAnswers++;
        if (questionIndex < maxQuestionCount - 1) {
            questionIndex++
            setQuestion(questions[questionIndex])
        } else {
            // setIsFinished(true);
            setPage(Page.EndScreen)
        }
    }

    function onWrongAnswer() {
        console.log(maxQuestionCount)
        console.log(questionIndex)

        // console.log('false')
        wrongAnswers++;
        if (questionIndex < maxQuestionCount - 1) {
            questionIndex++

            setQuestion(questions[questionIndex])

        } else {
            setPage(Page.EndScreen)
            console.log('finished')
        }
    }

    function Restart() {
        questionIndex = 0;
        goodAnswers = 0;
        wrongAnswers = 0;
        setQuestion(questions[questionIndex])

        setPage(Page.Quiz)
    }

    function GoToAddQuestionPage() {
        setPage(Page.AddQuestionScreen);
    }

    switch (currentPage) {
        case Page.Quiz:
            return (
                <div className="App">
                    <Header title={'hello'}/>
                    <QuizPage questionData={question} onCorrectAnswer={onCorrectAnswer} onWrongAnswer={onWrongAnswer}/>
                </div>
            );
            break;
        case Page.EndScreen:
            return (
                <div className="App">
                    <EndScreen goodAnswers={goodAnswers} wrongAnswers={wrongAnswers} onTryAgain={Restart}
                               onAddQuestion={GoToAddQuestionPage}/>
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
