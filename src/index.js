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

    componentDidMount(){
        // this function will be called when this component will be load for the first time
        this.getQuestions();
    }
    render(){
        return(
            <div className="container">
                <div className="title">QuizBee</div>
                {this.state.questionBank.length > 0 && this.state.questionBank.map(({question,answers,correct,questionId}) => (<h4>{question}</h4>))}
            </div>
        );
    }
}

ReactDOM.render(<QuizBee/>,document.getElementById("root"));