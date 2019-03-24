import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import QuestionsList from 'Views/questions-list';
import QuestionDetails from 'Views/question-details';

const MainRoutes = () =>
    <Router>
        <Switch>
            <Route path='/questions/:id' component={QuestionDetails} />
            <Route path='/questions' component={QuestionsList} />
            <Route exact path='/' component={QuestionsList} />
            <Route />
        </Switch>
    </Router>

export default MainRoutes;

