import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import QuestionsList from 'Pages/questions-list';
import QuestionDetails from 'Pages/question-details';

const AppRoutes = () =>
    <Router>
        <Switch>
            <Route path='/questions/:id' component={QuestionDetails} />
            <Route path='/questions' component={QuestionsList} />
            <Route exact path='/' component={QuestionsList} />
            <Route />
        </Switch>
    </Router>

export default AppRoutes;

