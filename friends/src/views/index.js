import React from "react";
import { connect } from "react-redux";

import { fetchData } from '../actions';

class FriendsListView extends React.Component {

    componentDidMount() {

    }

    render(){
        return (
            <div>Logged in!!!</div>
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
        fetchData
    }
)(FriendsListView);