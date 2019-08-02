import React from 'react';
import './UserProfile.css';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='userprofile_wrapper'>
                <div className="container">
                    <span className="float-left">
                        <img src={this.props.owner.profile_image} className="rounded" width="150" alt="User" />
                    </span>
                    <div className="card bg-light">
                        <p>Name: {this.props.owner.display_name}</p>
                        <p>Reputation: {this.props.owner.reputation}</p>
                        <p>Profile Link: <a href={this.props.owner.link}>Go to Profile in stackoverflow</a></p>
                    </div>
                </div>
                <div className="container">
                    <h6>Recent Answers</h6>
                    <div className="card bg-light row">
                        <div className="card-body">
                            <span className="float-left">
                                Votes
                            </span>
                            <p className='font-weight-bold'>Answer Title goes here...</p>                       
                            <p>Answer Text</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserProfile;