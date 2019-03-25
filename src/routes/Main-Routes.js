import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import QuestionsList from 'Views/questions-list';
import QuestionInsert from 'Views/question-insert';
import QuestionDetails from 'Views/question-details';

const MainRoutes = () =>
    <Router>
        <React.Fragment>
            <Switch>
                <Route exact path='/' component={QuestionsList} />
                <Route path='/questions/:id' component={QuestionDetails} />
                <Route path='/questions' component={QuestionsList} />
                <Route path='/questioninsert' component={QuestionInsert} />
            </Switch>
        </React.Fragment>
    </Router>

export default MainRoutes;

