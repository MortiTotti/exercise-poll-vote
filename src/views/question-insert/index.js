import React from 'react';
import { withToastManager } from 'react-toast-notifications';
import { addQuestion } from "Apis";
import Layout from "./Layout";

class QuestionInsert extends React.Component {

    forwardedRef = React.createRef()
    state = {
        question: "",
        choices: [],
        isSending: false
    }

    _handleDataChange = (e) => {
        this.setState({ question: e.target.value });
    }

    _submit = () => {
        const { question, choices } = this.state;
        let newQuestion = { question, choices };
        this.setState({ isSending: true }, () => {
            addQuestion(newQuestion)
                .then(() => {
                    this.props.toastManager.add("New question saved", {
                        appearance: 'success',
                        autoDismiss: true,
                    });
                    this.props.history.goBack();
                })
                .catch(error => {
                    this.props.toastManager.add(error.message || error, {
                        appearance: 'error',
                        autoDismiss: true,
                    });
                })
                .finally(() => this.setState({ isSending: false }));
        });
    }

    _back = () => {
        this.props.history.goBack();
    }

    _isQuestionInformationIsValid = () => {
        const { question, choices } = this.state;
        return question && (choices.length !== 0);
    }

    _addQuestionChoice = () => {
        let choiceTitle = this.forwardedRef.current.value;
        let { choices } = this.state;
        if (choices.indexOf(choiceTitle) === -1) {
            this.setState({ choices: [...choices, choiceTitle] });
            this.forwardedRef.current.value = "";
            this.forwardedRef.current.focus();
        }
        else {
            this.props.toastManager.add("Choice is already exist in the list", {
                appearance: 'error',
                autoDismiss: true,
            });
        }
    }

    _removeChoice = (choiceTitle) => {
        const { choices } = this.state;
        this.setState({ choices: choices.filter(t => t !== choiceTitle) })
    }

    render() {
        const { isSending, choices } = this.state;
        const isQuestionInformationIsValid = this._isQuestionInformationIsValid();
        return (
            <Layout
                submit={this._submit}
                back={this._back}
                addQuestionChoice={this._addQuestionChoice}
                removeChoice={this._removeChoice}
                setQuestionChoiceInputRef={this.forwardedRef}
                handleDataChange={this._handleDataChange}
                choices={choices}
                isSending={isSending}
                isQuestionInformationIsValid={isQuestionInformationIsValid}
            />
        );
    }
}

export default withToastManager(QuestionInsert);
