import React from 'react';
import { Responsive, Table, Label, Progress, Card } from "semantic-ui-react";

const ChoiceItemMobileLayout = ({ item, choice, votePercentage, active, onClick }) =>
    <Responsive as={Table.Row} {...Responsive.onlyMobile} key={item.id} active={active} onClick={onClick}>
        <Table.Cell>
            <Card fluid={true}>
                <Card.Content>
                    <Card.Header>{choice.choice}</Card.Header>
                    <Card.Meta>
                        <Label color='orange'>Votes<Label.Detail>{choice.votes}</Label.Detail></Label>
                    </Card.Meta>
                    <Card.Description>
                        {`${votePercentage} %`}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Progress
                        style={{ margin: '0' }}
                        size='medium'
                        percent={votePercentage}
                        color='blue' />
                </Card.Content>
            </Card>
        </Table.Cell>
    </Responsive>

export default ChoiceItemMobileLayout;