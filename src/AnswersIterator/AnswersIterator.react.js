import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import UserProfile from '../UserProfile/UserProfile.react'

class AnswersIterator extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            empty: true,
            list: [],
            action: "answers",
            passObject: ""
        }
    }
    
    componentDidMount(){
        let url ="https://api.stackexchange.com/2.2/questions/"+this.props.qid+"/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody"
        fetch(url).then(resp=>resp.json()).then(list=>{this.setState({list,tempList:list, empty:false})});
    }

    render() {
        if(this.state.empty){
            return(<div></div>)
        }
        else if(this.state.list.items==='undefined'||this.state.list.items.length===0){
            return(
                <div>No results</div>
            );
        }
        else if(this.state.action==="answers"){
            return (
                this.state.list.items.map((eachAnswer, index)=>{
                    return(
                        <div className="container" key={index}>
                        <div className="card bg-light row">
                            <div className="card-body">
                                <span className="float-left">
                                    <p> Score: {eachAnswer.score}</p>
                                </span>
                                <span className="float-right">
                                    <img className="rounded" src = {eachAnswer.owner.profile_image} alt="AuthorDP" width="100"/>
                                    <small className="text-primary _link" onClick={()=>{this.setState({passObject: eachAnswer.owner,action: "user"})}}> {eachAnswer.owner.display_name}</small>
                                </span>
                                <a href={"https://stackoverflow.com/a/"+eachAnswer.answer_id}>Answer Link in stackoverflow</a>
                                <div>{ReactHtmlParser(eachAnswer.body)}</div>
                            </div>
                        </div>
                    </div>
                    )
                })
                
            );
        }
        else if(this.state.action==="user"){
            return(
                <div>
                    <p className="text-primary _link" onClick={()=>{this.setState({action: "answers"})}}>BACK TO ANSWERS</p>
                    <UserProfile owner = {this.state.passObject}/>
                </div>
            );
        }
        
    }
}

export default AnswersIterator;