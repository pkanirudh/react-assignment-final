import React from 'react';
import './PageRenderer.css';
import UserProfile from '../UserProfile/UserProfile.react';
import QuestionAnswers from '../QuestionAnswers/QuestionAnswers.react';

class PageRenderer extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            action: this.props.actionFromSearch,
            passObject: {},
            color: "bg-light"
        }
    }

    componentDidMount(){
        this.setState({action: this.props.actionFromSearch})
        console.log(this.props.actionFromSearch)
        console.log("mounted render")
    }


    render() {
        if(this.props.list==='undefined'||this.props.list.length===0) return(<div>No Results</div>)
        if(this.state.action==="results"){
            return (
                this.props.list.map((eachQuestion,index) => {
                return (
                    <div className='searchresults_wrapper' key={index}>
                        <div className="container">
                            
                            <div className ={eachQuestion.is_answered ? "bg-success card row text-white" : "bg-light card row" }>  
                                    <div className="card-body">
                                    <span className="float-left">
                                        Votes: {eachQuestion.score} 
                                    </span>
                                    <span className="float-right">
                                        <img  className="rounded" src = {eachQuestion.owner.profile_image} alt="AuthorDP" width="100"/>
                                    </span>
                                    <p className='font-weight-bold _link' onClick={()=>{this.setState({passObject: eachQuestion,action: "question"})}}>{eachQuestion.title}</p>
                                    <small>by</small><small className="_link" onClick={()=>{this.setState({passObject: eachQuestion.owner,action: "user"})}}> {eachQuestion.owner.display_name}</small>
                                    
                                    </div>
                            </div>
                                
                            
                        </div>
                    </div>
                );
            })
        
        );
        }
        else if(this.state.action==="user"){
            return(
                <div>
                    <p className="text-primary _link" onClick={()=>{this.setState({action: "results"})}}>BACK TO SEARCH</p>
                    <UserProfile owner = {this.state.passObject}/>
                </div>
            );
        }
        else if(this.state.action==="question"){
            return (
            <div>
                <p className="text-primary _link" onClick={()=>{this.setState({action: "results"})}}>BACK TO SEARCH</p>
                <QuestionAnswers question = {this.state.passObject}/>
            </div>
            );
        }     
    }
}

export default PageRenderer;