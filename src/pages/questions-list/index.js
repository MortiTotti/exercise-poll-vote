import React from 'react';
import { QuestionActions } from "Actions";
import Layout from "./Layout";
import "./style.css";

class QuestionList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: []
        }
    }

    componentDidMount() {
        QuestionActions
            .getQuestions()
            .then(questions => {
                this.setState({ questions });
                console.log(questions)
            });
    }

    render() {
        const { questions } = this.state;
        return (
            <Layout questions={questions} />
        );
    }
}

export default QuestionList;