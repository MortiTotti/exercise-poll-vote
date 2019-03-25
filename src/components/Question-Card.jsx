import React from 'react';
import moment from "moment";
import { Link } from "react-router-dom";
import { Card, Label } from 'semantic-ui-react';

const QuestionCard = ({ item }) =>
    <Card as={Link} to={{ pathname: `${item.url}`, state: { ...item } }}>
        <Card.Content>
            {item.question}
            <Card.Meta>
                <span className="date">
                    {moment(item.published_at).format("DD-MM-YYYY")}
                </span>
            </Card.Meta>
        </Card.Content>
        <Card.Content extra>
            <Label color='orange'>
                Choices
                <Label.Detail>
                    {item.choices.length}
                </Label.Detail>                
            </Label>
        </Card.Content>
    </Card>

export default QuestionCard;
