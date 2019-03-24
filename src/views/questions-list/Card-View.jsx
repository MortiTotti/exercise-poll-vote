import React from 'react';
import moment from "moment";
import { Link } from "react-router-dom";
import { Card, Label } from 'semantic-ui-react';

const CardView = ({ item }) =>
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
            <span>
                Choices:
                <Label circular color='red'>
                    {item.choices.length}
                </Label>
            </span>
        </Card.Content>
    </Card>

export default CardView;
