import React from 'react';
import Layout from "./Layout";
import "./style.css";

class QuestionDetails extends React.Component {
    state = {
        date: '',
        question: '',
        published_at: '',
        choices: [],
        allVotes: '',
        activeRow: false
    }

    componentDidMount() {
        const { state } = this.props.location;
        console.log(state);
        this.setState({ ...state }, () => {
            this._calcAllVotes();
        });
    }

    _calcAllVotes = () => {
        let { choices } = this.state;
        let allVotes = choices.map(t => t.votes).reduce((a, b) => a + b);
        this.setState({ allVotes })
    }

    _handleRowClick = () => {

    }

    render() {
        let { activeRow } = this.state
        return (
            <Layout
                activeRow={activeRow}
                item={this.state}
            />
        );
    }
}

export default QuestionDetails;