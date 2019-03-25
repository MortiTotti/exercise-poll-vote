import React from 'react';
import { Table, Grid, Label, Container, Header, Button } from "semantic-ui-react";
import { ViewContainer } from "Components";
import ChoiceItemMobileLayout from "./Choice-Item-Mobile-Layout";
import ChoiceItemDesktopLayout from "./Choice-Item-Desktop-Layout";

const RowItem = ({ item, choice, onClick, active }) => {
    const votePercentage = (item.allVotes) ? (choice.votes / item.allVotes * 100).toFixed(1) : 0;
    return (
        <React.Fragment>
            <ChoiceItemMobileLayout item={item} votePercentage={votePercentage} choice={choice} active={active} onClick={onClick} />
            <ChoiceItemDesktopLayout item={item} votePercentage={votePercentage} choice={choice} active={active} onClick={onClick} />
        </React.Fragment>
    );
}

const Layout = ({ item, handleRowClick, saveVote, activeIndex, back }) => (
    <ViewContainer>
        <Table>
            <Table.Header fullWidth>
                <Table.Row>
                    <Table.HeaderCell colSpan='6'>
                        <Label color='blue' size='large' ribbon>Question Details</Label>
                        <Header> Question: {item.question}</Header>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body className="table-row">
                {item.choices.map((choice, index) =>
                    <RowItem key={index} item={item} choice={choice} active={activeIndex === index} onClick={() => handleRowClick(choice, index)} />
                )}
            </Table.Body>
        </Table>
        <Grid>
            <Grid.Row>
                <Grid.Column style={{ paddingBottom: '20px' }}>
                    <Button onClick={back}>Back</Button>
                    <Button onClick={saveVote} floated="right" color="green">Save vote</Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </ViewContainer>
)

export default Layout;
