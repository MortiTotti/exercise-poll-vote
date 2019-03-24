import React from 'react';
import { Table, Grid, Responsive, Label, Progress, Container, Header, Button, Card, Statistic } from "semantic-ui-react";

const MobileCard = ({ item, choice, activeRow }) =>
    <Card fluid={true}>
        <Card.Content>
            <Card.Header>{choice.choice}</Card.Header>
            <Card.Meta>
                <Statistic size='mini' horizontal>
                    <Statistic.Value>
                        <Label style={{ marginTop: '10px' }} color='red'>{choice.votes}</Label>
                    </Statistic.Value>
                    <Statistic.Label style={{ marginTop: '10px' }}>votes</Statistic.Label>
                </Statistic>

            </Card.Meta>
            <Card.Description>
                {(choice.votes / item.allVotes * 100).toFixed(1)}%
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Progress
                style={{ margin: '0' }}
                size='medium'
                percent={(choice.votes / item.allVotes * 100).toFixed(1)}
                color='red' />
        </Card.Content>
    </Card>

const Layout = ({ item, activeRow }) => (
    <Container style={{ marginTop: '20px' }}>
        <Table>
            <Table.Header fullWidth>
                <Table.Row>
                    <Table.HeaderCell colSpan='6'>
                        <Responsive as={Label} maxWidth={769} color='red' size='big' ribbon>Question Details</Responsive>
                        <Responsive as={Label} minWidth={770} color='blue' size='big' ribbon>Question Details</Responsive>
                        <Header> Question: {item.question}</Header>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body className="table-row">
                {item.choices.map((choice, index) =>
                    <Table.Row as='tr' active={activeRow} key={index}>
                        <Responsive as={Table.Cell} maxWidth={769}>
                            <MobileCard item={item} choice={choice} />
                        </Responsive>
                        <Responsive as={Table.Cell} minWidth={770}>{choice.choice}</Responsive>
                        <Responsive as={Table.Cell} minWidth={770}>
                            <Statistic size='mini' horizontal>
                                <Statistic.Value>
                                    <Label size="large" color='blue'>{choice.votes}</Label>
                                </Statistic.Value>
                                <Statistic.Label>votes</Statistic.Label>
                            </Statistic>
                        </Responsive>
                        <Responsive as={Table.Cell} minWidth={770} verticalAlign='middle'>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width='3'>
                                        {(choice.votes / item.allVotes * 100).toFixed(1)}%
                                    </Grid.Column>
                                    <Grid.Column width='13'>
                                        <Progress
                                            style={{ margin: '0' }}
                                            size='medium'
                                            percent={(choice.votes / item.allVotes * 100).toFixed(1)}
                                            color='blue' />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Responsive>
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
        <Responsive as={Button} maxWidth={769} floated="right" color="red">Save vote</Responsive>
        <Responsive as={Button} minWidth={770} floated="right" color="linkedin">Save vote</Responsive>
    </Container>
)

export default Layout;
