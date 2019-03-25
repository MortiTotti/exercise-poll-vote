import React from 'react';
import { withToastManager } from 'react-toast-notifications';
import { getQuestions } from "Apis";
import Layout from "./Layout";

class QuestionList extends React.Component {

    state = {
        questions: [],
        isLoading: false
    }

    componentDidMount() {
        this.setState({ isLoading: true }, () => {
            getQuestions()
                .then(questions => {
                    this.setState({ questions });
                })
                .catch(error => {
                    this.props.toastManager.add(error.message || error, {
                        appearance: 'error',
                        autoDismiss: true,
                    });
                })
                .finally(() => this.setState({ isLoading: false }));
        });
    }

    render() {
        const { isLoading, questions } = this.state;
        return (
            <Layout isLoading={isLoading} questions={questions} />
        );
    }
}

export default withToastManager(QuestionList);
