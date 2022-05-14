import React,{Component} from "react";
import ReactDOM from "react-dom";
import './assets/style.css';
import quizService from './quizService';

class QuizBee extends Component{

    state = {
        questionBank:[]
    };
    getQuestions = () => {
        quizService().then(question =>{
            this.setState({
                questionBank:question
            })
        })
    }
    render(){
        return(
            <div className="container">
                <div className="title">QuizBee</div>
            </div>
        );
    }
}

ReactDOM.render(<QuizBee/>,document.getElementById("root"));