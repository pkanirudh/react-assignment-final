import React from 'react';

import './SearchResultsCopy.css';
import PageRenderer from '../PageRenderer/PageRenderer.react';

class SearchResultsCopy extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            list: [],
            tempList:[],
            empty: true,
            realTag: ""
        }
    }
    componentDidMount(){
        let url = "http://localhost:42069/items"
            console.log("mount");
            fetch(url).then(resp=>resp.json()).then(list=>{this.setState({list,tempList:list, empty:false})});  
        let filteredList = this.state.list.filter(eachItem => eachItem.tags.includes(this.props.tag));
        this.setState({list:filteredList, realTag: this.props.tag,empty: false});
        
    }


    searchWithTag = () =>{
        let url = "http://localhost:42069/items"
        fetch(url).then(resp=>resp.json()).then(tempList=>{this.setState({tempList:tempList, empty:false})});
        console.log(this.state);
        var filteredList;
        if(this.props.tag==="") filteredList=this.state.tempList;
        else filteredList = this.state.tempList.filter(eachItem => eachItem.tags.includes(this.props.tag));
        this.setState({list:filteredList, realTag: this.props.tag});
    }
    render() {
        if(this.state.empty){
            
            return(
                <div></div>
            )
        }
        else{
            return (
            <div className='searchresultscopy_wrapper'>
                <button className="btn btn-primary" onClick={this.searchWithTag}>Search</button>
                <PageRenderer list = {this.state.list} actionFromSearch="results"/>
            </div>
        );
        }
        
    }
}

export default SearchResultsCopy;