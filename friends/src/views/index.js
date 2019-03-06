import React from "react";
import { connect } from "react-redux";

import { fetchData, addFriend } from '../actions';
import FriendForm from '../components/FriendForm';

import './index.css';

class FriendsListView extends React.Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render(){
        return (
            <div>
                {this.props.friends.map(friend => {
                return (
                    <ul key={friend.id}>
                        <li>Name: {friend.name}</li>
                        <li>Age: {friend.age}</li>
                        <li>E-mail: {friend.email}</li>
                    </ul>
                )
            })}
            <FriendForm addFriend={this.props.addFriend}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    friends: state.friends,
    fetching: state.fetching
})

export default connect(
    mapStateToProps,
    {
        fetchData,
        addFriend
    }
)(FriendsListView);