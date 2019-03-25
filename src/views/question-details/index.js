import React from 'react';
import { withToastManager } from 'react-toast-notifications';
import Layout from "./Layout";
import "./style.css";

class QuestionDetails extends React.Component {
    state = {
        date: '',
        question: '',
        published_at: '',
        choices: [],
        allVotes: '',
        activeIndex: '',
        selectedToVote: ''
    }

    componentDidMount() {
        const { state } = this.props.location;
        this.setState({ ...state }, () => {
            this._calcAllVotes();
        });
    }

    // Calculate all votes for percentage usage 
    _calcAllVotes = () => {
        let { choices } = this.state;
        let allVotes = choices.map(t => t.votes).reduce((a, b) => a + b);
        this.setState({ allVotes })
    }

    // When you click on a specific table's row  
    _handleRowClick = (choice, index) => {
        this.setState({ selectedToVote: choice, activeIndex: index });
    }

    _saveVote = () => {
        //TODO: This should be an api service call to save the Votes
        let { selectedToVote } = this.state;
        let choices = this.state.choices.map(t => t.url === selectedToVote.url ?
            { ...t, votes: t.votes + 1 } : t);
        this.setState({ choices });
        this.props.toastManager.add(`You vote is "${selectedToVote.choice}"`, {
            appearance: 'success',
            autoDismiss: true,
        });
    }

    _back = () => {
        this.props.history.goBack();
    }

    render() {
        let { activeIndex } = this.state
        return (
            <Layout
                activeIndex={activeIndex}
                back={this._back}
                saveVote={this._saveVote}
                handleRowClick={this._handleRowClick}
                item={this.state}
            />
        );
    }
}

export default withToastManager(QuestionDetails);