import React from 'react';
import { getQuestions } from "Apis";
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
        getQuestions()
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