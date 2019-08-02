import React from 'react';
import './QuestionAnswers.css';
import AnswersIterator from '../AnswersIterator/AnswersIterator.react';
import ReactHtmlParser from 'react-html-parser'

class QuestionAnswers extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='questionanswers_wrapper'>
                <h5>{this.props.question.title}</h5>
                <div className="container">
                    <div className="card bg-light row">
                        <div className="card-body">
                            <span className="float-left">
                                <img className="rounded" src = {this.props.question.owner.profile_image} alt="AuthorDP" width="100"/>
                                <p className="text-muted"><small>{this.props.question.owner.display_name}</small></p>
                            </span>
                            <p>Viewed: {this.props.question.view_count} times</p>
                            <p>Score: {this.props.question.score}</p>
                            <p>Question</p>
                            <div className="image_wrappper">{ReactHtmlParser(this.props.question.body)}</div>
                        </div>
                    </div>
                </div>
                <h6>Answered {this.props.question.answer_count}</h6>
                <AnswersIterator qid={this.props.question.question_id}></AnswersIterator>
            </div>
        );
    }
}

export default QuestionAnswers;